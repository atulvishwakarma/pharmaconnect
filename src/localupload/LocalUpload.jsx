import axios from "axios";
import React from "react";

const uploadImage = async (data) => {
  //   await axios
  //     .post("/static/", data)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });

  axios
    .get("http://pc.avishwakarma.in/upload/atul.jpg")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};
const LocalUpload = () => {
  const handleUploadChange = (event) => {
    console.log(event.target.files[0]);
    console.log("file Name", event.target.files[0].name);
    const data = event.target.files[0];
    uploadImage(data);
  };
  return (
    <div>
      <input
        type="file"
        name="image"
        id="inputImage"
        onChange={handleUploadChange}
      />
    </div>
  );
};

export default LocalUpload;
