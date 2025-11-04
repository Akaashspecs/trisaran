const Benefits = () => {
  const details = [
    {
      title: "Instant Two-Step Onboarding",
      img: "",
      description:
        "Upload your KYC documents on our on-boarding app, to register as a Direct Marketing Agent with Andromeda.",
    },
    {
      title: "Instant Approvals",
      img: "",
      description:
        "Get complete access to our in-house CRM which is integrated with multiple banks/NBFCs, to avail instant loan approvals for your customers.",
    },
    {
      title: "Easy Mobile Tracking",
      img: "",
      description:
        "Track your customer’s loan status efficiently, using our mobile-friendly on-boarding app and in-house CRM.",
    },
    {
      title: "Secured System",
      img: "",
      description:
        "Your data, as well as your customers’, is password protected to ensure maximum protection from online theft.",
    },
    {
      title: "Best Partner Payouts",
      img: "",
      description:
        "As Andromeda is the Largest Loan Distributor for most of the banks/NBFCs, we offer the best-in-class partner payouts.",
    },
  ];
  return (
    <div className="bg-linear-to-r/srgb from-sky-600 to-sky-500 px-16 flex flex-col items-center py-16">
      <div className=" text-4xl font-semibold text-white  pb-2 border-b-2 border-dashed">
        The Trisaran Benefits
      </div>
      <div className="max-w-[550px] text-white mt-10 mb-7 text-center">
        Best deals on loans. Best financial advice. Best processing time. Join
        as a Financial Advisor today.
      </div>
      <div className="flex gap-3  max-w-[1200px]">
        {details.map((item) => (
          <div className="flex-1 bg-white rounded-lg items-center flex flex-col p-5 shadow-xl">
            <div className="font-semibold text-center min-h-[50px]">
              {item.title}
            </div>
            <div className="bg-sky-100 h-[100px] w-[100px] rounded-full my-3"></div>
            <div className="text-center">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
