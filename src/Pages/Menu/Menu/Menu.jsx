import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";

const Menu = () => {
  const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";
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
        content={text}
      ></Cover>
      <SectionTitle Heading={"Today's Offer"} subHeading={"Don't Miss"}></SectionTitle>
      {/* offered menu item */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu item */}
      <MenuCategory 
      items={dessert}
      img={dessertImg}
      title={"Dessert"}  
      ></MenuCategory>
    </div>
  );
};

export default Menu;
