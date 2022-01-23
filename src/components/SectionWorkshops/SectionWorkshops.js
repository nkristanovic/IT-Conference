import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import image4 from '../../assets/images/image 4.png';
import image5 from '../../assets/images/image 5.png';
import image6 from '../../assets/images/image 6.png';
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
    Figure,
    Image,
    ButtonWrapper,
    LeftWrapper,
    InfoNumber,
    InfoText,
    ImageWrapper,
    ArrowWrapper,
    LeftArrow,
    RightArrow,
    Name,
    Description,
    BackgroundImageWrapper,
    BackgroundImage1,
    BackgroundImage2,
    BackgroundImage3,
    BackgroundImage4
} from './SectionWorkshopsStyle';

const SectionWorkshops = ({

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
                        <InfoNumber>12</InfoNumber>
                        <InfoText>Workshops</InfoText>
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
                    <ImageWrapper>
                        <Figure>
                            <Image src={image4} alt='image 4' />
                            <Description>CSS Performance</Description>
                            <Name>Held by Harry Roberts</Name>
                        </Figure>
                        <Figure>
                            <Image src={image5} alt='image 5' />
                            <Description>Design Process</Description>
                            <Name>Held by Elena Crković</Name>
                        </Figure>
                        <Figure>
                            <Image src={image6} alt='image 6' />
                            <Description>React Native in Practice</Description>
                            <Name>Held by Ricardo Čerljenko</Name>
                        </Figure>
                    </ImageWrapper>
                </Content>
                <SectionFooter>
                    <WorkshopsInfo>Famous frontend architects and design specialists from all over the world gathered at the same place bringing you the hottest talks and holding workshops regarding the latest trends, revealing the hottest tips and tricks.</WorkshopsInfo>
                    <ButtonWrapper>
                        <Text>View schedule</Text>
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