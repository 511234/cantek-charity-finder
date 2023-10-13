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
            <CoverImg imgUrl={causeList?.[0]?.coverImageUrl ?? 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80'}>
                <Navbar/>
            </CoverImg>
            <h1 className="text-3xl">Search results for: {cause}</h1>

            <div className="grid grid-cols-6 gap-3">
                {causeList.map((cause) =>
                    <CauseCard key={cause.name} cause={cause}/>
                )
                }
            </div>
        </>
    )
}