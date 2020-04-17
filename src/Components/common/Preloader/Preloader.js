import React from "react";
import preloader from "../../../assets/images/preloader.svg";
import style from "./style.module.css"

let Preloader = (props) => {
    return <div className={style.preloader}>
        <img src={preloader}/>
    </div>
}

export default Preloader;