const Intro = () => {
  return (
    <div className="w-full  flex justify-center ">
      <div className="h-full  px-7 md:px-15 flex flex-col-reverse sm:flex-row items-center max-w-[1200px] justify-center">
        <div>
          <h2 className="text-3xl  md:text-4xl lg:5xl font-bold text-[#0f63ac]">
            Build Your Own Loan Franchise With Trisaran
          </h2>
          <div className="text-sm md:text-base">
            Join Trisaran as a Financial Adcisor. Be a part of a large and
            growing family of 25,000+ partners.
          </div>
          <div className="bg-black px-2 md:px-4 text-sm md:text-base rounded-sm py-2 text-white cursor-pointer w-fit mt-4">
            Partner Now
          </div>
        </div>
        <div className="max-w-[50%]">
          <img src="/investment.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
