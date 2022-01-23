import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../../lib/style/theme';

export const SectionWorkshops = styled.div`
    color: ${colors.white};
    margin: 0 auto;
    max-width: 360px;
    padding-left: 20px;
    position: relative;
    @media  screen and (${breakpoints.desktop}) {
        max-width: 1440px;
        padding: 0 60px;
    }
`;

export const BackgroundImageWrapper = styled.div`
`;

export const BackgroundImage1 = styled.img`
    display: none;
    @media  screen and (${breakpoints.desktop}) {
        display: block;
        position: absolute;
        top: 600px;
        left: 163.2px;
    }
`;

export const BackgroundImage2 = styled.img`
    display: none;
    @media  screen and (${breakpoints.desktop}) {
        display: block;
        position: absolute;
        top: 960px;
        left: 404.8px;
    }
`;

export const BackgroundImage3 = styled.img`
    display: none;
    @media  screen and (${breakpoints.desktop}) {
        display: block;
        position: absolute;
        top: 800px;
        right: 114.4px;
    }
`;

export const BackgroundImage4 = styled.img`
    position: absolute;
    right: 30px;
    top: 790px;
    @media  screen and (${breakpoints.desktop}) {
        display: none;
    }
`;

export const Content = styled.div`
    @media  screen and (${breakpoints.desktop}) {
        display: flex;
    }
`;

export const LeftWrapper = styled.div`
    font-family: 'Everett';
`;

export const InfoNumber = styled.p`
    font-size: 132px;
    line-height: 132px;
    letter-spacing: -0.015em;
    @media  screen and (${breakpoints.desktop}) {
        font-size: 130px;
        line-height: 122px;
        letter-spacing: -0.065em;
        margin-right: 218.4px;
        width: 128px;
    }
`;

export const InfoText = styled.p`
    font-size: 32px;
    line-height: 40px;
    @media  screen and (${breakpoints.desktop}) {
        font-size: 36px;
        line-height: 42px;
        margin-top: 20.2px;
        letter-spacing: -0.035em;
    }
`;

export const ArrowWrapper = styled.div`
    display: none;
    position: absolute;
    @media  screen and (${breakpoints.desktop}) {
        display: block;
        display: flex;
        margin-top: 255.8px;
        left: 60px;
        top: 180px;
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

export const SectionFooter = styled.div`
    @media  screen and (${breakpoints.desktop}) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 191.6px;
    }
`;

export const WorkshopsInfo = styled.p`
    font-size: 21px;
    line-height: 32px;
    opacity: 0.8;
    width: 320px;
    @media  screen and (${breakpoints.desktop}) {
        font-size: 23px;
        line-height: 32px;
        width: 530px;
        margin-left: 346px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 41.6px;
    margin-top: 24px;
    margin-bottom: 104px;
`;

export const Text = styled.p`
    font-family: 'Haas Grot Disp';
    font-size: 20px;
    line-height: 28px;
    margin-right: 24px;
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

export const CarouselWrapper = styled.div`
        width: 960px;
`;


