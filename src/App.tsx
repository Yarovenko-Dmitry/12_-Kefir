import React, {useEffect, useState} from "react";
import "./App.css";
import getCommentsRequest from "./api/comments/getCommentsRequest";
import {getCommentsTree} from "./helpers/getCommentsTree";
import {TComment, TSetTotalLikes} from "./shared/types";
import {Header} from "./components/Header";
import {CommentUI} from "./components/Comment";

const renderItems = (items: any[], setTotalLikes: TSetTotalLikes) => {
    return items.map((item: TComment) => {
        if (item?.children) {
            return (
                <div key={item.id} className="CommentWrapper">
                    <CommentUI comment={item} setTotalLikes={setTotalLikes} />

                    <div className="NestedCommentWrapper"
                         key={item.id + 1}>
                        {renderItems(item.children, setTotalLikes)}
                    </div>
                </div>
            );
        }

        return null;
    });
};

export const App = () => {
    const [commentsData, setCommentsData] = useState<any>({});
    const [currentPage, setCurrentPage] = useState(1);

    const [totalLikes, setTotalLikes] = useState(0);
    const [totalComments, setTotalComments] = useState(0);

    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await getCommentsRequest(currentPage);
                setCommentsData(response);
                setError(null);
            } catch (err: any) {
                setError(err.message);
                console.error("Error fetching data:", err);
            }
        };

        fetchComments();
    }, [currentPage]);

    useEffect(() => {
        // for correct counting on each individual page
        setTotalLikes(0);
        setTotalComments(0);

        if (commentsData.data) {
            commentsData.data.forEach((comment: TComment) => {
                setTotalLikes((prevLikes: number) => prevLikes + comment.likes);
                setTotalComments((prevComments: number) => prevComments + 1);
            });
        }
    }, [commentsData.data]);

    const changePage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    let commentsTree;

    if (commentsData.data) {
        commentsTree = getCommentsTree(commentsData.data);
    }

    if (error) {
        return (
            <>
                <div>Ошибка сети: {error}</div>
                <button onClick={changePage}>Загрузить следующие комментарии</button>
            </>
        );
    }

    if (!commentsData.data) {
        return <div>Загрузка данных...</div>;
    }

    return (
        <div className="App">
            <Header totalLikes={totalLikes} totalComments={totalComments} />

            {commentsTree && renderItems(commentsTree, setTotalLikes)}

            <button onClick={changePage}>Загрузить следующие комментарии</button>
        </div>
    );
};
