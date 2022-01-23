import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import image16 from '../../assets/images/image 16.png';
import image17 from '../../assets/images/image 17.png';
import image18 from '../../assets/images/image 18.png';
import image19 from '../../assets/images/image 19.png';
import {
    SectionWorkshops as SectionWorkshopsWrapper,
    SectionFooter,
    WorkshopsInfo,
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
    BackgroundImageWrapper,
    BackgroundImage1,
    BackgroundImage2,
    BackgroundImage3,
    BackgroundImage4
} from './SectionWorkshopsStyle';
import { workshopsMock } from '../../lib/mock/section';
import ImageCards from '../ImageCards/ImageCards';
import { Grid } from '../Grid/Grid';
const SectionWorkshops = ({
    infoNumber,
    infoText,
    info,
    text
}) => {
    return (
        <>
            <SectionWorkshopsWrapper>
                <BackgroundImageWrapper>
                    <BackgroundImage1 src={image17} alt='image 17' />
                    <BackgroundImage2 src={image18} alt='image 18' />
                    <BackgroundImage3 src={image16} alt='image 16' />
                    <BackgroundImage4 src={image19} alt='image 19' />
                </BackgroundImageWrapper>
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
                    <Grid>
                        {workshopsMock.map(workshops => (
                            <ImageCards
                                key={workshops.id}
                                imageUrl={workshops.imgUrl}
                                imageAlt={workshops.imgAlt}
                                description={workshops.name}
                                name={workshops.description}
                                background="red"
                            />
                        ))}
                    </Grid>
                </Content>
                <SectionFooter>
                    <WorkshopsInfo>{info}</WorkshopsInfo>
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
                </SectionFooter>
            </SectionWorkshopsWrapper>
        </>
    );
}

export default SectionWorkshops;