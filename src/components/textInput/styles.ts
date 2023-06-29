import styled from 'styled-components';
import { theme } from '../../constants';

const { colors } = theme;

const TextInputStyle = styled.div`
  margin: 0 0 16px;

  form {
    margin: 0;
    display: flex;
    gap: 16px;
  }
  input {
    font-size: 16px;
    color: ${colors.primaryText};
    font-weight: 500;
    padding: 8px 16px;
    min-width: 240px;
    outline: 0 none;
    border: 0 none;
    border-radius: 4px;
  }

  button {
    font-size: 16px;
    font-weight: 500;
    color: ${colors.iconText};
    font-weight: 500;

    margin: 0;

    padding: 8px 16px;
    border-radius: 4px;
    background-color: ${colors.accent};
    border: 0 none;
    cursor: pointer;
  }
`;

export { TextInputStyle };
