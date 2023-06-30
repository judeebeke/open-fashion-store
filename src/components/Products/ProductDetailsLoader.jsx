import axios from "axios";
import { json } from "react-router-dom";

export const loader = async ({ params }) => {
  let param = params.id;

  let apikey = import.meta.env.VITE_API_KEY_OPEN_FASHION;
  let apihost = import.meta.env.VITE_API_HOST;

  const options = {
    method: "GET",
    url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail",
    params: {
      lang: "en",
      country: "us",
      productcode: `${param}`,
    },
    headers: {
      "X-RapidAPI-Key": apikey,
      "X-RapidAPI-Host": apihost,
    },
  };

  try {
    const response = await axios.request(options);

    return response.data.product || null;
  } catch (error) {
    throw json({ message: null }, { status: 500, statusText: error.message });
  }
};
