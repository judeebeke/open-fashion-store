import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { json } from "react-router-dom";

export const loader = async ({ params }) => {
  let param = params.prodid;

  try {
    let currentCate = localStorage.getItem("product-category");
    const storageRef = ref(storage, `${currentCate}/${param}`);

    const response = await listAll(storageRef);
    const data = response.items;

    const imageGetter = await Promise.all(
      data.map(async (item) => {
        const url = await getDownloadURL(item);
        const currentUrl = { imageUrl: url, imageName: item.name };

        return currentUrl;
      })
    );

    return imageGetter || null;
  } catch (error) {
    // Handle the error here
    console.error("Error in loader:", error);
    throw json({ message: null }, { status: 500, statusText: error });
  }
};
