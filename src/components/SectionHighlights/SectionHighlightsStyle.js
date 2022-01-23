import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../../lib/style/theme';

export const SectionHighlights = styled.div`
    color: ${colors.white};
    margin: 0 auto;
    max-width: 360px;
    padding-left: 20px;
    @media  screen and (${breakpoints.desktop}) {
        max-width: 1440px;
        padding: 0 60px;
    }
`;

export const SectionHeader = styled.div`
    margin-top: 80px;
    @media  screen and (${breakpoints.desktop}) {
        margin-top: 208px;
        display: flex;
        justify-content: space-between;
    }
`;

export const Title = styled.h2`
    font-family: 'Everett';
    font-weight: normal;
    font-size: 45px;
    line-height: 52px;
    @media  screen and (${breakpoints.desktop}) {
        font-size: 50px;
        line-height: 54px;
        letter-spacing: -0.035em;
        width: 352.8px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 41.6px;
    margin-top: 16px;
`;

export const Text = styled.p`
    font-family: 'Haas Grot Disp';
    font-size: 20px;
    line-height: 28px;
    margin-right: 16px;
    @media  screen and (${breakpoints.desktop}) {
        font-size: 19px;
        line-height: 22px;
        margin-right: 40.3px;
    }
`;

export const Arrow = styled.div`
    background: ${colors.orange};
    color: ${colors.black};
    position: relative;
    width: 37px;
    height: 36px;
    border-radius: 28px;
    @media  screen and (${breakpoints.desktop}) {
        width: 42.4px;
        height: 41.6px;
        border-radius: 22.4px;
    }
`;

export const Content = styled.div`
    margin-top: 64px;
    @media  screen and (${breakpoints.desktop}) {
        display: flex;
        margin-top: 96px;
    }
`;

export const LeftWrapper = styled.div`
    font-family: 'Everett';
`;

export const InfoNumber = styled.p`
    font-size: 132px;
    line-height: 132px;
    letter-spacing: -0.045em;
    @media  screen and (${breakpoints.desktop}) {
        font-size: 130px;
        line-height: 122px;
        letter-spacing: -0.055em;
        margin-right: 235px;
    }
`;

export const InfoText = styled.p`
    font-size: 32px;
    line-height: 40px;
    @media  screen and (${breakpoints.desktop}) {
        font-size: 36px;
        line-height: 42px;
        margin-top: 20.2px;
    }
`;

export const ArrowWrapper = styled.div`
    display: none;
    position: absolute;
    text-align: center;
    max-width: 1440px;
    @media  screen and (${breakpoints.desktop}) {
        display: block;
        display: flex;
        top: 1750px;
        left: 130px;
    }
`;

export const LeftArrow = styled.div`
    border: 1.6px solid ${colors.white};
    position: relative;
    @media  screen and (${breakpoints.desktop}) {
        width: 42.4px;
        height: 41.6px;
        border-radius: 22.4px;
        margin-right: 15px;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const RightArrow = styled.div`
    border: 1.6px solid ${colors.white};
    position: relative;
    @media  screen and (${breakpoints.desktop}) {
        width: 42.4px;
        height: 41.6px;
        border-radius: 22.4px;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const CarouselWrapper = styled.div`
        width: 960px;
`;

