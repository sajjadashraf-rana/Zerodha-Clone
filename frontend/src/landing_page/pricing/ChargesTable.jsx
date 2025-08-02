import React from "react";

const ChargesTable = ({ activeTab }) => {
  const tables = {
    equities: (
      <div className="section" id="equities" style={{ display: "block" }}>
        <div className="table-container">
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th></th>
                <th>Equity delivery</th>
                <th>Equity intraday</th>
                <th className="hide-on-mobile">F&O - Futures</th>
                <th className="hide-on-mobile">F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="charges-heads">Brokerage</td>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td className="hide-on-mobile">0.03% or Rs. 20/executed order whichever is lower</td>
                <td className="hide-on-mobile">Flat Rs. 20 per executed order</td>
              </tr>
              {/* More rows... */}
            </tbody>
          </table>
        </div>
      </div>
    ),
    fo: (
      <div className="section" id="fo">
        <p>F&O Table here</p>
      </div>
    ),
    currency: (
      <div className="section" id="currency">
        <p>Currency Table here</p>
      </div>
    ),
    commodities: (
      <div className="section" id="commodities">
        <p>Commodities Table here</p>
      </div>
    )
  };

  return tables[activeTab] || null;
};

export default ChargesTable;
