import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around gap-14 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="shadow-xl px-9 py-6 rounded-2xl hover:shadow-2xl bg-gray-100">
        <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>

      <div className="shadow-xl px-9 py-6 rounded-2xl hover:shadow-2xl bg-gray-100">
        <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>

      <div className="shadow-xl px-9 py-6 rounded-2xl hover:shadow-2xl bg-gray-100">
        <img src={assets.support_img} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
