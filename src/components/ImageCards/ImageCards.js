import React from 'react';
import { useSpring } from 'react-spring';

import {
    Figure,
    Image,
    CardWrapper,
    Name,
    Description,
    ImageWrapper
} from './ImageCardsStyle';

const ImageCards = ({
    imageUrl,
    imageAlt,
    name,
    description,
    background
}) => {
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 20, tension: 200, friction: 50 } }));
    return (
        <CardWrapper>
            <Figure>
                <ImageWrapper background={background} onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
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
    )
}

export default ImageCards;