import { Link } from "react-router-dom";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, img, title, btn, content }) => {
  // console.log('items',items)
  return (
    <div className="mt-10">
      {title && (
        <Cover img={img} title={title} btn={btn} content={content}></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto my-6">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      {title && <div className="flex justify-center items-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-4 rounded-lg uppercase">
          Order your favourite food
          </button>
        </Link>
      </div>}
    </div>
  );
};

export default MenuCategory;
