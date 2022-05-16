import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight,faAnglesLeft } from "@fortawesome/free-solid-svg-icons"; 
import "./pagination.scss"

export default function Pagination (props){
  const {onRightClick, onLeftClick, page, totalPages} = props
  
  return(
    <div className="cont-btn-arrow">
      <button className="button-pagination" onClick={onLeftClick}>
        <div>
        <FontAwesomeIcon className="icon-arrow" icon={faAnglesLeft}/>
        </div>
      </button>
       <span>{page} de {totalPages}</span>
      <button className="button-pagination" onClick={onRightClick}>
        <div>
        <FontAwesomeIcon className="icon-arrow" icon={faAnglesRight}/>
        </div>
      </button>
    </div>
  )
}