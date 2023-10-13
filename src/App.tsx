import {Navbar} from "./Components/Navbar.tsx";
import {useEffect, useMemo, useState} from "react";
import {CauseCard} from "./Components/CauseCard.tsx";
import CAUSE_LIST from "../CauseList.json";
import {browseCause} from "./axios.ts";
import {IBrowseCharity} from "./types/charity.tsx";

function App() {

    const [shouldFadeIn, setShouldFadeIn] = useState(false)
    const [causeList, setCauseList] = useState<IBrowseCharity[]>([])
    const randomCause = useMemo(() => CAUSE_LIST[Math.floor(Math.random() * CAUSE_LIST.length)], [])

    useEffect( () => {
        setShouldFadeIn(true)
    }, [])

    useEffect(() => {
        browseCause({cause: randomCause, setCauseList})
    }, [randomCause])

    return (
        <>
            <div className={`relative bg-cover bg-center w-full h-144 transition-all duration-1000 ${shouldFadeIn ? 'opacity-100' : 'opacity-25'}`} style={{
                backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681492071459-3a45f4289743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2971&q=80')`
            }}>
                <Navbar />
            <div className="font-extrabold bg-white opacity-75 absolute text-4xl tracking-widest" style={{left: '30px', top: '500px'}}>Find a Charity That Interests You</div>
            </div>
            <div className="mt-6 px-5 grid grid-cols-5 gap-3">
                {causeList.map((cause) =>
                    <CauseCard key={cause?.name} cause={cause}/>
                )}
            </div>
        </>
    )
}

export default App
