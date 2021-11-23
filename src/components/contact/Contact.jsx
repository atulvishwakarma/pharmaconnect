import React from "react";
import "./Contact.css";
import Card from "../ui/card/Card";
import FileUploads from "../fileupload/FileUploads";
const Contact = () => {
  return (
    <div className="pc__contact">
      <div className="container mx-auto py-4">
        <Card>
          <div className="pc__contact--title">
            <h1 className="text-2xl font-semibold mb-4 text-green-600">
              <span className="border-b-2 border-green-600">Contact</span>
            </h1>

            <FileUploads />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
