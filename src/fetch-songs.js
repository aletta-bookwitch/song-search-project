const fetchSongs = (term) => {
  const url = `https://itunes.apple.com/search?term=${term}&entity=song`;

  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('No songs');
    })
    .then((json) => json.results.map((e) => ({
      artistName: e.artistName,
      trackName: e.trackName,
    })));
};

export default fetchSongs;
