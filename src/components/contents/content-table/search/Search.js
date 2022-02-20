import React from "react";
import {Checkbox} from '@progress/kendo-react-inputs'
import '../../../css/style.css';

function Search() {
    return (
        <div>
            書類検索
            <div className="info-des">
                <div className="">
                    <Checkbox label={"Unchecked state"} />
                    <Checkbox defaultChecked={true} label={"Checked state"} />
                </div>
            </div>
        </div>
    )
}
export default Search;
