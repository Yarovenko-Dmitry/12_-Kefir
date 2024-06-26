import React, {useEffect, useState} from "react";
import {
    AvatarWrapper,
    Author,
    AuthorBox,
    CommentBox,
    CommentContainer,
    CommentInfo,
    CommentText,
    LikeLogo,
    Likes,
    Time,
} from "./Comment.styles";
import {TComment, TSetTotalLikes} from "../../shared/types";
import Avatar from "react-avatar";

type TAuthorData = {
    id: number,
    name: string,
    avatar: string,
}

type THeaderProps = {
    comment: TComment;
    authorData: TAuthorData;
    setTotalLikes: TSetTotalLikes;
}

export const CommentUI = (props: THeaderProps) => {
    const {
        comment,
        authorData,
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
            <AvatarWrapper>
                <Avatar src={authorData.avatar} size={"50"} round={true} />
            </AvatarWrapper>

            <CommentBox>
                <CommentInfo>
                    <AuthorBox>
                        <Author>{authorData.name}</Author>
                        <Time>{new Date(comment.created).toDateString()}</Time>
                    </AuthorBox>

                    <Likes onClick={likesHandler}>
                        <LikeLogo $isLiked={isLiked} />
                        {commentLikes}
                    </Likes>
                </CommentInfo>

                <CommentText>{comment.text}</CommentText>
            </CommentBox>
        </CommentContainer>
    );
};
