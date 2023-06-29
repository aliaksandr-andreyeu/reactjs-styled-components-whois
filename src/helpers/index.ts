import { config } from '../constants';

interface IConnection {
  asn: number;
  domain: string;
  isp: string;
  org: string;
}

interface IFlag {
  emoji: string;
  emoji_unicode: string;
  img: string;
}

interface ITimeZone {
  abbr: string;
  current_time: Date;
  id: string;
  is_dst: boolean;
  offset: number;
  utc: string;
}

interface IResponse {
  success: boolean;
  ip: string;
}

interface ISuccessResponse extends IResponse {
  borders: string;
  calling_code: string;
  capital: string;
  city: string;
  connection: IConnection;
  continent: string;
  continent_code: string;
  country: string;
  country_code: string;
  flag: IFlag;
  is_eu: boolean;
  latitude: number;
  longitude: number;
  postal: string;
  region: string;
  region_code: string;
  timezone: ITimeZone;
  type: string;
}

interface IErrorResponse extends IResponse {
  message: string;
}

const { apiUrl } = config;

const getApiUrl = (ip?: string): string => {
  return ip ? `${apiUrl}?ip=${ip}` : apiUrl;
};

const isError = (response: ISuccessResponse | IErrorResponse): response is IErrorResponse =>
  (response as IErrorResponse).success === false;

export const getApiData = async (ip?: string): Promise<ISuccessResponse> => {
  const url = getApiUrl(ip);
  const response = await fetch(url);
  const jsonData: ISuccessResponse | IErrorResponse = await response.json();

  console.log(jsonData);

  if (isError(jsonData)) {
    throw new Error(jsonData.message);
  }

  return jsonData;
};
