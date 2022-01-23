import React from 'react';
import { useSpring } from 'react-spring';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { highlightsMock } from '../../lib/mock/section';

import {
    SectionHighlights as SectionHighlightsWrapper,
    SectionHeader,
    Title,
    Text,
    Content,
    Arrow,
    Figure,
    Image,
    ButtonWrapper,
    LeftWrapper,
    InfoNumber,
    InfoText,
    CardWrapper,
    ArrowWrapper,
    LeftArrow,
    RightArrow,
    Name,
    Description,
    ImageWrapper
} from './SectionHighlightsStyle';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const SectionHighlights = ({
    title,
    text,
    infoNumber,
    infoText,
    imageUrl,
    imageAlt,
    name,
    description
}) => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 20, tension: 200, friction: 50 } }));

    return (
        <>
            <SectionHighlightsWrapper>
                <SectionHeader>
                    <Title>{title}</Title>
                    <ButtonWrapper>
                        <Text>{text}</Text>
                        <Arrow>
                            <BsArrowRight
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%,-50%)'
                                }}
                            />
                        </Arrow>
                    </ButtonWrapper>
                </SectionHeader>
                <Content>
                    <LeftWrapper>
                        <InfoNumber>{infoNumber}</InfoNumber>
                        <InfoText>{infoText}</InfoText>
                        <ArrowWrapper>
                            <LeftArrow>
                                <BsArrowLeft
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%,-50%)'
                                    }}
                                />
                            </LeftArrow>
                            <RightArrow>
                                <BsArrowRight
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%,-50%)'
                                    }}
                                />
                            </RightArrow>
                        </ArrowWrapper>
                    </LeftWrapper>
                    <CardWrapper>
                        <Figure>
                            <ImageWrapper onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
                                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                style={{
                                    transform: props.xys.to(trans)
                                }}>
                                <Image src={imageUrl} alt={imageAlt} />
                            </ImageWrapper>
                            <Name>{name}</Name>
                            <Description>{description}</Description>
                        </Figure>
                    </CardWrapper>
                </Content>
            </SectionHighlightsWrapper>
        </>
    );
}

export default SectionHighlights;
