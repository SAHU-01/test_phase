import Header from "../components/header";
import {Link} from "react-router-dom";

import { TiDeleteOutline } from "react-icons/ti";
import { RiMenuLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { IoFlagOutline } from "react-icons/io5";
import { AiOutlineRightCircle } from "react-icons/ai";
import React from 'react'

function Suggestion() {
  return (
    <div>
      <Header/>
      


    <div className="break">
        <div className="break-left">
            <div className="heading">
                <h2>Heutige Kontrollen</h2>
                <p>Dienstag, 25. May 2022</p>
            </div>
            <p className="farms-selected">2 Kontrollen</p>
            <div className="alert">
                <div className="icon"><TiTick className="tick"/></div>
                <h4>Bettina Schnabel wurde erfolgreich hinzugefügt</h4>
            </div>
            <div className="tabs">
                <div className="tab1">
                    <div className="navigation">
                        <p>40 min</p>
                        <p className="navigation-distance">38km</p>
                    </div>
                    <div className="card">
                        <div className="details">
                            <div className="details-content">
                                <h3>Bauernhof Norbert Pfeiffer </h3>
                                <div className="details-info">
                                    <p>091860000008</p>
                                    <p>.</p>
                                    <p>CC-Kontrolle</p>
                                </div>
                            </div>
                            <div>
                                <TiDeleteOutline className="delete-card"/>
                            </div>
                        </div>
                        <Link to="/Suggested_Document"><button className="btn-suggestion btn-2"><AiOutlineRightCircle/>Detailansicht</button></Link>
                    </div>
                    <div>
                        <RiMenuLine className="menu"/>
                    </div>
                </div>

                <div className="tab2">
                    <div className="navigation">
                        <p>08 min</p>
                        <p className="navigation-distance">5km</p>
                    </div>
                    <div className="card">
                        <div className="details">
                            <div className="details-content">
                                <h3>Bettina Schnabel </h3>
                                <div className="details-info">
                                    <p>091860000008</p>
                                    <p>.</p>
                                    <p>CC-Kontrolle</p>
                                </div>
                            </div>
                            <div>
                                <TiDeleteOutline className="delete-card"/>
                            </div>
                        </div>
                        <Link to="/Suggested_Document"><button className="btn-suggestion btn-2"><AiOutlineRightCircle/>Detailansicht</button></Link>
                    </div>
                    <div>
                        <RiMenuLine className="menu"/>
                    </div>
                </div>
            </div>
            <div className="line">
                
            </div>
            <div className="buttons">
                <button className="btn-suggestion btn-1"><IoFlagOutline/> Route anzeigen</button>
            </div>
        </div>
        <div className="break-right"> 
        <img src="/assets/map.png" alt="map" className="map"></img>
        </div>
    </div>
    </div>
  )
}

export default Suggestion
