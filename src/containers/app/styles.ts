import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../../constants';

const { fonts, colors } = theme;

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    height: 100%;
    min-height: 100%;
    position: relative;
  }

  body {
    background-color: $white-color;
    font-family: fonts.text;
    font-size: 62.5%;
    font-weight: normal;
    height: 100%;
    letter-spacing: normal;
    min-height: 100%;
    min-width: 320px;
    position: relative;
    text-rendering: auto;
    width: 100%;
    line-height: 1;
    margin: 0;    
  }
`;

const Content = styled.div`
  align-items: center;
  background: orange;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  font-weight: bold;

  justify-content: center;

  padding: 1rem;
`;

export { GlobalStyle, Content };
