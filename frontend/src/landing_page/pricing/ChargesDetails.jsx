import React from "react";

const ChargesDetails = () => {
  return (
    <>
      <h2 id="charges-explained">Charges explained</h2>
      <div className="row between">
        <div className="six columns">
          <p>Securities/Commodities transaction tax</p>
          <p className="text-12">
            Tax by the government when transacting on the exchanges...
          </p>
          {/* Continue other details here */}
        </div>
        <div className="six columns">
          <p>GST</p>
          <p className="text-12">
            Tax levied by the government on the services rendered...
          </p>
          {/* Continue right column here */}
        </div>
      </div>
    </>
  );
};

export default ChargesDetails;
