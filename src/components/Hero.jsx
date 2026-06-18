import { motion } from "framer-motion";

function Hero() {
  const services = [
    "GST Filing",
    "Income Tax Filing",
    "Statutory Audit",
    "Tax Audit",
    "Company Registration",
    "Accounting Services",
  ];

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Logo */}

        <div className="hero-logo">
          <div className="logo-circle">CA</div>

          <div className="hero-logo-text">
            <h4>KSK Associates</h4>

            <span>Chartered Accountants</span>
          </div>
        </div>

        {/* Main Heading */}

        <h1>KSK Associates</h1>

        <h3 className="owner">Satish Kumar, CA | CMA</h3>

        <h2>Professional Chartered Accountant Services</h2>

        {/* Experience */}

        <div className="experience-box">
          <h3>5+ Years Experience</h3>

          <p>
            Successfully serving individuals, startups and businesses with
            reliable taxation, audit and accounting services.
          </p>
        </div>

        {/* Description */}

        <p className="hero-description">
          Led by <strong>CA Satish Kumar</strong>, we specialize in GST Filing,
          Income Tax Filing, Tax Audits, Company Registration, Accounting,
          Payroll and Financial Advisory Services.
        </p>

        {/* Buttons */}

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Book Consultation
          </button>

          <button
            className="secondary-btn"
            onClick={() => window.open("https://wa.me/8317627936", "_blank")}
          >
            Contact Now
          </button>
        </div>

        {/* Services */}

        <div className="badges">
          {services.map((service, index) => (
            <span key={index}>{service}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
