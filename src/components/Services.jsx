function Services() {
  const services = [
    {
      title: "GST Services",

      items: ["GST Registration", "GST Return Filing", "GST Audit"],
    },

    {
      title: "Income Tax",

      items: ["ITR Filing", "Tax Planning", "TDS Filing"],
    },

    {
      title: "Audit",

      items: ["Statutory Audit", "Tax Audit", "Internal Audit"],
    },

    {
      title: "Business Registration",

      items: ["Company Registration", "LLP Registration", "MSME Registration"],
    },

    {
      title: "Accounting",

      items: ["Bookkeeping", "Payroll", "Financial Statements"],
    },

    {
      title: "ROC Filings ",

      items: ["Financial Statements (Form AOC-4)", "Annual Return (Form MGT-7 / MGT-7A)", "Director KYC (Form DIR-3 KYC) "],
    },
     {
      title: "ESI / PF related works",

      items: ["Initial Employer Registration ", "Monthly ECR Filings", " Individual Employee Onboarding  "],
    },
  ];

  return (
    <div className="container">
      <h1>Services</h1>

      <div className="cards">
        {services.map((s, index) => (
          <div className="card" key={index}>
            <h3>{s.title}</h3>

            {s.items.map((i) => (
              <p key={i}>✔ {i}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
