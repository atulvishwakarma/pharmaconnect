import React from "react";
import "./Contact.css";
import { Card } from "../../ui/UI";
import FileUploads from "../../fileupload/FileUploads";
import PageTitle from "../../title/PageTitle";
const Contact = () => {
  return (
    <div className="pc__contact">
      <div className="container mx-auto py-4">
        <Card>
          <div className="pc__contact--title">
            <PageTitle className="pc__contact--title">Contact</PageTitle>
            <FileUploads />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
