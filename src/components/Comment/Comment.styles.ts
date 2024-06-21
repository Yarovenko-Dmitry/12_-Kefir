import styled from "styled-components";

// @ts-ignore
import like from "../../assets/likes/like.svg";
// @ts-ignore
import dislike from "../../assets/likes/dislike.svg";

type TLikeLogo = {
    $isLiked: boolean;
};

export const CommentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 16px;

    //border: 1px solid green;
`;

export const Avatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin-right: 8px;
    border-radius: 50%;

    //border: 1px solid rebeccapurple;
`;

export const CommentBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    margin-top: 8px;

    //background-color: rebeccapurple;
`;

export const CommentInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 8px;

    //background-color: red;
`;

export const AuthorBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;

    //background-color: red;
`;

export const Author = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    //background-color: rebeccapurple;
`;

export const Time = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: blue;

    //background-color: royalblue;
`;

export const Likes = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;

    //background-color: green;
`;

export const LikeLogo = styled.div<TLikeLogo>`
    width: 18px;
    height: 18px;
    margin-right: 8px;
    background-image: url(${({$isLiked}) => $isLiked ? like : dislike});
`;

export const CommentText = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    //background-color: grey;
`;
