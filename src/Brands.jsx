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
    <div className="flex flex-col items-center">
      <h3 className="text-[43px] font-bold text-center border-dashed border-b-2 text-[#0f63ac] border-[#0f63ac]  w-fit">
        Brand who Trust Us
      </h3>
      <div className="max-w-[450px] text-center my-10">
        We are amongst the top 3 most-preferred channel partners for loans for
        India's widest network of Banks, NBFCs, and Fintech
      </div>
      <div className="grid  grid-cols-4 gap-5">
        {partnerLogo.map((item) => (
          <div className="border border-gray-400 rounded-xl shadow-lg flex justify-center items-center overflow-hidden py-4">
            <img src={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
