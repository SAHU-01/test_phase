import React from 'react';
import {IoIosArrowDropdown} from "react-icons/io";
import {HiOutlineArrowRight} from "react-icons/hi";

const warning = () => {
  return (
    <div className="warning">
      <h5 className="warning-heading">So geht’s:<IoIosArrowDropdown className="warning-icon-dropdown"/></h5>
      <div className="warning-content">
          <div className="warning-text">Öffnen und editieren Sie, wenn nötig, die Ihnen angezeigten Dokumente.</div>
          <div className="warning-icon"><HiOutlineArrowRight /></div>
          <div className="warning-text">Wählen Sie die Dokumente aus, die Sie herunterladen oder drucken möchten.</div>
          <div className="warning-icon"><HiOutlineArrowRight /></div>
          <div className="warning-text">Drucken Sie die ausgewählten Dokumente aus oder laden sie diese herunter.</div>
          <div className="warning-icon"><HiOutlineArrowRight /></div>
          <div className="warning-text-1">Fertig</div>
      </div>
    </div>
  )
}

export default warning
