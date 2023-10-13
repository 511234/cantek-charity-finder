import {SearchField} from "./SearchField.tsx";
import {useEffect, useState} from "react";
import CAUSE_LIST from '../../CauseList.json'
import {Link} from "react-router-dom";

export const Navbar = () => {

    const [optionList, setOptionList] = useState<string[]>([])
    const [searchValue, setSearchValue] = useState('')

    const resetSearchValue = () => {
        setSearchValue('')
    }

    const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }


    useEffect(() => {
        setOptionList(CAUSE_LIST.filter((cause) => cause.includes(searchValue.toLowerCase())))
    }, [searchValue])


    return (
        <>
            <nav className="bg-white bg-opacity-50 absolute font-extrabold text-teal-800 h-16 flex items-center justify-around flex-row space-around w-full">
                <SearchField searchValue={searchValue}
                             handleSearchValueChange={handleSearchValueChange}>
                {searchValue &&
                    <div style={{top: '64px'}} className="bg-white bg-opacity-50 rounded-b-xl absolute p-6 border-solid grid grid-cols-5 gap-x-6 gap-y-2 w-7/12 ">
                        {optionList.map((option) => <span
                            // style={{width: '100px'}}
                            className="bg-teal-700 text-white rounded-md text-center cursor-pointer items-center justify-between"
                            key={option}
                            onClick={resetSearchValue}>
                            <Link to={`/search/${option}`}>{option}</Link></span>)}
                        {optionList.length == 0 && <div className="font-extrabold text-xl text-teal-800 bg-white">Cause Not Found</div>}

                    </div>}
                </SearchField>
            </nav>

        </>
    )
}