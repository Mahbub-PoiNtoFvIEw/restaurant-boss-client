import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg';
import PopularMenu from "../../Home/PopularMenu/PopularMenu";


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'our menu'} content={'Would you like to a dish?'} btn={false}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title={'our menu'} btn={true}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title={'our menu'} ></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;