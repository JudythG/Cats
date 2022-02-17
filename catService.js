import axios from 'axios';

const endpoint = `https://api.thecatapi.com/v1`;

//https://api.thecatapi.com/v1/images/search
const getRandomCatImage = () => {
  const config = {
    method: "GET",
    url: `${endpoint}/images/search`,
    headers: { 'x-api_key': '2a670d1e-887f-4311-ba43-6132faa60afe' },
  };
  return axios(config)
}; 

export default getRandomCatImage;
