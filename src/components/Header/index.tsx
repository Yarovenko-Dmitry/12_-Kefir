import React from "react";
import {HeaderBox, InfoContainer, Divider} from "./Header.styles";

type THeaderProps = {
    totalLikes: number,
    totalComments: number
}

export const Header = (props: THeaderProps) => {
    const {
        totalLikes, totalComments,
    } = props;

    return (
        <HeaderBox>
            <InfoContainer>
                <p>{totalComments} комментариев </p>
                <p>{totalLikes}</p>
            </InfoContainer>

            <Divider/>
        </HeaderBox>
    );
};
