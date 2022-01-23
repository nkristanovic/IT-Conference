import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../../lib/style/theme';

export const SectionIntro = styled.div`
    background-color: ${colors.black};  
    color: ${colors.white};
    margin: 0 auto; 
    max-width: 360px;
    @media  screen and (${breakpoints.desktop}) {
        max-width: 1440px;
    }
`;

export const HorizontalLine = styled.div` 
    background-color: ${colors.white};
    height: 4px;
    margin: 20px;
    @media  screen and (${breakpoints.desktop}) {
        height: 3.2px;
        margin: 10px 60px 0;
    }
`;

export const Title = styled.p`
    margin-top: 12px;
    font-family: 'Haas Grot Disp';
    font-size: 16px;
    line-height: 24px;
    padding-left: 20px;
    @media  screen and (${breakpoints.desktop}) {
        margin-top: 13.6px;
        font-size: 19px;
        font-weight: normal;
        line-height: 22px;
        padding: 0 60px;
    }
`;

export const Description = styled.p`
    font-family: 'Everett';
    margin-top: 60px;
    font-size: 24px;
    line-height: 32px; 
    padding: 0 20px;
    @media  screen and (${breakpoints.desktop}) {
        margin-top: 48.06px;
        width: 1290px;
        font-size: 63px;
        line-height: 68px;
        padding-left: 60px; 
        letter-spacing: -0.035em; 
    }     
`;

export const Content = styled.div`
    font-family: 'Haas Grot Disp';
    display: flex;
    margin-top: 40px;
    overflow: auto;
    @media  screen and (${breakpoints.desktop}) {
        margin-top: 108.86px;
        overflow: hidden;
    }
`;

export const ItemSubtitle = styled.h2`
    font-size: 24px;
    line-height: 28px;
    padding: 164px 98px 40px 20px;
    width: 162px;
    &:last-child{
        width: 500px;
    }
    @media  screen and (${breakpoints.desktop}) {
        font-size: 25px;
        line-height: 29px;
        padding: 102.4px 134.4px 44.8px 60px; 
    }
`;

export const ItemText = styled.p`
        display:none;
        font-size: 14px;
        line-height: 24px;
        padding: 12px 60px 40px 20px;
    @media  screen and (${breakpoints.desktop}) {
        font-size: 16px;
        line-height: 22px;
        padding: 22.6px 76px 38.4px 60px;
    }
`;

export const Item = styled.div`
    width: 280px;
    border: 0.8px solid ${colors.gray};
    &:hover ${ItemSubtitle} {
        padding: 100px 98px 0 20px;
    }
    &:hover ${ItemText} {
        display: block;
    }
    &:hover {
        background: ${colors.gray};
    }
    @media  screen and (${breakpoints.desktop}) {
        width: 360px;
        height: 336px;
        &:hover ${ItemSubtitle} {
            padding: 37.4px 134.4px 0px 60px;
        }
        &:hover {
            background: ${colors.gray};
        }
    }
`;

export const ItemTitle = styled.h1`
    font-size: 60px;
    line-height: 68px;
    padding: 20px 182px 0 19px;
    @media  screen and (${breakpoints.desktop}) {
        font-size: 100px;
        line-height: 106px;
        padding: 29.6px 134.4px 0 60px;
    }
`;
