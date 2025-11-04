const Brands = () => {
  const partnerLogo = [
    "/IDFC-FIRST.png",
    "/INDIA-INFOLINE.png",
    "/INDIABULLS.png",
    "/piramal-new.png",
    "/SHRIRAM-CITY.png",
    "/tata-capital-housing-updated.png",
    "/TATA-CAPITAL.png",
    "/UGro-capital.jpg",
  ];

  return (
    <div className="flex flex-col items-center px-4 md:px-0">
      <h3 className="text-3xl md:text-[43px] font-bold text-center border-dashed border-b-2 text-[#0f63ac] border-[#0f63ac]  w-fit">
        Brand who Trust Us
      </h3>
      <div className="font-poppins max-w-[450px] text-center my-10">
        We are amongst the top 3 most-preferred channel partners for loans for
        India's widest network of Banks, NBFCs, and Fintech
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 ">
        {partnerLogo.map((item) => (
          <div className="border border-gray-400 rounded-xl shadow-sm md:shadow-lg flex justify-center items-center overflow-hidden py-4 h-[120px] md:h-[134px]">
            <img src={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
