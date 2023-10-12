import { useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import {Navbar} from "../Components/Navbar.tsx";
import {IBrowseCharity} from "../types/charity.tsx";
import {browseCause} from "../axios.ts";
import {CauseCard} from "../Components/CauseCard.tsx";


export const SearchPage = () => {
    const {cause} = useParams()
    const [causeList, setCauseList] = useState<IBrowseCharity[]>([])

    // const fetchCharity = async () => {
    //     try {
    //         const res = await axios.get<{
    //             nonprofits: IBrowseCharity[]
    //         }>(`https://partners.every.org/v0.2/browse/${cause}?apiKey=${import.meta.env.VITE_API_KEY}`)
    //         console.log('res', res)
    //         setCauseList(res.data.nonprofits)
    //
    //     } catch (e) {
    //         console.log('e', e)
    //     }
    // }

    useEffect(() => {
        browseCause({cause, setCauseList})
    }, [cause])

    return (<>
            <Navbar/>
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