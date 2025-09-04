import macImg from "../../images/home-imges/half-mac-img.png";
import { FaUserShield } from "react-icons/fa";
import comentator1 from "../../images/home-imges/commentator1.png";
import comentator2 from "../../images/home-imges/comentator-2.png";
import { Rate } from "antd";

const WhyUs = () => {
  return (
    <section className="relative mt-[30px] sm:mt-[40px] md:mt-[80px] ">
      <img className='absolute h-full hidden md:block -left-10 top-10' src={macImg} alt="" />

      <h2 className=" text-center mb-10  font-[600]  text-xl sm:text-2xl md:text-3xl ">
        Why Us ?
      </h2>
      <div className="mc flex justify-end  md:mt-10">
        <div className=" w-full   md:w-[60%] flex flex-col gap-5 md:gap-12">
          {/* Comment 1 */}
          <div className="opinion-1  flex gap-5 items-start ">
            <div className="yellow-card relative w-full p-5 text-white text-base sm:text-lg md:text-2xl  font-[500]  bg-[#ff5b00]  rounded-[38px_0px_38px_0px] ">
              Why Choose ALO Computers?
We provide the latest, high-performance computers and laptops at affordable prices. Our team ensures quality service, genuine products, and customer satisfaction with every purchase.
            </div>
            <div className="admin-circle flex flex-col items-center gap-2">
              <div className="  w-14 h-14 flex items-center justify-center  text-2xl md:text-3xl rounded-[50%]  border-2 border-[#000] ">
                <FaUserShield />
              </div>
              <h5 className="font-[600] text-base md:text-xl">Admin</h5>
            </div>
          </div>

          {/* Comment 2 */}
          <div className="opinion-2  flex gap-5 items-start ">
            <div className="admin-circle w-28 flex flex-col items-center gap-2">
              <div className=" overflow-hidden  w-14 h-14 flex items-center justify-center  text-2xl md:text-3xl rounded-[50%]  border-2 border-[#000] ">
                <img className="w-full h-full" src="https://adebiportal.kz/storage/tmp/resize/authors/350_0_50a67d52f5941e1494fdb768a2777c13.jpeg" alt="" />
              </div>
              <h5 className="font-[500] w-full text-base ">Stive Jobs</h5>
            </div>
            <div className="flex justify-end items-end flex-col green-card relative w-full p-5 text-white text-base sm:text-lg md:text-2xl  font-[500] bg-[#203350]  rounded-[0px_38px_0px_68px] ">
             I recently bought my laptop from ALO Computers and the experience was amazing. The staff guided me to the best choice, and the delivery was super fast. Highly recommend!
              <div className="rate-star flex items-center gap-2">
                <Rate className="flex" disabled defaultValue={4} />
                (10)
              </div>
            </div>
          </div>

          {/* Comment 3 */}
          <div className="opinion-3  flex gap-5 items-start ">
            <div className="admin-circle w-28 flex flex-col items-center gap-2">
              <div className=" overflow-hidden  w-14 h-14 flex items-center justify-center  text-2xl md:text-3xl rounded-[50%]  border-2 border-[#000] ">
                <img className="w-full h-full" src="https://imageio.forbes.com/specials-images/imageserve/62d700cd6094d2c180f269b9/0x0.jpg?format=jpg&crop=959,959,x0,y0,safe&height=416&width=416&fit=bounds" alt="" />
              </div>
              <h5 className="font-[500] w-full text-base ">Ilon Musk</h5>
            </div>
            <div className="flex justify-end items-end flex-col green-card relative w-full p-5 text-white text-base sm:text-lg md:text-2xl  font-[500]  bg-[#203350] rounded-[0px_38px_0px_68px] ">
             ALO Computers offers top-notch devices with great after-sales support. My MacBook runs perfectly, and their customer service answered all my questions. I’m really satisfied!
              <div className="rate-star flex items-center gap-2">
                <Rate className="flex" disabled defaultValue={4} />
                (10)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
