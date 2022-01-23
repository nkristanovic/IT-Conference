import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { colors, breakpoints } from '../../lib/style/theme';

export const CardWrapper = styled.div`
    font-family: 'Haas Grot Disp';
    margin-top: 20px;
    margin-left: -10px;
    @media  screen and (${breakpoints.desktop}) {
        margin-left: 20px;
    }
`;

export const Figure = styled.figure``;

export const ImageWrapper = styled(animated.div)`
    ${(props) => props.background === 'blue' &&
        `background-color: ${colors.blue};`}
    ${(props) => props.background === 'red' &&
        `background-color: ${colors.red};`}
    height: 314px;
    width: 264px;
    @media  screen and (${breakpoints.desktop}) {
        height: 463px;
        width: 300px;
    }
`;

export const Image = styled.img`
    width: 264px;
    height: 314px;
    object-fit: cover;
    opacity: 0.6;
    @media  screen and (${breakpoints.desktop}) {
        width: 300px;
        height: 463px;
    }
`;

export const Name = styled.p`
    font-size: 20px;
    line-height: 28px;
    margin-top: 20px;
    @media  screen and (${breakpoints.desktop}) {
        font-size: 25px;
        line-height: 29px;
        margin-top: 24.6px;
    }
`;

export const Description = styled.p`
    font-size: 16px;
    line-height: 24px;
    opacity: 0.7;
    margin-bottom: 60px;
    @media  screen and (${breakpoints.desktop}) {
        font-size: 13px;
        line-height: 19px;
        margin-top: 3.2px;
        margin-bottom: 191.4px;
    }
`;