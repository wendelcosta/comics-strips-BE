import { Handler } from 'aws-lambda';
const axios = require('axios').default;

export const comics: Handler = async () => {
  const count = 9;
  const array = [];
  for (let index = 1; index <= count; index++) {
    const random = Math.floor(Math.random() * 700) + 1;
    const test = axios
      .get(`https://xkcd.com/${random}/info.0.json`)
      .then((response: any) => response.data)
      .catch((error: any) => error);

    array.push(await test);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(array),
  };
};
