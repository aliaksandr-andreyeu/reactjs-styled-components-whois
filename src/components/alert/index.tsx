import React, { FC } from 'react';
import { AlertStyle, AlertContentStyle } from './styles';

interface IProps {
  error: string | null;
}

const Alert: FC<IProps> = ({ error }) => (
  <AlertStyle>{error && <AlertContentStyle>{error}</AlertContentStyle>}</AlertStyle>
);

export default Alert;
