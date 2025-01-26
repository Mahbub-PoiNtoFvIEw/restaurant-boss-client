import { Parallax } from "react-parallax";

const Cover = ({ img, title, btn, content='--Nothing--' }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className={`hero h-[400px]`}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl bg-[#0000004D] px-10 py-2">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{content}</p>
            {
                btn? <button className="btn btn-primary">Get Started</button>: ""
            }
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
