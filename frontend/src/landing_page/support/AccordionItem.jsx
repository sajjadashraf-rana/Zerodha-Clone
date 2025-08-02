import React, { useRef, useState, useEffect } from "react";
import "./Accordion.css"; // For extra styles

const AccordionItem = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="accordion-item mb-4">
      {/* HEADER */}
      <div className="accordion-header" onClick={toggleAccordion}>
        {/* Left Icon from Props */}
         <span className="accordion-left-icon">
            <i className={`fa ${icon}`} aria-hidden="true"></i>
        </span>

        {/* Title */}
        <span className="accordion-title">{title}</span>

        {/* Right Arrow */}
        <span className={`accordion-arrow ${isOpen ? "open" : ""}`}>
          ▼
        </span>
      </div>

      {/* BODY */}
      <div
        className="accordion-body"
        style={{
          maxHeight: `${height}px`,
          overflow: "hidden",
          transition: "max-height 0.5s ease"
        }}
      >
        <div ref={contentRef} className="accordion-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
