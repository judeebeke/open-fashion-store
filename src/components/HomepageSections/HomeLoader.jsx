import { json, defer } from "react-router-dom";
import axios from "axios";

let apikey = import.meta.env.VITE_API_KEY_OPEN_FASHION;
let apihost = import.meta.env.VITE_API_HOST;

const HM_API_URL = "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com";

export const newArrivalLoader = async () => {
  const options = {
    method: "GET",
    url: `${HM_API_URL}/products/list`,
    params: {
      country: "us",
      lang: "en",
      currentpage: "0",
      pagesize: "10",
      categories: "ladies_newarrivals_clothes",
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

export const offersLoader = async () => {
  const options = {
    method: "GET",
    url: `${HM_API_URL}/products/list`,
    params: {
      country: "us",
      lang: "en",
      currentpage: "0",
      pagesize: "10",
      categories: "ladies_trendconcept",
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

export async function loader() {
  return defer({
    newArrivals: await newArrivalLoader(),
    offersData: offersLoader(),
  });
}
