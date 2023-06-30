import { json } from "react-router-dom";
import axios from "axios";

export const loader = async ({ params }) => {
  let param = params.prodid;

  const randomNumber = Math.floor(Math.random() * 6);

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
      "X-RapidAPI-Key": "02daad24c6mshdc1059575436c38p19c2a4jsn0b42e276ebd1",
      "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    return response.data.results || null;
  } catch (error) {
    console.error(error);
    throw json({ message: null }, { status: 500, statusText: error.message });
  }
};
