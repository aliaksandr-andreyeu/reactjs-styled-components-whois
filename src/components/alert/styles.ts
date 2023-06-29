import styled from 'styled-components';
import { theme } from '../../constants';

const { colors } = theme;

const AlertStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  align-items: center;
  color: white;
  margin-bottom: 32px;
`;

const AlertContentStyle = styled.p`
  color: ${colors.iconText};
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${colors.accent};
`;

export { AlertStyle, AlertContentStyle };
