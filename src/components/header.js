import React from 'react';

import { BsQuestionLg } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";

function header() {
  return (
   <div>
           <div>
      <div className="row align-center navbar">
				<img src="../assets/logofarm.png" alt="" className="logo" />
				<b className="welcome-txt">Servus, Petra Steier</b>
				<div className="spacer" />
				
				<button 
				onClick={(e) => {
					alert("Steps: ");
				}}className="help-btn">
				
					<BsQuestionLg className="icon1" />
					Hilfe anzeigen
				</button>
				<button 
				onClick={(e) => {
					alert("Steps: ");
				}}className="option-btn">
				
					<CgMenuGridO className="icon1" />
					Optionen
				</button>
				<button className="logout-btn">
					<IoLogOutOutline className="icon1" />
					Zurück zur Betriebsauswahl
				</button>
			</div>
      </div>
    </div>
  )
}

export default header
