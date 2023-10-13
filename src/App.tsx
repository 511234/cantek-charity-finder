import {Navbar} from "./Components/Navbar.tsx";
import {useEffect, useMemo, useState} from "react";
import {CauseCard} from "./Components/CauseCard.tsx";
import CAUSE_LIST from "../CauseList.json";
import {browseCause} from "./axios.ts";

function App() {

    const [shouldFadeIn, setShouldFadeIn] = useState(false)
    const [causeList, setCauseList] = useState([])
    const randomCause = useMemo(() => CAUSE_LIST[Math.floor(Math.random() * CAUSE_LIST.length)], [])


    useEffect( () => {
        setShouldFadeIn(true)
    }, [])

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
            <div className={`bg-cover bg-center w-full h-160 transition-all duration-1000 ${shouldFadeIn ? 'opacity-100' : 'opacity-25'}`} style={{
                backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681492071459-3a45f4289743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2971&q=80')`
            }}>
                <Navbar />
            </div>
            {/*<img className="object-cover h-10 w-full" src="" />*/}
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
