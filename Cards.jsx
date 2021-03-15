import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Images from "./Images";
//card component
function Cards(props) {
   
    return (
        <div className="cards">
            <div className="card">

                <Images imgsrc={props.imgsrc}/> //tut 25
                <div className="class__info">
                    <span className="card_category">{props.title} </span>
                    <h3 className="card__title">{props.sname}</h3>
                    <a href={props.link} target="_blank">
                        <button>Watch now </button>
                    </a>
                </div>
            </div>
        </div>

    );
}
export default Cards ;