import axios from "axios";
import { json } from "react-router-dom";

export const loader = async ({ params }) => {
  let param = params.id;

  const options = {
    method: "GET",
    url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail",
    params: {
      lang: "en",
      country: "us",
      productcode: `${param}`,
    },
    headers: {
      "X-RapidAPI-Key": "02daad24c6mshdc1059575436c38p19c2a4jsn0b42e276ebd1",
      "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    return response.data.product || null;
  } catch (error) {
    console.error(error);
    throw json({ message: null }, { status: 500, statusText: error.message });
  }
};
