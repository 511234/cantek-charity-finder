import {Navbar} from "../Components/Navbar.tsx";
import {useState} from "react";
import {CharityCard} from "../Components/CharityCard.tsx";

export const Favourite = () => {


    const [favList] = useState(JSON.parse(localStorage.getItem('charity-fav-list')) ?? [])



    return (<>
        <Navbar/>

        Favourite
        {favList.length == 0 ? <div>Your Favourite List is Empty.</div>:
            <div className="grid grid-cols-5 gap-3">
                {favList.map((charity) => <CharityCard key={charity.name} charity={charity}/>)}
            </div>

        }

    </>)
}