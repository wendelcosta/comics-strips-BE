import { Handler } from 'aws-lambda';
const axios = require('axios').default;

export const comics: Handler = async () => {
  const count = 9;
  const comics = [];
  for (let index = 1; index <= count; index++) {
    const random = Math.floor(Math.random() * 700) + 1;
    const comic = axios
      .get(`https://xkcd.com/${random}/info.0.json`)
      .then((response: any) => response.data)
      .catch((error: any) => error);

    comics.push(await comic);
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(comics),
  };
};
