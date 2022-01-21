import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import image1 from '../../assets/images/image 1.png';
import image2 from '../../assets/images/image 2.png';
import image3 from '../../assets/images/image 3.png';
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
    ImageWrapper,
    ArrowWrapper,
    LeftArrow,
    RightArrow,
    Name,
    Description
} from './SectionHighlightsStyle';

const SectionHighlights = ({

}) => {
    return (
        <>
            <SectionHighlightsWrapper>
                <SectionHeader>
                    <Title>Conference highlights</Title>
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
                </SectionHeader>
                <Content>
                    <LeftWrapper>
                        <InfoNumber>22</InfoNumber>
                        <InfoText>Speakers</InfoText>
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
                            <Image src={image3} alt='image 3' />
                            <Name>Merlin Rebrović</Name>
                            <Description>UX Design at Google</Description>
                        </Figure>
                        <Figure>
                            <Image src={image1} alt='image 1' />
                            <Name>Magdalena Magličić</Name>
                            <Description>Web and mobile developer at FIVE</Description>
                        </Figure>
                        <Figure>
                            <Image src={image2} alt='image 2' />
                            <Name>Kene Udeze</Name>
                            <Description>UX Designer at Booking.com</Description>
                        </Figure>
                    </ImageWrapper>
                </Content>
            </SectionHighlightsWrapper>
        </>
    );
}

export default SectionHighlights;