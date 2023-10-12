import * as React from 'react'
import {Link} from "react-router-dom";

interface ISearchField {
    children: React.JSX.Element,
    searchValue: string
    handleSearchValueChange: React.ChangeEventHandler<HTMLInputElement>
}

export const SearchField = ({children, searchValue, handleSearchValueChange}: ISearchField) => {
    return (<>
        <div className="relative"><Link to="/">Charity Finder</Link></div>
        <div id="input-wrapper" className="relative">
            <input className="text-black" value={searchValue} onChange={handleSearchValueChange} type="text"
                   name="search" placeholder="Find a Charity ..."/>
        </div>
        <div><Link to="/favourite">Favourite</Link></div>
        {children}

    </>)
}