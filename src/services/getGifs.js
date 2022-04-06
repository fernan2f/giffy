const apiKey = "XSaHJbiYi7tfe0RFJIGltoAMvnAJX3iC";
export default function getGifs({ keyword }) {
  const getGifs = fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
  )
    .then((response) => response.json())
    .then((response) => {
      const { data } = response;
      const gifsURL = data.map((singleGif) => {
        const { images, title, id } = singleGif;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifsURL;
    });
  return getGifs;
}
