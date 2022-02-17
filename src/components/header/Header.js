import React from 'react';
import '../css/root.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='header-right'>
                お客様デモ用2NX/ PNEX_Admin 管理
                <button className='button-view' >ログアウト</button>
            </div>
        </div>
    )
}