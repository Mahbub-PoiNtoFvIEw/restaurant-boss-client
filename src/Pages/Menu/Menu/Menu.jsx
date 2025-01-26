import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import { useState } from "react";

const Menu = () => {
  const mainCoverText = "WOULD YOU LIKE TO TRY A DISH?";
  const dessertText = "The perfect ending to any meal, desserts are a celebration of sweetness and creativity. From rich chocolate cakes and creamy cheesecakes to fruity tarts and traditional delicacies, every bite is a moment of indulgence that leaves you craving more.";
  const saladText = "A refreshing and nutritious dish, salads bring together crisp greens, fresh vegetables, fruits, proteins, and flavorful dressings. From light and simple to hearty and elaborate, salads are versatile enough to suit any taste or occasion.";
  const soupText = "A warm and comforting dish, soup is a blend of rich flavors and wholesome ingredients. Whether it’s a hearty stew, a creamy bisque, or a light broth with vegetables, every spoonful provides a satisfying and soothing experience.";
  const pizzaText = "A universally loved classic, pizza combines a crispy, golden crust with savory tomato sauce, melted cheese, and endless topping options. Whether loaded with vegetables, meats, or gourmet ingredients, each slice offers a delicious balance of flavor and texture.";

  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover
        img={menuImg}
        title={"Our menu"}
        btn={false}
        content={mainCoverText}
      ></Cover>
      <SectionTitle Heading={"Today's Offer"} subHeading={"Don't Miss"}></SectionTitle>
      {/* offered menu item */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu item */}
      <MenuCategory items={dessert} img={dessertImg} title={"dessert"} content={dessertText}></MenuCategory>
      <MenuCategory items={pizza} img={pizzaImg} title={"pizza"} content={pizzaText}></MenuCategory>
      <MenuCategory items={salad} img={saladImg} title={"salad"} content={saladText}></MenuCategory>
      <MenuCategory items={soup} img={soupImg} title={"soup"} content={soupText}></MenuCategory>
    </div>
  );
};

export default Menu;
