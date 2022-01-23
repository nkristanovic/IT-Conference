import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { highlightsMock } from '../../lib/mock/section';
import { Grid } from '../Grid/Grid';
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
    CarouselWrapper
} from './SectionHighlightsStyle';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousel.css';
const SectionHighlights = ({
    title,
    text,
    infoNumber,
    infoText,
    onClick
}) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1440 },
            items: 3,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 1440, min: 0 },
            items: 1,
            slidesToSlide: 1
        },
    };

    const ButtonGroup = ({ next, previous }) => {
        return (
            <ArrowWrapper>
                <LeftArrow onClick={() => previous()}>
                    <BsArrowLeft
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%,-50%)'
                        }}
                    />

                </LeftArrow>
                <RightArrow onClick={() => next()}>
                    <BsArrowRight
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%,-50%)'
                        }}
                    />
                </RightArrow>
            </ArrowWrapper >
        );
    };

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
                    </LeftWrapper>
                    <Grid>
                        <CarouselWrapper>
                            <Carousel
                                className={'Container'}
                                arrows={false}
                                infinite={true}
                                responsive={responsive}
                                renderButtonGroupOutside={true}
                                customButtonGroup={<ButtonGroup />}

                            // customRightArrow={<CustomRight />}
                            // customLeftArrow={<CustomLeft />}
                            >
                                {
                                    highlightsMock.map(highlights => (
                                        <ImageCards
                                            key={highlights.id}
                                            imageUrl={highlights.imgUrl}
                                            imageAlt={highlights.imgAlt}
                                            name={highlights.name}
                                            description={highlights.description}
                                            background="blue"
                                        />
                                    ))
                                }
                            </Carousel>
                        </CarouselWrapper>
                    </Grid>
                </Content>
            </SectionHighlightsWrapper>
        </>
    );
}

export default SectionHighlights;
