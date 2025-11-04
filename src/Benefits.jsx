const Benefits = () => {
  const details = [
    {
      title: "Instant Two-Step Onboarding",
      img: "/shield.png",
      description:
        "Upload your KYC documents on our on-boarding app, to register as a Direct Marketing Agent with Trisaran.",
    },
    {
      title: "Instant Approvals",
      img: "/tick.png",
      description:
        "Get complete access to our in-house CRM which is integrated with multiple banks/NBFCs, to avail instant loan approvals for your customers.",
    },
    {
      title: "Easy Mobile Tracking",
      img: "/track.png",
      description:
        "Track your customer’s loan status efficiently, using our mobile-friendly on-boarding app and in-house CRM.",
    },
    {
      title: "Secured System",
      img: "/ai.png",
      description:
        "Your data, as well as your customers’, is password protected to ensure maximum protection from online theft.",
    },
    {
      title: "Best Partner Payouts",
      img: "/dividend-yield.png",
      description:
        "As Trisaran is the Largest Loan Distributor for most of the banks/NBFCs, we offer the best-in-class partner payouts.",
    },
  ];
  return (
    <div className="bg-linear-to-r/srgb from-sky-600 to-sky-500 px-5 md:px-16  flex flex-col items-center py-16">
      <div className=" text-4xl font-semibold text-white  pb-2 border-b-2 border-dashed text-center">
        The Trisaran Benefits
      </div>
      <div className="max-w-[550px] text-white mt-10 mb-7 text-center">
        Best deals on loans. Best financial advice. Best processing time. Join
        as a Financial Advisor today.
      </div>
      <div className="flex gap-3 flex-wrap max-w-[1200px] ">
        {details.map((item) => (
          <div className="flex-1 bg-white rounded-lg items-center flex flex-col p-5 shadow-xl min-w-[200px]">
            <div className="font-semibold text-center md:min-h-[50px]">
              {item.title}
            </div>
            <div className="bg-sky-100 h-[70px] w-[70px] md:h-[100px] md:w-[100px] rounded-full my-3 flex justify-center items-center">
              <img
                src={item.img}
                className="px-3 md:px-0 max-h-[70px] max-w-[70px]"
              />
            </div>
            <div className="text-center text-sm md:text-sm">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
