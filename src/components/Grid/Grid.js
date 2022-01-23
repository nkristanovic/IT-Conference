import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../lib/style/theme';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    overflow: auto;
    @media  screen and (${breakpoints.desktop}) {
        grid-gap: 30px;
        overflow: hidden;
    }
`