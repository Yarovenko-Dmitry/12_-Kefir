import React, {useEffect, useState} from "react";
import {
    Author,
    AuthorBox,
    Avatar,
    CommentBox,
    CommentContainer,
    CommentInfo,
    CommentText,
    Likes,
    Time,
} from "./Comment.styles";
import {TComment, TSetTotalLikes} from "../../shared/types";

type THeaderProps = {
    comment: TComment;
    setTotalLikes: TSetTotalLikes;
}

export const CommentUI = (props: THeaderProps) => {
    const {
        comment,
        setTotalLikes,
    } = props;

    const [commentLikes, setCommentLikes] = useState<number>(comment.likes);
    const [isLiked, setIsLiked] = useState<boolean>(false);

    useEffect(() => {
        setCommentLikes(+isLiked + comment.likes);
    }, [isLiked]);

    const likesHandler = () => {
        setIsLiked(prevState => !prevState);

        if (!isLiked) {
            setTotalLikes((prevLikes: number) => prevLikes + 1);
        } else {
            setTotalLikes((prevLikes: number) => prevLikes - 1);
        }
    };

    return (
        <CommentContainer key={comment.id}>
            <Avatar>{comment.author}</Avatar>
            <CommentBox>
                <CommentInfo>
                    <AuthorBox>
                        <Author>Author</Author>
                        <Time>{new Date(comment.created).toDateString()}</Time>
                    </AuthorBox>

                    <Likes onClick={likesHandler}> w {commentLikes}</Likes>
                </CommentInfo>

                <CommentText>{comment.text}</CommentText>
            </CommentBox>
        </CommentContainer>
    );
};
