import { useEffect, useState } from "react";

const Review = () => {
  const cards = [
    {
      image: "/Sher-Singh.jpg",
      name: "Sher Singh",
      desc: "Trisaran’s pan-India presence totals up to 1500+ cities, 500+ branches, and over 5000 employees. With over 30 years of experience in the loans category, Trisaran not only has a stellar market presence, but also an unmitigated market expertise.",
    },
    {
      image: "/Shabnoor-Begham.jpg",
      name: "Shabnoor Begham",
      desc: "With over 180 lending partners, consisting of India’s largest banks, NBFCs, and Fintechs, Trisaran gives you over 200 financial products to choose from to meet your customers’ needs.",
    },
    {
      image: "/Renurani-Das.jpg",
      name: "Renurani Das",
      desc: "“Thanks to Trisaran, my income has been booming for the past 14 months. Onboarding clients has never been easier, even when they don’t live in the same city as I do. The unified dashboard helps me track their application in real time and my commission payments are cleared promptly”",
    },
    {
      image: "/Vikram-Mishra.jpg",
      name: "Vikram Mishra",
      desc: "With over 30 years in the market, Trisaran combines deep expertise, market presence, and unmatched customer service.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [cards.length]);

  return (
    <div className="px-10 flex flex-col items-center mt-[40px] mb-[80px] md:my-[100px]">
      <h3 className="text-2xl sm:text-4xl md:text-[43px] font-bold text-center border-dashed border-b-2 text-[#0f63ac] border-[#0f63ac]  w-fit ">
        Highest Standards. Happiest Partners
      </h3>
      <div className="font-poppins w-full text-center my-10">
        Our partners are our strength
      </div>
      <div className="relative md:max-w-[1300px] sm:max-w-[500px] max-w-[300px] mx-auto overflow-hidden min-h-[500px] md:h-[350px] rounded-2xl shadow-lg ">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full w-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {cards.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center  h-full   "
            >
              <div className="h-full  md:w-[50%]">
                <img src={item.image} className="object-cover h-full " />
              </div>
              <div className=" h-full p-7  md:w-[50%] ">
                <div className="text-2xl font-semibold">{item.name}</div>{" "}
                <div className="font-poppins leading-5 md:leading-7 text-sm sm:text-base md:text-lg text-gray-700">
                  {item.desc}
                </div>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
