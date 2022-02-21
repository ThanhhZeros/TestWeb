import React from "react";
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import products from './products.json';
import '../../../css/style.css';

function TableView() {

    const [selected, setSelected] = React.useState(1);

    const handleSelect = (e) => {
        setSelected(e.selected);

    };
    return (
        <div className="table1">
            <TabStrip selected={selected} onSelect={handleSelect}>
                <TabStripTab title="通常書類">
                    <Grid data={products} >
                        <GridColumn field="ProductID" title="決算日" headerClassName="customheader" />
                        <GridColumn field="ProductName" title="書類名" headerClassName="customheader" />
                        <GridColumn field="Category.CategoryName" title="会社コード" headerClassName="customheader" />
                        <GridColumn field="UnitPrice" title="社名" headerClassName="customheader" />
                        <GridColumn field="UnitsInStock" title="書類コード" headerClassName="customheader" />
                        <GridColumn field="UnitsOnOrder" title="備考" headerClassName="customheader" />
                        <GridColumn field="ReorderLevel" title="フェーズ" headerClassName="customheader" />
                        <GridColumn cell={props => (
                            <td>
                                <Button className='button-des' icon='eye'>閱覽</Button>
                            </td>
                        )} headerClassName="customheader" />

                    </Grid>
                </TabStripTab>
                <TabStripTab title="オールラウンダー書類">
                    <Grid data={products} >
                        <GridColumn field="ProductID" title="決算日" headerClassName="customheader" />
                        <GridColumn field="ProductName" title="書類名" headerClassName="customheader" />
                        <GridColumn field="Category.CategoryName" title="会社コード" headerClassName="customheader" />
                        <GridColumn field="UnitPrice" title="社名" headerClassName="customheader" />
                        <GridColumn field="UnitsInStock" title="書類コード" headerClassName="customheader" />
                        <GridColumn field="UnitsOnOrder" title="備考" headerClassName="customheader" />
                        <GridColumn field="ReorderLevel" title="フェーズ" headerClassName="customheader" />
                        <GridColumn cell={props => (
                            <td>
                                <Button className='button-des' icon='eye'>閱覽</Button>
                            </td>
                        )} headerClassName="customheader" />
                    </Grid>
                </TabStripTab>
            </TabStrip>
        </div>

    )
}
export default TableView;