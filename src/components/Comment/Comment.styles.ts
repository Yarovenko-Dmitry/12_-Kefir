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
`;

export const AvatarWrapper = styled.div`
    margin-right: 16px;
`;

export const CommentBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    margin-top: 8px;
`;

export const CommentInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 8px;
`;

export const AuthorBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
`;

export const Author = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: white;
`;

export const Time = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    
    color: white;
    filter: brightness(0.6);
`;

export const Likes = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    color: white;
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
    color: white;
`;
