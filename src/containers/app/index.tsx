import React, { FC, Fragment, useState, useLayoutEffect, useMemo, useCallback } from 'react';
import { TextInput, InfoBox, MapBox, Alert } from '../../components';
import { getApiData } from '../../helpers';
import { IData } from '../../types';
import { config } from '../../constants';
import { GlobalStyle, ContentStyle } from './styles';

const App: FC = () => {
  const [ipAddress, setIpAddress] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<IData | null>(null);
  const [coords, setCoords] = useState<number[]>(config.coords);

  const getData = useCallback(async () => {
    error && setError(null);

    if (data && (data.ip === ipAddress || !ipAddress)) return;

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
    } catch (err) {
      if (err instanceof Error) {
        err.message && setError(err.message);
      }
    }
  }, [data, error, ipAddress]);

  useLayoutEffect(() => {
    !data && getData();
  }, [data, getData]);

  const errorAlert = useMemo(() => <Alert error={error} />, [error]);
  const input = useMemo(() => <TextInput onChange={setIpAddress} onSubmit={getData} />, [setIpAddress, getData]);
  const map = useMemo(() => <MapBox coords={coords} />, [coords]);
  const info = useMemo(() => <InfoBox data={data} />, [data]);

  return (
    <Fragment>
      <GlobalStyle />
      <ContentStyle>
        <h1>IP Address Tracker</h1>
        {input}
        {errorAlert}
        {info}
      </ContentStyle>
      {map}
    </Fragment>
  );
};

export default App;
