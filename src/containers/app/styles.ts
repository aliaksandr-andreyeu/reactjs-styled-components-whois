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
    background-color: ${colors.darkPrimary};
    font-family: ${fonts.text};
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
  }
  
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    width: 100%;
  }
`;

const ContentStyle = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;

  h1 {
    color: ${colors.iconText};
    font-size: 24px;
    font-family: ${fonts.title};
    font-weight: 500;
    margin: 0 0 24px;
  }
`;

export { GlobalStyle, ContentStyle };
