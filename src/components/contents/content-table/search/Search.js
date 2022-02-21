import React from "react";
import { Checkbox, Input } from '@progress/kendo-react-inputs'
import '../../../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "@progress/kendo-react-buttons";
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { ComboBox } from "@progress/kendo-react-dropdowns";

function Search() {
    return (
        <div>
            書類検索
            <div className="info-des">
                <div className="column">
                    <div className="column1">フェーズ:</div>
                    <div className="column2">
                        <Checkbox label={"編集"} />
                        <Checkbox label={"校了"} />
                        <Checkbox label={"完成"} />
                    </div>
                </div>
                <div className="column">
                    <div className="column1">書類コード:</div>
                    <div className="column2">
                        <div className="custominput">
                            <Input />
                        </div>

                    </div>
                    <div className="column1"></div>
                    <div className="column3">
                        <Button className='button-search' icon="search">検索</Button>
                    </div>
                </div>
                <div className="column">
                    <div className="column1">EDINETコード:</div>
                    <div className="column2">
                        <div className="custominput1">
                            <Input />
                        </div>
                    </div>
                    <div className="column1">社名:</div>
                    <div className="column3">
                        <div className="custominput">
                            <Input />
                        </div>
                    </div>
                    <div className="column1">期間情報: (yyyy/mm/dd)</div>
                    <div className="column4">
                        <div className="custominput">
                            <div className="column">
                                <div className="column5">
                                    <DatePicker className="custominput" defaultShow={false} format={"yyyy/MM/dd"} placeholder="年/月/日" />
                                </div>~
                                <div className="column5">
                                    <DatePicker className="custominput" defaultShow={false} format={"yyyy/MM/dd"} placeholder="年/月/日" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="column">
                    <div className="column1">会社コード:</div>
                    <div className="column2">
                        <div className="custominput">
                            <Input />
                        </div>
                    </div>
                    <div className="column1">書類名:</div>
                    <div className="column3">
                        <div className="custominput">
                            <ComboBox defaultValue="" />
                        </div>

                    </div>
                    <div className="column1">備考:</div>
                    <div className="column4">
                        <div className="custominput">
                            <Input />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search;
