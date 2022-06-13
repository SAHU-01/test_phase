import React from 'react';
import Header from "../components/header";
import { AiOutlineLeftCircle,AiOutlineCheckSquare } from "react-icons/ai";

import { MdOutlineHome,MdPersonOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import {BsArrowUpRight} from "react-icons/bs";
import {FiAlertTriangle} from "react-icons/fi";


function Suggested_Document() {
  return (
    <div>
       <Header/>
       <div className="flex">
          <div className="header-documents">
              <h2>Heutige Kontrollen</h2>
              <p>2 Kontrollen</p>
          </div>
          <div className="current-date">
              <p>Dienstag, 25. May 2022</p>
              <button className="flex btn_documents btn-3"><AiOutlineLeftCircle/>Zurück</button>
          </div>
        </div>
        <div className="flex-new">
            <div className="alert1 flex">
                <h5>
                    Wählen Sie die Dokumente aus, die Sie downloaden oder drucken
                    möchten.
                </h5>
                <div className="line-2">

                </div>
                <div className="documents-check2">
                    <div className="document-no2">0</div>
                    <p>Dokumente ausgewählt</p>
                </div>
            </div>
            <div className="alert-new flex">
                <h5>Weitere Dokumente finden:</h5>
                <button className="flex-fis btn-dif"><BsArrowUpRight/>FIS-VL</button>
            </div>
        </div>
        <div className="card card-decor">
            <div className="farm">
                    <h2>Bauernhof Norbert Pfeiffer </h2>
                    <div className="details-info-new info-css">
                        <p> 091860000008 </p>
                        <p> . </p>
                        <p> CC-Kontrolle </p>
                        <p> . </p>
                        <p> 4 Dokumente </p>
                        <p> . </p>
                        <p> 40 min, 38 km </p>
                    </div>
            </div>
            <div className="line2"></div>

            <div className="flex-info">
            <div className="flex-decor flex-container1">
                    <div className="flex-doc">
                        <div className="doc-no3">4</div>
                        <p>Vorausgefüllte Dokumente</p>
                        <div className="tag">Alle auswählen</div>
                    </div>
                    <div className="document-check">
                        <div className="document-preview">
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4>Mantelbogen</h4>
                        </div>
                        <div className="document-preview">
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4 className="dh">Tierkennzeichnung Rinder</h4>
                        </div>
                        <div className="document-preview">
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4>Schweine Anlage B</h4>
                        </div>
                        <div className="document-preview">
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4 className="dh">Tierkennzeichnung Schweine</h4>
                        </div>
                        <div className="document-preview spec"></div>
                    </div>
                    <div className="flex-doc">
                        <div className="doc-no4">10</div>
                        <p>Zusätzliche Dokumente</p>
                    </div>
                    <div className="flexing2">
                        <div className="alert-tag flex">
                            <h6>
                            Alle Dokumente
                            </h6>
                            <div className="line-5">
                            </div>
                            <div className="documents-check2">
                                <p>10</p>
                            </div>
                        </div>
                        <div className="alert-tag-not-selcted flex">
                            <h6>
                            Kontrolldokumente
                            </h6>
                            <div className="line-4">
                            </div>
                            <div className="documents-check2">
                                <p>4</p>
                            </div>
                        </div>
                        <div className="alert-tag-not-selcted flex">
                            <h6>
                            Eigene Dokumente
                            </h6>
                            <div className="line-4">
                            </div>
                            <div className="documents-check2">
                                <p>2</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="document-check">
                        <div className="document-preview">
                            <input type="checkbox" clasName="checkbox" />
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">
                            
                            </div>
                            <h4>Mantelbogen</h4>
                        </div>
                        <div className="document-preview">
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4 className="dh">Tierkennzeichnung Rinder</h4>
                        </div>
                        <div className="document-preview">
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4>Schweine Anlage B</h4>
                        </div>
                        <div className="document-preview">
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4 className="dh">Tierkennzeichnung Schweine</h4>
                        </div>
                        <div className="document-preview">
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4 className="dh">Tierkennzeichnung Schweine</h4>
                        </div>
                    </div>
                    <div className="document-check">
                        <div className="document-preview">
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4>Mantelbogen</h4>
                        </div>
                        <div className="document-preview">
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4 className="dh">Tierkennzeichnung Rinder</h4>
                        </div>
                        <div className="document-preview">
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4>Schweine Anlage B</h4>
                        </div>
                        <div className="document-preview">
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4 className="dh">Tierkennzeichnung Schweine</h4>
                        </div>
                        <div className="document-preview">
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4 className="dh">Tierkennzeichnung Schweine</h4>
                        </div>
                    </div>
                   
                </div>
                
                <div className="line-3"></div>

                <div className="flex-container2">
                    <div className="spacing">
                        <h3>Info</h3>
                        <div>
                            <div className="font-info">
                                <MdOutlineHome className="font-icon" />
                                <span className="font-info-span">Tierbestand: </span>40 Rinder, 84
                                Schweine
                            </div>
                            <div className="font-info">
                                <MdPersonOutline className="font-icon" />
                                <span className="font-info-span">Ansprechpartner: </span>Herr
                                Norbert Pfeiffer
                            </div>
                            <div className="info-css font-info">
                                <GrLocation className="font-icon" />
                                <span className="font-info-span">Adresse: </span>Hauptplatz 22,
                                82519 Wolfratshausen
                            </div>
                            <div className="font-info">
                                <BsTelephone className="font-icon" />
                                <span className="font-info-span">Telefon: </span>08171/275220
                            </div>
                        </div>
                    </div>
                    <div className="spacing">
                        <h3>Vergangene Kontrollen</h3>
                        <div>
                            <div className="font-info">
                                <MdOutlineHome className="font-icon" />
                                <span className="font-info-span">Kontrollzeitraum: </span>2011 - 2021                               
                            </div>
                            <div className="font-info">
                                <MdPersonOutline className="font-icon" />
                                <span className="font-info-span">Letzte Kontrolle:: </span>Juni 2021, Fr. Kochs                             
                            </div>
                        </div>
                        <div className="red-alert">
                            <div><FiAlertTriangle/>2018: 1 Verstoß in Arzneimittel</div>
                            <div><FiAlertTriangle/>2017: 1 Verstoß in Arzneimittel</div>
                        </div>
                    </div>
                    <div className="spacing">
                        <div className="flex">
                            <div className="flex-doc">
                                <div className="doc-no4">02</div>
                                <p>Notizen</p>
                            </div>
                            <div className="tag2">Öffnen</div>
                        </div>
                        <div className="note-card">
                            <h4>Aggressiver Landwirt</h4>
                            <h5>21.12.2021</h5>
                            <p>Nach einer Anlasskontrolle war der Landwirt sehr verärgert. Paul Acker und ich haben Erfahrung...</p>
                        </div>
                        <div className="note-card">
                            <h4>Nicht erreichbar</h4>
                            <h5>28.05.2021</h5>
                            <p>Landwirt ist sehr selten antreffbar. Am besten vorher anrufen, Nummer: 0173-993777 ab 7 Uhr...</p>
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
    </div>
  )
}

export default Suggested_Document
