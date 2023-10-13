import * as React from 'react'
import {Link} from "react-router-dom";

interface ISearchField {
    children: React.JSX.Element,
    searchValue: string
    handleSearchValueChange: React.ChangeEventHandler<HTMLInputElement>
}

export const SearchField = ({children, searchValue, handleSearchValueChange}: ISearchField) => {
    return (<>
        <div className="relative text-xl font-extrabold ">
            <Link className="flex flex-row items-center" to="/">
                <img className="w-10" src="../../public/logo.png" />
                <span>Charity Finder</span>
            </Link>
        </div>
        <div id="input-wrapper" className="relative">
            <input className="text-black" value={searchValue} onChange={handleSearchValueChange} type="text"
                   name="search" placeholder="Find a Charity ..."/>
        </div>
        <div className="text-xl font-extrabold text-teal-800"><Link to="/favourite">Favourite</Link></div>
        {children}

    </>)
}