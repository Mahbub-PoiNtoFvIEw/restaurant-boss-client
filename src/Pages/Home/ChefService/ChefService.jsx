import img from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <div
      className="w-full h-72 bg-cover bg-center flex justify-center items-center my-8"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="bg-white max-w-2xl p-10 text-justify">
        <h3 className="text-center text-4xl font-bold">Bistro Boss</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default ChefService;
