import { json } from "react-router-dom";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";

export const loader = async ({ params }) => {
  let param = params.blogid;
  const storageRef = ref(storage, `blog/blog/${param}`);

  try {
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error getting image URL:", error);
    // Handle the error accordingly
    throw json(
      { message: null },
      { status: 500, statusText: "Could not get requested post!" }
    );
  }
};
