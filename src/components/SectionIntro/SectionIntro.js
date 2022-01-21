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

}) => {
    return (
        <>
            <SectionIntroWrapper>
                <HorizontalLine />
                <Title>About the conference</Title>
                <Description>Shape is a 3 day ICT conference bringing you top of the line keynote speakers in both design and development. Additionally, we are happy to have great workshops, many networking activities and a party to remember!</Description>
                <Content>
                    <Item>
                        <ItemTitle>PD</ItemTitle>
                        <ItemSubtitle>Product Design</ItemSubtitle>
                        <ItemText>Find out the latest trends and buzz for experience research</ItemText>
                    </Item>
                    <Item>
                        <ItemTitle>UX</ItemTitle>
                        <ItemSubtitle>User experience</ItemSubtitle>
                        <ItemText>Find out the latest trends and buzz for experience research</ItemText>
                    </Item>
                    <Item>
                        <ItemTitle>FD</ItemTitle>
                        <ItemSubtitle>Frontend development</ItemSubtitle>
                        <ItemText>Find out the latest trends and buzz for experience research</ItemText>
                    </Item>
                    <Item>
                        <ItemTitle>MD</ItemTitle>
                        <ItemSubtitle>Mobile development</ItemSubtitle>
                        <ItemText>Find out the latest trends and buzz for experience research</ItemText>
                    </Item>
                </Content>
            </SectionIntroWrapper>
        </>
    );
}

export default SectionIntro;