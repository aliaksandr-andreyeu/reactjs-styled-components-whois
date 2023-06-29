import React, { FC, useState, useLayoutEffect, useEffect } from 'react';

interface IProps {
  error: string;
}

const Alert: FC<IProps> = ({ error }) => {
  useEffect(() => {
    console.log('Alert RENDER');
  });

  return <div>Alert</div>;
};

export default Alert;
