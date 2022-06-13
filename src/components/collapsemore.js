import React from 'react';
import { MdOutlineHome,MdPersonOutline } from "react-icons/md";
import { MdOutlineLocationOn} from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import {FiAlertTriangle} from "react-icons/fi";
import {HiArrowNarrowDown} from "react-icons/hi";
import {AiOutlinePrinter,AiOutlineCompass,AiOutlineCalendar,AiOutlineCheckCircle} from "react-icons/ai";

const collapsemore = (props) => {
  return (
    <div className="wrapper card-decor">
      <div className="flex-info">
            <div className="flex-decor flex-container1">
                    <div className="doc-check-all">
                        <div className="flex-doc">
                            <div className="doc-no3">04</div>
                            <p>Pflichtdokumente</p>
                        </div>
                        <div className="checkbox-all">
                            <input type="checkbox" className="mycheck"/>
                            <p>Alle ausgewählt (04)</p>
                        </div>
                    </div>
                    
                    <div className="document-check">
                        <div className="document-preview">
                            <div className="tag-align">
                                <div className="doc-tag">PDF öffnen</div>
                                <input type="checkbox" className="mycheck"/>
                            </div>
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4>Mantelbogen</h4>
                        </div>
                        <div className="document-preview">
                            <div className="tag-align">
                                <div className="doc-tag">PDF öffnen</div>
                                <input type="checkbox" className="mycheck"/>
                            </div>
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4 className="dh">Tierkennzeichnung Rinder</h4>
                        </div>
                        <div className="document-preview">
                            <div className="tag-align">
                                <div className="doc-tag">PDF öffnen</div>
                                <input type="checkbox" className="mycheck"/>
                            </div>
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4>Schweine Anlage B</h4>
                        </div>
                        <div className="document-preview">
                            <div className="tag-align">
                                <div className="doc-tag">PDF öffnen</div>
                                <input type="checkbox" className="mycheck"/>
                            </div>
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4 className="dh">Tierkennzeichnung Schweine</h4>
                        </div>
                        <div className="document-preview spec"></div>
                    </div>
                    <div className="doc-check-all">
                    <div className="flex-doc">
                        <div className="doc-no4">05</div>
                             <p>Zusatzdokumente</p>
                        </div>
                        <div className="checkbox-all">
                        <input type="checkbox" className="mycheck"/>
                            <p>Alle ausgewählt (05)</p>
                        </div>
                    </div>
                    
                    <div className="document-check">
                        <div className="document-preview">
                            <div className="tag-align">
                                <div className="doc-tag">PDF öffnen</div>
                                <input type="checkbox" className="mycheck"/>
                            </div>
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">
                            
                            </div>
                            <h4>Mantelbogen</h4>
                        </div>
                        <div className="document-preview">
                            <div className="tag-align">
                                <div className="doc-tag">PDF öffnen</div>
                                <input type="checkbox" className="mycheck"/>
                            </div>
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4 className="dh">Tierkennzeichnung Rinder</h4>
                        </div>
                        <div className="document-preview">
                            <div className="tag-align">
                                <div className="doc-tag">PDF öffnen</div>
                                <input type="checkbox" className="mycheck"/>
                            </div>
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4>Schweine Anlage B</h4>
                        </div>
                        <div className="document-preview">
                           <div className="tag-align">
                                <div className="doc-tag">PDF öffnen</div>
                                <input type="checkbox" className="mycheck"/>
                            </div>
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4 className="dh">Tierkennzeichnung Schweine</h4>
                        </div>
                        <div className="document-preview">
                            <div className="tag-align">
                                <div className="doc-tag">PDF öffnen</div>
                                <input type="checkbox" className="mycheck"/>
                            </div>
                            <img src="/assets/preview.png"alt="preview" className="preview-img"></img>
                            <div className="border">

                            </div>
                            <h4 className="dh">Tierkennzeichnung Schweine</h4>
                        </div>
                    </div>
                   
                    <div className="compress-card-internal features">
                        <div className="compress-card-doc-no">
                            <div>09</div>
                            <p>Ausgewählte Dokumente</p>
                            </div>
                        <div>
                            <a href="http://localhost:4000/" className="compress-card-internal-btn1"><HiArrowNarrowDown className="download-icon" />Herunterladen</a>
                        </div>
                        <div>
                            <button className="compress-card-internal-btn2"><AiOutlinePrinter className="print-icon"/><p>Drucken</p></button>
                        </div>
                    </div>

                </div>
                
                <div className="line-3"></div>

                <div className="flex-container2">
                    <div className="spacing">
                        <h3>Info</h3>
                        <div>
                            <div className="font-info">
                                <AiOutlineCompass className="font-icon" />
                                <span className="font-info-span">Kontrollart: </span>{props.Kontrollart_details}
                            </div>
                            <div className="font-info">
                                <MdOutlineHome className="font-icon" />
                                <span className="font-info-span">Tierbestand: </span>{props.Tierbestand_details}
                            </div>
                            <div className="font-info">
                                <MdPersonOutline className="font-icon" />
                                <span className="font-info-span">Ansprechpartner: </span>{props.Ansprechpartner_details}
                            </div>
                            <div className="font-info">
                                <MdOutlineLocationOn className="font-icon" />
                                <span className="font-info-span">Adresse: </span>{props.Adresse_details}
                            </div>
                            <div className="font-info">
                                <BsTelephone className="font-icon" />
                                <span className="font-info-span">Telefon: </span>{props.Telefon_details}
                            </div>
                        </div>
                    </div>
                    <div className="spacing">
                        <h3>Vergangene Kontrollen</h3>
                        <div>
                            <div className="font-info">
                                <AiOutlineCalendar className="font-icon" />
                                <span className="font-info-span">Kontrollzeitraum: </span>{props.Kontrollzeitraum_details}                              
                            </div>
                            <div className="font-info">
                                <AiOutlineCheckCircle className="font-icon" />
                                <span className="font-info-span">Letzte Kontrolle: </span>{props.LetzteKontrolle_details}                             
                            </div>
                        </div>
                        <div className="red-alert">
                            <div><FiAlertTriangle className="control-alert"/>2018: 1 Verstoß in Arzneimittel</div>
                            <div><FiAlertTriangle className="control-alert"/>2017: 1 Verstoß in Arzneimittel</div>
                        </div>
                    </div>
                   
                </div>

               
            </div>
    </div>
  )
}

export default collapsemore
