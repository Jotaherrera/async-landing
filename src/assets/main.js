const API =
  'https://youtube-v31.p.rapidapi.com/search?channelId=UCE_M8A5yxnLfW0KghEeajjwpart=snippet%2Cid&order=date&maxResults=50';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5c7fd4e639msh9a2d536034092f2p186823jsn81d84838cd48',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

async function fetchData(urlApi) {
  const response = await fet3ch(urlApi, options).json();
  return response;
}
