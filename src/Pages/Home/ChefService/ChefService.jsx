import img from "../../../assets/home/chef-service.jpg";
import Cover from "../../Shared/Cover/Cover";
// 
const ChefService = () => {
  const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti animi excepturi vel quaerat quae error vitae asperiores non accusamus molestias, dicta cupiditate autem provident inventore suscipit, deleniti quidem temporibus cumque.";
  return (
    <div className="my-6">
      <Cover img={img} title={'Bistro Boss'} btn={false} content={text}></Cover>
    </div>
  );
};

export default ChefService;
