const Intro = () => {
  return (
    <div className="py-[30px] sm:h-full  flex justify-center ">
      <div className="h-full  px-7  flex flex-col-reverse sm:flex-row items-center max-w-[1200px] justify-center">
        <div>
          <h2 className="text-3xl  md:text-4xl lg:5xl font-bold text-[#0f63ac] text-center sm:text-start">
            Build Your Own Loan Franchise With Trisaran
          </h2>
          <div className="font-poppins text-sm md:text-base text-center sm:text-start">
            Join Trisaran as a Financial Adcisor. Be a part of a large and
            growing family of 25,000+ partners.
          </div>
          <div className="font-poppins bg-black px-2 md:px-4 text-sm md:text-base rounded-sm py-2 text-white cursor-pointer w-fit mt-4 mx-auto sm:mx-0">
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
