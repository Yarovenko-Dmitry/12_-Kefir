import React, {useEffect, useState} from "react";
import "./App.css";
import getCommentsRequest from "./api/comments/getCommentsRequest";

type TComment = {
    id: number;
    created: Date;
    text: string;
    author: number;
    parent: number | null;
    likes: number;
}

export const App = () => {
    const [commentsData, setCommentsData] = useState<any>({});
    const [currentPage, setCurrentPage] = useState(1);

    console.log(">>> commentsData :", commentsData);

    useEffect(() => {
        async function fetchComments() {
            const response = await getCommentsRequest(currentPage);
            console.log(">>> response :", response);
            setCommentsData(response);
        }

        fetchComments();
    }, [currentPage]);

    const changePage = () => {
        setCurrentPage(prevPage => prevPage + 1);
        console.log(">>> changePage :");
    };


    let comments = commentsData.data;

    if (commentsData.data) {
        comments = commentsData.data.sort((a: TComment, b: TComment) => a.id - b.id);
        console.log(">>> comments  sort:", comments);

    }

    return (
        <div>
            {comments && comments.map((comment: TComment) => (
                <div key={comment.id}>
                    <h2 style={{color: "green"}}>author: {comment.author}</h2>
                    <h3>id: {comment.id}</h3>
                    <p>text: {comment.text}</p>
                    <h3>likes: {comment.likes}</h3>
                    <h3>created: {new Date(comment.created).toDateString()}</h3>
                    <p style={{color: "red"}}>parent: {comment.parent}</p>

                    ************************
                </div>
            ))}

            <button onClick={changePage}>Загрузить следующие комментарии</button>
        </div>
    );
};
