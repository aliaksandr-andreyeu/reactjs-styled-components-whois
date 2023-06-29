import React, { FC } from 'react';
import { InfoBoxStyle } from './styles';
import { IData } from '../../types';

interface IProps {
  data: IData | null;
}

const InfoBox: FC<IProps> = ({ data }) => {
  if (data) {
    const { postal, city, country, utc, isp, ip } = data;
    return (
      <InfoBoxStyle>
        <p>
          <span>IP Address</span>
          {ip}
        </p>
        <p>
          <span>Location</span>
          {postal}, {city}, {country}
        </p>
        <p>
          <span>Timezone</span>
          {utc}
        </p>
        <p>
          <span>ISP</span>
          {isp}
        </p>
      </InfoBoxStyle>
    );
  }

  return null;
};

export default InfoBox;
