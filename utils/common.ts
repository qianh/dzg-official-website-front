import { TBaseInfo } from "@apis/home";
import {  encode, decode } from 'universal-base64';

export const getBaseInfoByCode = (baseInfo: TBaseInfo[], code: string): TBaseInfo | undefined => {
  return baseInfo.find((item) => item.code === code);
}

export const urlParamEncode = (value: string) => {
  return encode(value).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export const urlParamDecode = (value: string) => {
  return decode(value.replace(/-/g, '+').replace(/_/g, '/'));
}

export const parseUrlParams = (url: string) => {
  const urlObj = new URL(url);
  return new URLSearchParams(urlObj.search);
}