import styled from 'styled-components';
import { theme } from '../../constants';

const { fonts, colors } = theme;

const InfoBoxStyle = styled.div`
  position: absolute;
  top: 100%;
  margin-top: -53px;
  display: flex;
  background-color: ${colors.iconText};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 0 1px 1px ${colors.divider};

  p {
    align-items: center;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    border-left: 1px solid ${colors.primaryText};
    font-size: 14px;
    font-weight: 500;
    color: ${colors.primaryText};

    &:first-child {
      border-left: 0 none;
    }

    span {
      font-family: ${fonts.title};
      font-weight: 600;
      font-size: 16px;
      margin: 0 0 16px;
    }
  }
`;

export { InfoBoxStyle };
