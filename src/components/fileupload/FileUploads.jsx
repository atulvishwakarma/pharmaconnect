import { React, useState } from "react";
import axios from "axios";
import { db } from "../../firebase";
const FileUploads = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = db.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        db.ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
    setImage(null);
  };

  console.log("image: ", image);
  console.log(url);
  return (
    <div>
      {/* <process max="100" value={progress}></process> */}
      <div>
        <input
          type="file"
          name="imageup"
          id="imageup"
          onChange={handleChange}
        />
        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default FileUploads;
