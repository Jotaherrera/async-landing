const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5c7fd4e639msh9a2d536034092f2p186823jsn81d84838cd48',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

fetch(
  'https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50',
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
