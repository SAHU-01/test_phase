import React from 'react'
import {Link} from "react-router-dom";

const TigaMerge = () => {
  return (
    <div>
      <img src="/assets/cadenza.png" alt="Cadenza" className="tiga_img"/>
      <Link to="/Listed_Documents"><button className="tiga_btn"></button></Link>
    </div>
  )
}

export default TigaMerge
