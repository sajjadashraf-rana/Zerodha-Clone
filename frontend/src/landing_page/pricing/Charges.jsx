import React from "react";
import ChargesTabs from "./ChargesTabs";
import ChargesDetails from "./ChargesDetails";

const Charges = () => {
  return (
    <section className="charges-sections mt-5">
      <div className="container">
        <ChargesTabs />
        <ChargesDetails />
      </div>
    </section>
  );
};

export default Charges;
