import { ref, getDownloadURL } from "firebase/storage";
import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();

  return <div></div>;
};

export default Post;

const getImageURL = async (imageName) => {
  const storageRef = ref(storage, "path/to/image/" + imageName);

  try {
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error getting image URL:", error);
    // Handle the error accordingly
    return null;
  }
};
