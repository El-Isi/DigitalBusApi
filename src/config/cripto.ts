/* eslint-disable import/no-extraneous-dependencies */
import cryptoJs from 'crypto-js';

const { CRIPTO_SECRET_KEY } = process.env;

export const encryptData = (data) => {
  const ciphertext = cryptoJs.AES.encrypt(data, CRIPTO_SECRET_KEY).toString();
  return ciphertext;
};

export const decryptData = (data) => {
  const bytes = cryptoJs.AES.decrypt(data, CRIPTO_SECRET_KEY);
  const originalText = bytes.toString(cryptoJs.enc.Utf8);
  return originalText;
};
