import React from "react";
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
import {TComment} from "../../shared/types";

type THeaderProps = {
    comment: TComment
}

export const CommentUI = (props: THeaderProps) => {
    const {
        comment,
    } = props;

    return (
        <CommentContainer key={comment.id}>
            <Avatar>{comment.author}</Avatar>
            <CommentBox>
                <CommentInfo>
                    <AuthorBox>
                        <Author>Author</Author>
                        <Time>{new Date(comment.created).toDateString()}</Time>
                    </AuthorBox>
                    <Likes> w {comment.likes}</Likes>
                </CommentInfo>

                <CommentText>{comment.text}</CommentText>
            </CommentBox>
        </CommentContainer>
    );
};
