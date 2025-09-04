const FaqSection = () => {
  return (
    <section className="faq-section mt-[30px] sm:mt-[40px] md:mt-[60px]">
      <div className="mc flex flex-col items-center gap-5 sm:gap-8">
        <h2>FAQ</h2>
        <div className=" w-full md:w-[55%] flex flex-col gap-4 sm:gap-5 md:gap-6">

          <details className="border-2  min-h-6 sm:min-h-16 border-[#e3e3e3]  rounded-[12px] transition-all duration-200 group open:bg-[#c4bfbf] bg-[#F5F5F5]">
           
            <div className="p-4 text-gray-700">
              Yes, all our products come with an official warranty. Depending on the device, you can get from 6 months up to 2 years of warranty.
            </div>
             <summary className="cursor-pointer list-none p-4 rounded-[30px] font-medium text-lg bg-transparent flex justify-between items-center">
                   <p className="text-center">Do you provide warranty for your computers and laptops? </p>
              <span className="transform transition-transform duration-300 group-open:rotate-180">
                ▼
              </span>
            </summary>
          </details>

           <details className="border-2  min-h-6 sm:min-h-16 border-[#e3e3e3]  rounded-[12px] transition-all duration-200 group open:bg-[#c4bfbf] bg-[#F5F5F5]">
           
            <div className="p-4 text-gray-700">
          Absolutely. You can return or exchange your item within 14 days, provided it is in original condition and packaging.
            </div>
             <summary className="cursor-pointer list-none p-4 rounded-[30px] font-medium text-lg bg-transparent flex justify-between items-center">
                   <p className="text-center">Can I return or exchange a product if I’m not satisfied? </p>
              <span className="transform transition-transform duration-300 group-open:rotate-180">
                ▼
              </span>
            </summary>
          </details>

           <details className="border-2  min-h-6 sm:min-h-16 border-[#e3e3e3]  rounded-[12px] transition-all duration-200 group open:bg-[#c4bfbf] bg-[#F5F5F5]">
           
            <div className="p-4 text-gray-700">
Yes, we provide fast and reliable delivery across the country. Delivery times vary from 1–3 business days depending on your location.
            </div>
             <summary className="cursor-pointer list-none p-4 rounded-[30px] font-medium text-lg bg-transparent flex justify-between items-center">
                   <p className="text-center">Do you offer delivery services? </p>
              <span className="transform transition-transform duration-300 group-open:rotate-180">
                ▼
              </span>
            </summary>
          </details>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;
