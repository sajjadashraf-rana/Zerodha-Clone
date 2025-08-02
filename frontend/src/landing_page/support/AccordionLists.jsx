import React, { useState, useRef, useEffect } from "react";
import "./Accordion.css"; // we'll define animations here
import AccordionItem from "./AccordionItem"; // Importing the AccordionItem component

const AccordionLists = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index] // toggle only the clicked section
    }));
  };

  const sections = [
    {
      title: "Account Opening",
      icon: "fa fa-plus-circle",
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary"
      ]
    },
    {
      title: "Your Zerodha Account",
        icon: "fa-solid fa-circle-user",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities"
      ]
    },
    {
      title: "Kite",
        icon: "fa fa-chart-line",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General"
      ]
    },
    {
      title: "Funds",
        icon: "fa fa-money-bill-wave",
      links: [
        "Add money  ",
        "Withdraw money",
        "Add bank accounts",
        "eMandates",
      ]
    },
    {
      title: "Console",
        icon: "fa fa-tachometer-alt",
      links: [
        "Portfolio",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ]
    },{
      title: "Coin",
        icon: "fa fa-coins",
      links: [
        "Mutual funds",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General"
      ]
    }
  ];

  return (
    <div className="container-fluid">
        <div className="row ">
            <div className="col-8 " style={{paddingLeft:"5rem"}}> 
                <div className="accordion-container">
                    {sections.map((section, index) => (
                    <AccordionItem
                        key={index}
                        title={section.title}
                        icon={section.icon}
                        isOpen={!!openSections[index]}
                        onClick={() => toggleSection(index)}
                        >
                        <ul>
                            {section.links.map((link, i) => (
                            <li key={i}>
                                <a href="#">{link}</a>
                            </li>
                            ))}
                        </ul>
                        </AccordionItem>
                    ))}
                    </div>
            </div>
            <div className="col-4 " style={{padding:"0 4rem 0 2rem"}}>
                    <div className="mb-3" style={{height:"10rem", width:"100%", display:"flex"}}>
                        <div style={{width:"5%",height:"100%",backgroundColor:"orange"}}></div>
                        <div style={{backgroundColor:"#f8d7da", padding:"1rem"}}>
                            <ul>
                                <li><a href="">Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
                                <li><a href="">Revision in expiry day of Index and Stock derivatives contracts</a></li>
                            </ul>
                        </div>
                    </div>
                    <div style={{height:"20rem", width:"100%"}}>
                        <ul className="list-unstyled border quick-links-list">
                            <li className="text-decoration-none" style={{backgroundColor:"lightgrey"}}>Quick links</li>
                            <li><a href="">1. Track account opening</a></li>
                            <li><a href="">2. Track segment activation</a></li>
                            <li><a href="">3. Intraday margins</a></li>
                            <li><a href="">4. Kite user manual</a></li>
                        </ul>
                    </div>
            </div>
        </div>
    </div>
    
  );
};


//=================================// AccordionItem.jsx Component=====================
/*
const AccordionItem = ({ title,icon ,children, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="accordion-item mb-4">
      <div className="accordion-header" onClick={onClick}>
        <i className={`accordion-icon ${isOpen ? "open" : ""}`}></i>
        {title}
      </div>
      <div
        className="accordion-body"
        style={{
          maxHeight: `${height}px`,
          transition: "max-height 0.7s ease"
        }}
      >
        <div ref={contentRef} className="accordion-content">
          {children}
        </div>
      </div>
    </div>
  );
};

*/
export default AccordionLists;



