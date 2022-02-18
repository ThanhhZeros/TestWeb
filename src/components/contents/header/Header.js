import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import '../../css/style.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='header-right'>
                お客様デモ用2NX/ PNEX_Admin 管理
                <Button className='button-view' icon='logout'>ログアウト</Button>
            </div>
        </div>
    )
}