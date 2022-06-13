import React from 'react';
import Header from "../components/header";
import Warning from "../components/warning";
import Collapse from "../components/collapse";
import {BsArrowUpRight} from "react-icons/bs";

const Listed_Documents = () => {
  return (
    <div>
      <Header />
      <h2 className="control-no">Ausgewählte Kontrollen: 2</h2>
      <section className="warning-section">
          <Warning/>
          <div>
              <p>Weitere Dokumente finden:</p>
              <button className="flex-fis fis-btn"><BsArrowUpRight/>FIS-VL öffnen</button>
          </div>
      </section>
      <section>
          <Collapse name="Bauernhof Norbert Pfeiffer" no="091860000008" docno="09"/>
          <Collapse name="Bettina Schnabel" no="094566600008" docno="06"/>
      </section>
    </div>
  )
}

export default Listed_Documents
