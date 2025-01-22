import axios from "axios";


const imgUpload = async (imgPath) => {
  const formData = new FormData();
  formData.append("image", imgPath);
  
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImageBB}`,
    formData
  );
  return data.data.display_url;
};

export default imgUpload;


// import axios from "axios";

// const imgUpload = async (imgFile) => {
//   try {
//     if (!(imgFile instanceof File)) {
//       throw new Error("Invalid file format. Please provide a File object.");
//     }

//     const formData = new FormData();
//     formData.append("image", imgFile);

//     const response = await axios.post(
//       `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImageBB_API_KEY}`,
//       formData
//     );

//     // Check if the response is successful
//     if (response.data && response.data.data && response.data.data.display_url) {
//       return response.data.data.display_url;
//     } else {
//       throw new Error("Image upload failed. No display URL returned.");
//     }
//   } catch (error) {
//     console.error("Image upload error:", error.message);
//     throw error; // Re-throw the error for further handling
//   }
// };

// export default imgUpload;