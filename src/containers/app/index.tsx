import React, { FC, useState, useEffect, useLayoutEffect, useMemo } from 'react';

import { TextInput, InfoBox, MapBox, Alert } from '../../components';

import { getApiData } from '../../helpers';

import { IData } from '../../types';

const defaultCoords: number[] = [53.90301766889936, 27.556755957117403];

const App: FC = () => {
  const [ipAddress, setIpAddress] = useState<string>('');
  const [error, setError] = useState<string>('');

  const [data, setData] = useState<IData | null>(null);

  const [coords, setCoords] = useState<number[]>(defaultCoords);

  const getData = async () => {
    try {
      const {
        postal,
        city,
        country,
        timezone: { utc },
        connection: { isp },
        ip,
        latitude,
        longitude
      } = await getApiData(ipAddress);
      setCoords([latitude, longitude]);
      setData({ postal, city, country, utc, isp, ip });
    } catch (error) {
      if (error instanceof Error) {
        error.message && setError(error.message);
      }
    }
  };

  console.log('ipAddress', ipAddress);
  console.log('error', error);

  useEffect(() => {
    console.log('App RENDER');
  });

  useLayoutEffect(() => {
    getData();
  }, []);

  const errorAlert = useMemo(() => <Alert error={error} />, [error]);
  const input = useMemo(() => <TextInput onChange={setIpAddress} onSubmit={getData} />, [setIpAddress, getData]);
  const map = useMemo(() => <MapBox coords={coords} />, [coords]);
  const info = useMemo(() => <InfoBox data={data} />, [data]);

  return (
    <div className='content'>
      <div className='data-content'>
        {errorAlert}
        {input}
        {info}
        {map}
      </div>
    </div>
  );
};

export default App;
