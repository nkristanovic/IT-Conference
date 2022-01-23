import React from 'react';
import { introMock } from '../../lib/mock/section';
import {
    SectionIntro as SectionIntroWrapper,
    HorizontalLine,
    Title,
    Description,
    Content,
    Item,
    ItemTitle,
    ItemSubtitle,
    ItemText
} from './SectionIntroStyle';

const SectionIntro = ({
    title,
    description
}) => {
    return (
        <>
            <SectionIntroWrapper>
                <HorizontalLine />
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Content>
                    {introMock.map((section, index) => (
                        <Item key={index}>
                            <ItemTitle>{section.itemTitle}</ItemTitle>
                            <ItemSubtitle>{section.itemSubtitle}</ItemSubtitle>
                            <ItemText>{section.itemText}</ItemText>
                        </Item>
                    ))}
                </Content>
            </SectionIntroWrapper>
        </>
    );
}

export default SectionIntro;
