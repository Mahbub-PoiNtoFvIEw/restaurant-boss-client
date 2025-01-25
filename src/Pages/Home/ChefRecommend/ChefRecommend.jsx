import img from "../../../assets/home/slide1.jpg";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";

const ChefRecommend = () => {
  return (
    <section className="my-6">
        <SectionTitle subHeading={'Should Try'} Heading={'CHEF RECOMMENDS'}></SectionTitle>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        <div className="bg-[#F3F3F3] pb-2">
          <img className="w-full h-52" src={img} alt="" />
          <div className="flex flex-col justify-center items-center pt-4">
            <h3 className="text-2xl font-bold">Caeser Salad</h3>
            <p className="py-2 w-80 text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn bg-[#E8E8E8] text-[#BB8506] border-0 border-b-2 border-b-[#BB8506] mt-4 rounded-lg uppercase">
              At to cart
            </button>
          </div>
        </div>
        <div className="bg-[#F3F3F3] pb-2">
          <img className="w-full h-52" src={img} alt="" />
          <div className="flex flex-col justify-center items-center pt-4">
            <h3 className="text-2xl font-bold">Caeser Salad</h3>
            <p className="py-2 w-80 text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn bg-[#1F2937] text-[#BB8506] border-0 border-b-2 border-b-[#BB8506] mt-4 rounded-lg uppercase">
              At to cart
            </button>
          </div>
        </div>
        <div className="bg-[#F3F3F3] pb-2">
          <img className="w-full h-52" src={img} alt="" />
          <div className="flex flex-col justify-center items-center pt-4">
            <h3 className="text-2xl font-bold">Caeser Salad</h3>
            <p className="py-2 w-80 text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn bg-[#E8E8E8] text-[#BB8506] border-0 border-b-2 border-b-[#BB8506] mt-4 rounded-lg uppercase">
              At to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommend;
