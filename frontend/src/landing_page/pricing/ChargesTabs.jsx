import React, { useState } from "react";
import ChargesTable from "./ChargesTable";

const tabs = [
  { id: "equities", label: "Equity" },
  { id: "fo", label: "F&O" },
  { id: "currency", label: "Currency" },
  { id: "commodities", label: "Commodity" }
];

const ChargesTabs = () => {
  const [activeTab, setActiveTab] = useState("equities");

  return (
    <div id="charges_tabs" className="tinytabs">
      <nav className="tabs">
        {tabs.map(tab => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className={`tab tab-${tab.id} ${activeTab === tab.id ? "sel" : ""}`}
            style={{  marginRight: "30px" }}
            onClick={(e) => { e.preventDefault(); setActiveTab(tab.id); }}
          >
            {tab.label}
          </a>
        ))}
      </nav>

      <ChargesTable activeTab={activeTab} />
    </div>
  );
};

export default ChargesTabs;
