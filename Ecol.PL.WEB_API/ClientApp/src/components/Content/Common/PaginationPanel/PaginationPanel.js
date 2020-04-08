import React from "react"
import './PaginationPanel.css'

export default function PaginationPanel({ changeCurrentPage, pageSetting }) {

    function changing(e) {
        e.preventDefault();
        switch(e.target.name){
            case "-": changeCurrentPage(pageSetting.currentPage - 1);
            break;
            case "+": changeCurrentPage(pageSetting.currentPage + 1);
            break;
        }
    }

    return (
        <form 
            className='pagination-panel'
            onSubmit={(e) => e.preventDefault()}
        >
            <button 
                className="btn btn-primary"
                disabled={pageSetting.currentPage > 0 ? 0 : 1} 
                onClick={(e) => changing(e)}
                name="-">
                    {'<<'}
            </button>
            <p>{pageSetting.currentPage + 1}</p>
            <button 
                className="btn btn-primary"
                disabled={pageSetting.currentPage + 1 < pageSetting.pageCount ? 0 : 1} 
                onClick={(e) => changing(e)}
                name="+">
                    {'>>'}
            </button>
        </form>
	)
}