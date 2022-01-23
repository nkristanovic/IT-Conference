import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { highlightsMock } from '../../lib/mock/section';
import ImageCards from '../ImageCards/ImageCards';
import {
    SectionHighlights as SectionHighlightsWrapper,
    SectionHeader,
    Title,
    Text,
    Content,
    Arrow,
    ButtonWrapper,
    LeftWrapper,
    InfoNumber,
    InfoText,
    ArrowWrapper,
    LeftArrow,
    RightArrow,
} from './SectionHighlightsStyle';

const SectionHighlights = ({
    title,
    text,
    infoNumber,
    infoText,
}) => {
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
                    {highlightsMock.map(highlights => (
                        <ImageCards
                            key={highlights.id}
                            imageUrl={highlights.imgUrl}
                            imageAlt={highlights.imgAlt}
                            name={highlights.name}
                            description={highlights.description}
                        />
                    ))}
                </Content>
            </SectionHighlightsWrapper>
        </>
    );
}

export default SectionHighlights;
