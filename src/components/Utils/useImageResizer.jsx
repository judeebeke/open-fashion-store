import { useCallback, useState } from "react";
import Resizer from "react-image-file-resizer";

const useImageResizer = () => {
  const [compressedProductData, setCompressedProductData] = useState([]);

  const compressImageHandeler = async (imageFile) => {
    const maxWidth = 500; // Maximum width of the compressed image
    const maxHeight = 300; // Maximum height of the compressed image
    const quality = 80; // Image quality (0-100)
    const fileType = "WEBP"; // Output file type ('JPEG', 'PNG', 'WEBP')

    return new Promise((resolve) => {
      Resizer.imageFileResizer(
        imageFile,
        maxWidth,
        maxHeight,
        fileType,
        quality,
        0, // Rotation (0-360)
        (resizedFile) => {
          resolve(resizedFile);
        },
        "blob" // Output type ('file', 'base64', or 'blob')
      );
    });
  };

  const compressImages = useCallback(async (productData) => {
    const compressedImages = await Promise.all(
      productData.map(async (item) => {
        let currentImage = "";
        if (item.defaultArticle === undefined) {
          currentImage = item.image;
        } else {
          currentImage = item.defaultArticle.images[0].url;
        }
        const response = await fetch(currentImage);
        const blob = await response.blob();
        const compressedImage = await compressImageHandeler(blob);
        const compressedImageUrl = URL.createObjectURL(compressedImage);

        return {
          ...item,
          compressedImage: compressedImageUrl,
        };
      })
    );

    setCompressedProductData(compressedImages);
  }, []);

  const compressImage = useCallback(async (productImage) => {
    const response = await fetch(productImage);
    const blob = await response.blob();
    const compressedImg = await compressImageHandeler(blob);
    const compressedImageUrl = URL.createObjectURL(compressedImg);
    setCompressedProductData(compressedImageUrl);
  }, []);

  return {
    compressedProductData,
    imagesCompressor: compressImages,
    imageCompressor: compressImage,
  };
};

export default useImageResizer;
