import styled from 'styled-components';
import { theme } from '../../constants';

const { colors } = theme;

const MapStyle = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  background-color: ${colors.primary};
  min-height: 70vh;
`;

export { MapStyle };
