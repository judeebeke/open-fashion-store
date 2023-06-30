import { json } from "react-router-dom";
import axios from "axios";

export const loader = async ({ params }) => {
  let param = params.prodid;

  const randomNumber = Math.floor(Math.random() * 6);

  let apikey = import.meta.env.VITE_API_KEY_OPEN_FASHION;
  let apihost = import.meta.env.VITE_API_HOST;

  const options = {
    method: "GET",
    url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
    params: {
      country: "us",
      lang: "en",
      currentpage: `${randomNumber}`,
      pagesize: "30",
      categories: `${param}`,
    },
    headers: {
      "X-RapidAPI-Key": apikey,
      "X-RapidAPI-Host": apihost,
    },
  };

  try {
    const response = await axios.request(options);

    return response.data.results || null;
  } catch (error) {
    throw json({ message: null }, { status: 500, statusText: error.message });
  }
};
