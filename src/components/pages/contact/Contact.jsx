import React, { useState } from "react";
import "./Contact.css";
import { Card, Button } from "../../ui/UI";
import FileUploads from "../../fileupload/FileUploads";
import PageTitle from "../../title/PageTitle";
import LocalUpload from "../../../localupload/LocalUpload";
import { HiMail, HiUser } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import {
  MdOutlineMarkEmailRead,
  MdCall,
  MdOutlineLanguage,
} from "react-icons/md";
import { set, useForm } from "react-hook-form";
import { fsDb } from "../../../firebase";
import {
  address,
  email,
  phone,
  pincode,
} from "../../../user-config/UserConfig";
const Contact = () => {
  const [onSuccess, setOnSuccess] = useState("");
  const [onError, setOnError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const addContact = async (contactData) => {
    await fsDb
      .collection("contact-us")
      .add(contactData)
      .then((res) => {
        console.log(res);
        setOnSuccess("Thank you for contact us. We will get back to you soon.");
      })
      .catch((err) => {
        console.log(err);
        setOnError("Something want wrong. Please try after some time.");
      });
  };
  const onSubmit = (data) => {
    setOnSuccess("");
    setOnError("");
    setIsLoading(true);
    console.log(data);
    addContact(data);
    setIsLoading(false);
    reset();

    setTimeout(() => {
      setOnSuccess("");
      setOnError("");
    }, 3000);
  };
  return (
    <div className="pc__contact">
      <div className="container mx-auto py-4 px-4">
        <PageTitle className="pc__contact--title">Contact</PageTitle>
        <div className="get__in--touch">
          <div className="info__message">
            {onSuccess && (
              <div className="bg-green-200 text-green-600 font-medium text-base p-4 rounded">
                {"Thank you for contact us. We will get back to you soon."}
              </div>
            )}
            {onError && (
              <div className="bg-red-200 text-red-600 font-medium text-base p-4 rounded">
                {"Something want wrong. Please try after some time."}
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 py-6 lg:py-10">
            <div className="get__in--touch__left mb-6">
              <Card className="md:p-10 md:pt-4">
                <div className="get__in--touch__inner--form">
                  <h2 className="get__in--touch__left--tilte text-lg lg:text-xl font-semibold mb-4 text-green-500">
                    Get in touch
                  </h2>
                  <form
                    className="get__in--touch__form form my-8"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form__input mb-4">
                      <div className="relative text-gray-400 focus-within:text-gray-600 ">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <HiMail className="text-xl" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          className="py-3 px-4 bg-white placeholder-gray-400 border-0 text-gray-900 rounded-lg shadow-md appearance-none w-full block pl-12 focus:outline-none focus:ring-transparent"
                          placeholder="Ajay"
                          {...register("name", { required: "Name Required" })}
                        />
                      </div>
                      {errors.name && (
                        <span
                          role="alert"
                          className="input__error text-red-400 block mt-1 px-4"
                        >
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="form__input mb-4">
                      <div className="relative text-gray-400 focus-within:text-gray-600 ">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <HiUser className="text-xl" />
                        </div>
                        <input
                          id="email"
                          className="py-3 px-4 bg-white placeholder-gray-400 border-0 text-gray-900 rounded-lg shadow-md appearance-none w-full block pl-12 focus:outline-none focus:ring-transparent"
                          placeholder="you@example.com"
                          {...register("email", { required: "Email Required" })}
                        />
                      </div>
                      {errors.email && (
                        <span
                          role="alert"
                          className="input__error text-red-400 block mt-1 px-4"
                        >
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    <div className="form__input mb-4">
                      <div className="relative text-gray-400 focus-within:text-gray-600 ">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MdMessage className="text-xl" />
                        </div>
                        <textarea
                          id="message"
                          className="py-3 px-4 bg-white placeholder-gray-400 border-0 text-gray-900 rounded-lg shadow-md appearance-none w-full block pl-12 focus:outline-none focus:ring-transparent"
                          placeholder="your message"
                          {...register("message")}
                        />
                      </div>
                    </div>
                    <div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                      >
                        Get In Touch
                      </Button>
                    </div>
                  </form>
                </div>
              </Card>
            </div>
            <div className="get__in--touch__right mb-6">
              <div className="get__in--touch__right--address mb-6">
                <Card>
                  <h2 className="get__in--touch__right--tilte text-lg lg:text-xl font-semibold mb-4 text-green-500">
                    Office Address
                  </h2>
                  <div className="get__in--touch__info_wrap flex items-center">
                    <span className="get__in--touch__icon shadow-lg inline-block h-14 w-14 lg:h-20 lg:w-20 rounded-full relative mr-6">
                      <MdOutlineLanguage className="text-green-300 text-2xl lg:text-4xl inline-block absolute top-4 lg:top-6 mx-auto left-0 right-0" />
                    </span>
                    <span className="get__in--touch__text">
                      {address} &nbsp;
                      {pincode}
                    </span>
                  </div>
                </Card>
              </div>
              <div className="get__in--touch__right--mail mb-6">
                <Card>
                  <h2 className="get__in--touch__right--tilte text-lg lg:text-xl font-semibold mb-4 text-green-500">
                    Official Mail
                  </h2>
                  <div className="get__in--touch__info_wrap flex items-center">
                    <span className="get__in--touch__icon shadow-lg inline-block h-14 w-14 lg:h-20 lg:w-20 rounded-full relative mr-6">
                      <MdOutlineMarkEmailRead className="text-green-300 text-2xl lg:text-4xl inline-block absolute top-4 lg:top-6 mx-auto left-0 right-0" />
                    </span>
                    <span className="get__in--touch__text">{email}</span>
                  </div>
                </Card>
              </div>
              <div className="get__in--touch__right--phone">
                <Card>
                  <h2 className="get__in--touch__right--tilte text-lg lg:text-xl font-semibold mb-4 text-green-500">
                    Official Phone
                  </h2>
                  <div className="get__in--touch__info_wrap flex items-center">
                    <span className="get__in--touch__icon shadow-lg inline-block h-14 w-14 lg:h-20 lg:w-20 rounded-full relative mr-6">
                      <MdCall className="text-green-300 text-2xl lg:text-4xl inline-block absolute top-4 lg:top-6 mx-auto left-0 right-0 " />
                    </span>
                    <span className="get__in--touch__text">{phone}</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
