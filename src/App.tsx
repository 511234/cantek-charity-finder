import './App.css'
import {Navbar} from "./Components/Navbar.tsx";
import {useEffect, useMemo, useState} from "react";
import {CauseCard} from "./Components/CauseCard.tsx";
import CAUSE_LIST from "../CauseList.json";
import {browseCause} from "./axios.ts";

function App() {

    const [causeList, setCauseList] = useState([])
    const randomCause = useMemo(() => CAUSE_LIST[Math.floor(Math.random() * CAUSE_LIST.length)], [])

    useEffect(() => {
        browseCause({cause: randomCause, setCauseList})
    }, [randomCause])


    // const fetchCharity = async () => {
    //     try {
    //         const res = await axios.get<{
    //             nonprofits: IBrowseCharity[]
    //         }>(`https://partners.every.org/v0.2/browse/${cause}?apiKey=${import.meta.env.VITE_API_KEY}`)
    //         console.log('res', res)
    //         setResList(res.data.nonprofits)
    //
    //     } catch (e) {
    //         console.log('e', e)
    //     }
    // }


    return (
        <>
            <Navbar/>
            <div>Find a charity you may be interested in...</div>
            <div className="grid grid-cols-5 gap-3">
                {causeList.map((cause) =>
                    <CauseCard key={cause.name} cause={cause}/>
                )}
            </div>
        </>
    )
}

export default App
