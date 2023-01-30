import React from "react";
import Resume from "../../assets/TroyDelacruz.docx";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download>
        Download Resume!
      </a>
      <a href="#contact">Let's Chat!</a>
    </div>
  );
};

export default CTA;
