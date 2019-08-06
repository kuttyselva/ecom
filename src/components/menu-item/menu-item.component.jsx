import React from "react";
import './menu-item.styles.scss';
const MenuItem = ({title,image,size}) => (
  <div className={`menu-item ${size}`}>
      <div className="background-image" style={{backgroundImage:`url(${image})`}}></div>

     
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop now</span>
    </div>
  </div>

);
export default MenuItem;