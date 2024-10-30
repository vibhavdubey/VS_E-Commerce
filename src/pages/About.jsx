import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            sed reprehenderit fuga quo! Laboriosam, odit cumque. Illo, sed
            accusantium fuga blanditiis, necessitatibus modi repellendus alias
            ab cum nesciunt veniam officiis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fugiat quibusdam et veritatis omnis
            debitis odit ipsa deleniti nemo hic neque, esse praesentium
            dignissimos inventore aperiam iste, accusantium, deserunt aspernatur
            eos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            qui quidem eaque tenetur illum voluptatum natus quia? Repellendus
            beatae, nemo ducimus veritatis, necessitatibus eum nostrum dolor
            asperiores odio harum deleniti.
          </p>
          <b className=" text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem esse
            architecto itaque. Quo ipsa sunt distinctio dolore fugit unde ab.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            cum tenetur quam expedita, libero voluptates perferendis vero
            accusantium quia similique.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            cum tenetur quam expedita, libero voluptates perferendis vero
            accusantium quia similique.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            cum tenetur quam expedita, libero voluptates perferendis vero
            accusantium quia similique.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
