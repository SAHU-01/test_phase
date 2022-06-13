import React,{useState} from 'react'
import {HiArrowNarrowDown} from "react-icons/hi";
import {AiOutlinePrinter} from "react-icons/ai";
import {IoIosArrowDropdown} from "react-icons/io";
import CollapseMore from "./collapsemore";


function Collapse (props) {
    const [isOpen,setIsOpen]=useState(false);
    
  return (
    <div className="card styling">
        <div className="compress-card">
            <div className="compress-card-farm-details">
                <h2>{props.name} </h2>
                <p>{props.no}</p>
            </div>
            <div className="compress-card-internal">
                <div className="compress-card-doc-no">
                    <div>{props.docno}</div>
                    <p>Ausgewählte Dokumente</p>
                    </div>
                <div>
                    <a href="http://localhost:4000/" className="compress-card-internal-btn1"><HiArrowNarrowDown className="download-icon" />Herunterladen</a>
                </div>
                <div>
                    <a href="http://localhost:3000/PdfPrint" className="compress-card-internal-btn2"><AiOutlinePrinter className="print-icon"/><p>Drucken</p></a>
                </div>
                <div className="toggling">
                    <IoIosArrowDropdown className="compress-toggle" onClick={()=> setIsOpen(!isOpen)}/>
                    </div>
            </div>
       </div>
       {isOpen && 
            <div>
                <div className="line2"></div>
                <CollapseMore 
                    Kontrollart_details="CC-Kontrolle"
                    Tierbestand_details="40 Rinder, 84 Schweine"
                    Ansprechpartner_details="Herr Norbert Pfeiffer"
                    Adresse_details="Hauptplatz 22, 82519 Wolfratshausen"
                    Telefon_details="08171/275220"
                    Kontrollzeitraum_details="2011 - 2021"
                    LetzteKontrolle_details="Juni 2021, Fr. Koch"
                />
            </div>}
    </div>
  )
}

export default Collapse
