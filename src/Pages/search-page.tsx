import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import {Navbar} from "../Components/Navbar.tsx";
import {IBrowseCharity} from "../types/charity.tsx";
import {browseCause} from "../axios.ts";
import {CauseCard} from "../Components/CauseCard.tsx";
import {CoverImg} from "../Components/CoverImg.tsx";


export const SearchPage = () => {
    const {cause} = useParams()
    const [causeList, setCauseList] = useState<IBrowseCharity[]>([])

    useEffect(() => {
        browseCause({cause, setCauseList})
    }, [cause])

    console.log('causeList', causeList[0])

    return (<>
            <CoverImg imgUrl={causeList?.[0]?.coverImageUrl ?? ''}>
                <Navbar/>
            </CoverImg>
            <h1>Search results for: {cause}</h1>

            <div className="grid grid-cols-5 gap-3">
                {causeList.map((cause) =>
                    <CauseCard key={cause.name} cause={cause}/>
                )
                }
            </div>
        </>
    )
}