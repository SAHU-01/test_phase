import Header from "../components/header";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineLeftCircle,AiOutlineCheckSquare } from "react-icons/ai";

import { MdOutlineHome,MdPersonOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";

import React from 'react'

function Suggested_Documents() {
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
      
      <div className="flexing">
          <div className="navigation">
            <p>40 min</p>
            <p className="navigation-distance">38km</p>
          </div>
          <div className="card card-2">
              <div className="details-content">
                    <h3>Bauernhof Norbert Pfeiffer </h3>
                    <div className="details-info info-css">
                    <p>091860000008</p>
                    <p>.</p>
                    <p className="info-css">CC-Kontrolle</p>
                    <p>.</p>
                    <p className="info-css">10 Dokumente</p>
                    <p>.</p>
                    <p className="info-css">1 Verstoß 2019</p>
                    </div>

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
              <div className="alert1">
                    <h5>
                        Wählen Sie die Dokumente aus, die Sie downloaden oder drucken
                        möchten.
                    </h5>
                    <button className="flex btn-5">
                        <AiOutlineCheckSquare />
                        Alle auswählen
                    </button>
              </div>
              <div className="documents-check">
                    <div className="document-no">10</div>
                    <p>Dokumente</p>
             </div>

            <div className="documents-check">
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
                    <h4>Tierkennzeichnung Rinder</h4>
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
                    <h4>Tierkennzeichnung Schweine</h4>
                </div>
                <div className="document-preview">
                    <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                    <div className="border">

                    </div>
                    <h4>Tierkennzeichnung Schafe und Ziegen</h4>
                </div>
                
            </div>
            <div className="table-gap">
                
            </div>
            <div className="documents-check">
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
                    <h4>Tierkennzeichnung Rinder</h4>
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
                    <h4>Tierkennzeichnung Schweine</h4>
                </div>
                <div className="document-preview">
                    <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                    <div className="border">

                    </div>
                    <h4>Tierkennzeichnung Schafe und Ziegen</h4>
                </div>
            </div>
            <div className="check-documents-align">
                <div>
                    <div className="documents-check">
                            <div className="document-no">2</div>
                            <p className="para-doc">Berichte</p>
                            <div className="documents-check2">
                                <div className="document-preview2">
                                    <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                                    <div className="border">

                                    </div>
                                    <h4>Mantelbogen</h4>
                                </div>
                                <div className="document-preview3">
                                    <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                                    <div className="border">

                                    </div>
                                    <h4>Tierkennzeichnung Rinder</h4>
                                </div>
                            </div>
                    </div>
                </div>
                <div>
                <div className="documents-check">
                            <div className="document-no">1</div>
                            <p className="para-doc">Eigene Dokumente</p>
                            <div className="documents-check3">
                                <div className="document-preview2">
                                    <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                                    <div className="border">

                                    </div>
                                    <h4>Mantelbogen</h4>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Suggested_Documents

