import React from "react";
import '../css/style.css';
import Header from "./header/Header";
import Infomation from "./content-table/Infomation";

function Contents() {
    return (
        <div className="content">
            <Header />
            <Infomation />
        </div>
    )
}
export default Contents;
