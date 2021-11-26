import React from "react";
import PageTitle from "../../title/PageTitle";
import "./About.css";
const About = () => {
  return (
    <div className="pc__about">
      <div className="container mx-auto py-4">
        <div className="pc__about--block">
          <PageTitle className="about__title">About us</PageTitle>
          <div className="pc__about--content">
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="text-black text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et saepe
              velit ex atque voluptatibus cum. Error eveniet esse possimus!
              Eveniet molestiae aliquam accusamus, eos error labore quod itaque
              odit totam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
