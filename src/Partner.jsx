const Partner = () => {
  const steps = [
    {
      title: "Login",
      description: "Login to Andromeda’s on-boarding app.",
      number: 1,
    },
    {
      title: "Upload Details",
      description:
        "Upload your KYC documents to register for a DMA tie-up with us.",
      number: 2,
    },
    {
      title: "Become A Partner",
      description:
        "Get access to our in-house CRM to avail instant loan approvals for your customers.",
      number: 3,
    },
  ];
  return (
    <div className="flex flex-col items-center py-[120px]">
      <h3 className="text-5xl font-bold text-center border-dashed border-b-2 text-[#0f63ac] border-[#0f63ac] pb-4">
        How To Become A <br /> Partner?
      </h3>
      <div className="text-[16px] mb-[45px] mt-[25px] ">
        3 simple steps for a lifetime of benefits.
      </div>
      <div className="flex flex-col gap-6">
        {steps.map((item) => (
          <div className="flex border border-sky-800 rounded-2xl shadow-lg hover:shadow-2xl relative overflow-hidden max-w-[650px]">
            <div className=" bg-linear-to-l/srgb from-cyan-500 to-blue-600 w-[170px] h-[170px] rotate-45 absolute -top-4 -left-20 flex items-center justify-center">
              <div className="text-6xl -rotate-45 pl-16 text-white">
                {item.number}
              </div>
            </div>
            <div className="h-[130px] flex flex-col justify-center pl-[200px] pr-[30px] gap-2">
              <div className="text-2xl font-bold">{item.title}</div>
              <div>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#0f63ac] px-4 rounded-sm py-2 text-white cursor-pointer w-fit mt-[40px]">
        Partner Now
      </div>
    </div>
  );
};

export default Partner;
