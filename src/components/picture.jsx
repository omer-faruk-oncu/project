//import React from "react";
import data from "../helper/data";
import "../styles/style.css";

function Pictures() {

    return (
        <>
        <h1>Image Gallery</h1>
        <div className="pictures">
            {data.map((item, index) => (
                <div key={index} className="picture">
                    <div className="imageContainer">
                        <img src={item.src.large} alt={item.photographer} />
                    </div>
                    <div className="info">{item.photographer}</div>
                </div>
            ))}
        </div>
        </>
    );
}

export default Pictures;
