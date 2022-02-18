import React from "react";
import Search from "./search/Search";
import TableView from "./view-table/TableView";
import '../../css/style.css';

function Infomation() {
    return (
        <div className="info-title">
            <Search />
            <TableView />
        </div>
    )
}
export default Infomation;