import React, { FC, useEffect, useState, useLayoutEffect } from 'react';
import { IData } from '../../types';

interface IProps {
  data: IData | null;
}

const InfoBox: FC<IProps> = ({ data }) => {
  useEffect(() => {
    console.log('InfoBox RENDER');
  });

  if (data) {
    const { postal, city, country, utc, isp, ip } = data;
    return (
      <div>
        IP Address Location Timezone ISP
        <p>
          {postal}, {city}, {country}, {utc}, {isp}, {ip}
        </p>
      </div>
    );
  }

  return null;
};

export default InfoBox;
