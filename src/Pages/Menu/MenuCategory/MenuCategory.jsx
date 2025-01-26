import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({
  items,
  img,
  title,
  btn,
  content
}) => {
  return (
    <div className="mt-10">
      {title && (
        <Cover img={img} title={title} btn={btn} content={content}></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-10 my-6">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
