import axios from "axios";

const callApi = async (
  paramKey: string,
  paramValue: string,
  urlEndpoint: string
) => {
  var data: Array<{}> = [{}];

  const url = "https://shazam.p.rapidapi.com/" + urlEndpoint;
  await axios
    .get(url, {
      params: {
        [paramKey]: paramValue,
      },
      headers: {
        "X-RapidAPI-Key": "c006c9feffmshff8c7e813dea061p1f8859jsn0c5cb8a2f84f",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    })
    .then((res) => {
      data = res.data.tracks;
    })
    .catch((err) => {
      data = err;
    });

  return data;
};

export default callApi;
