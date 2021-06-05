const apiKey = process.env.VUE_APP_API_KEY;
export const api = {
  /**
   * @param query {string}
   * @param lang {string}
   * @return {Promise<WeatherResponse>}
   */
  find(query, lang = "en") {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric&lang=${lang}`;
    return fetch(url).then((res) => res.json());
  },
};
