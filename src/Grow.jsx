const Grow = () => {
  return (
    <div className="flex flex-col items-center px-8 pb-10">
      <h3 className=" text-4xl font-semibold text-[#0f63ac] pb-2 border-b-2 border-dashed">
        Grow with Trisaran
      </h3>
      <div className="text-center max-w-[700px] mt-4 ">
        If you have a clientele with an appetite for loans, we will provide you
        with the product, the technology, and the training needed to build your
        own loan franchise.
      </div>
      <div className="flex gap-5">
        <div className=" flex-1 border-2 border-sky-500 rounded-md px-4 pt-4 pb-6 flex flex-col items-center ">
          <img />
          <div className="font-bold text-lg my-2">Pan-India Presence</div>
          <div className="text-center">
            Andromeda’s pan-India presence totals up to 1500+ cities, 500+
            branches, and over 5000 employees. With over 30 years of experience
            in the loans category, Andromeda not only has a steller market
            presence, but also an unmitigated market expertise.
          </div>
        </div>
        <div className="flex-1  border-2 border-sky-500 rounded-md px-4 pt-4 pb-6 flex flex-col items-center ">
          <img />
          <div className="font-bold text-lg my-2">
            Widest Choice For Best Deals
          </div>
          <div className="text-center">
            With over 180 lending partners, consisting of India’s largest banks,
            NBFCs, and Fintechs, Andromeda gives you over 200 financial products
            to choose from to meet your customers’ needs.
          </div>
        </div>
        <div className="flex-1  border-2 border-sky-500 rounded-md px-4 pt-4 pb-6 flex flex-col items-center ">
          <img />
          <div className="font-bold text-lg my-2">Prime Leads</div>
          <div className="text-center font-normal">
            Registering over 2,00,000 unique visitors on its website every
            month, Andromeda has the most, as well as the best lead, to maximise
            your conversions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grow;
