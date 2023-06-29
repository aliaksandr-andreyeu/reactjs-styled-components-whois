import React, { FC, useState, useLayoutEffect, useEffect } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

interface IProps {
  coords: number[];
}

const MapBox: FC<IProps> = ({ coords }) => {
  useEffect(() => {
    console.log('MapBox RENDER');
  });

  return (
    <div>
      MapBox
      <YMaps>
        <div>My awesome application with maps!</div>
        {coords && (
          <Map state={{ center: coords, zoom: 9 }}>
            <Placemark geometry={coords} />
          </Map>
        )}
      </YMaps>
    </div>
  );
};

export default MapBox;
