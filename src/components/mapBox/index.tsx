import React, { FC } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { MapStyle } from './styles';

interface IProps {
  coords: number[];
}

const MapBox: FC<IProps> = ({ coords }) => (
  <MapStyle>
    <YMaps>
      <Map
        style={{
          display: 'flex',
          flex: '1 0 100%',
          flexDirection: 'column'
        }}
        width={'100%'}
        height={'100%'}
        state={{ center: coords, zoom: 9 }}
      >
        <Placemark geometry={coords} />
      </Map>
    </YMaps>
  </MapStyle>
);

export default MapBox;
