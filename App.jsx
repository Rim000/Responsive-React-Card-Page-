import React from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";
import Netflix from "./Netflix";

const favSeries = "netflix"; //tut26

const FavS = () => {
    if (favSeries === "netflix") {
        return <Netflix />;
        
    }
    else {
        return (
            <Cards
                key={Sdata[3].id}            //tut26
                imgsrc={Sdata[3].imgsrc}
                title={Sdata[3].title}
                sname={Sdata[3].sname}
                link={Sdata[3].link}

            />
        );
    }
    const App = ()=>{
        return(
<>
    
    <h1 className="heading_style" >List of top 5 netflix series in 2020</h1>
    <FavS/>
    </>
        );
    };
    }