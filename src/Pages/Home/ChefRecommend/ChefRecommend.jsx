import img from "../../../assets/home/slide1.jpg";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../Componants/FoodCard/FoodCard";

const ChefRecommend = () => {
  const [menu] = useMenu();
  const soup = menu.filter((item) => item.category === "soup");
  const itemsPerPage = 3;
    const pages = [];
    for (let i = 0; i < soup.length; i += itemsPerPage) {
      pages.push(soup.slice(i, i + itemsPerPage));
    }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <section className="my-6">
        <SectionTitle subHeading={'Should Try'} Heading={'CHEF RECOMMENDS'}></SectionTitle>
        <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          pages.map((page, idx)=>
            <SwiperSlide key={idx}>
          <div className="grid md:grid-cols-3 gap-10">
            {page.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};

export default ChefRecommend;
