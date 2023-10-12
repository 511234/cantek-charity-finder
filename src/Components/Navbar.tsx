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
            <nav className="bg-cg1 text-white h-16 flex items-center justify-around flex-row space-around w-full">
                <SearchField searchValue={searchValue}
                             handleSearchValueChange={handleSearchValueChange}>
                {searchValue &&
                    <div style={{top: '50px'}} className="absolute p-6 border-solid grid grid-cols-5 gap-2 bg-cg1 w-9/12 ">
                        {optionList.map((option) => <span
                            className="bg-blue-900 rounded-md text-center my-[5px] mr-4 h-[40px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[16px]  text-[#4f4f4f]"
                            key={option}
                            onClick={resetSearchValue}>
                            <Link to={`/search/${option}`}>{option}</Link></span>)}
                        {optionList.length == 0 && <div>Charity Cause Not Found</div>}

                    </div>}
                </SearchField>
            </nav>

        </>
    )
}