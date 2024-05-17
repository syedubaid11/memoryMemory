import { useEffect, useState } from "react";

export default function Cards(props){
    return(
        <div className="card-container">
            <div className="card-content">
                <p>{props.cardname}</p>
                <img src={props.imagelink}/>
            </div>
        </div>
    )
}