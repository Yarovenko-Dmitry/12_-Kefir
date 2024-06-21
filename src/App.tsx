import React, {useEffect, useState} from "react";
import "./App.css";
import getCommentsRequest from "./api/comments/getCommentsRequest";
import {getCommentsTree} from "./helpers/getCommentsTree";
import {TComment} from "./shared/types";

const renderItems = (items: any[]) => {
    return items.map((item: TComment) => {
        if (item?.children) {
            return (
                <div key={item.id}>
                    <div key={item.id}>{item.id} *** {item.author} *** {new Date(item.created).toDateString()}</div>
                    <div style={{marginLeft: "10px"}}
                         key={item.id + 1}>{renderItems(item.children)}</div>
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
        <div>
            <h2>{totalLikes}</h2>
            =====================
            <h2>{totalComments}</h2>
            =====================
            {commentsTree && renderItems(commentsTree)}

            <button onClick={changePage}>Загрузить следующие комментарии</button>
        </div>
    );
};
