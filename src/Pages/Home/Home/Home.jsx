import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <ChefRecommend></ChefRecommend>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
