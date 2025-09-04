import star from "../../../images/home-imges/star.svg";
import mouseImg from "../../../images/home-imges/mouse-img.png";
import type { suggestType } from "../OurSuggest";

const SuggestCard = ({data}:{data:suggestType}) => {
  return (
    <div className="suggest-card  md:hover:-translate-y-3 duration-300 cursor-pointer relative shadow-xl w-[300px] rounded-[12px] overflow-hidden h-[350px] md:h-[420px] ">
      
      <div className="absolute text-white font-[700] w-[20%] flex items-center justify-center  left-0 top-4 rounded-[0px_20px_20px_0px] border-2 border-[#f57474] bg-[#f00000]   ">
          30%
      </div>

      <img className="h-[45%] w-full" src={data.imageUrl} alt={data.title} />

      <div className="card-info flex flex-col gap-2 p-4 ">
        <div className="card-rate flex  items-center  gap-4">
          <img src={star} alt="Star" />
          <p className="text-xl sm:text-2xl font-[500] "> 5.9</p>
          
          <h6 className="review relative  text-xs sm:text-base text-[#808080b1]">+100 review</h6>
        </div>
        <h2 className="card-title font-[600] text-[black] text-lg sm:text-xl md:text-2xl">{data.title.split(" ").slice(0,3).join(" ")}</h2>
        <h4 className="font-[300] text-xs text-[#808080]">Made with juicy beef burger, cheese...</h4>
        <div className="price flex flex-col gap-1">
          <p className="old-price text-xs text-[#808080e2] line-through ">{(+data.price + 100).toLocaleString()}so'm</p>
          <h5 className="price text-[#f00000] font-[600] text-lg sm:text-xl ">{data?.price.toLocaleString()} so'm</h5>
        </div>
      </div>
    </div>
  );
};

export default SuggestCard;
