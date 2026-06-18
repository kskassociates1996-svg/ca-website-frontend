function FAQ() {
  const faq = [
  {
  q: "Who needs GST Registration?",
  a: [
    "If your business earns more than the limit:",
    "₹40 lakh per year (for goods business) ,",
    "₹ 20 lakh per year (for service business) ,",
    " Also required if you:",
    "Sell to other states (interstate sales)",
    "Sell on Amazon, Flipkart, Meesho, etc.",
    "Run an online business or freelancing (in some cases)"
  ]
},
    {
      q: "Documents required for GST?",
      a: " PAN, Bank account, address proof, passport photos, Rental Agreemnt , property tax challan partner  Details(Firm/LLP).",
    },
    {
      q: "Documents required for IncomeTax?",
      a: "For Employees - PAN Card, Form 16, Property sale registration documents (if any property is sold), Profit and Loss statement of stock market investments, Fixed Deposit (FD) Interest Certificate. For Business People - Trial Balance, Balance Sheet, Profit and Loss Statement, Fixed Asset Register, Books of Accounts",
    },
    { q: "What is Tax Audit?", a: "Audit of accounts as per Income Tax Act." },
    {
      q: "How long does registration take?",
      a: "Normally 7 to 15 working days.",
    },
  ];

  return (
    <div className="faq-section">
      <h1>FAQ</h1>

      {faq.map((f, i) => (
        <details key={i} className="faq-item">
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export default FAQ;
