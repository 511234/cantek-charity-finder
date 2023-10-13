import {Navbar} from "../Components/Navbar.tsx";
import {useState} from "react";
import {CharityCard} from "../Components/CharityCard.tsx";
import {CoverImg} from "../Components/CoverImg.tsx";

export const Favourite = () => {


    const [favList] = useState(JSON.parse(localStorage.getItem('charity-fav-list')) ?? [])

    return (<>
        <CoverImg imgUrl="https://plus.unsplash.com/premium_photo-1683580362892-fc31c2ff935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80">
            <Navbar/>
        </CoverImg>

        Favourite
        {favList.length == 0 ? <div>Your Favourite List is Empty.</div>:
            <div className="grid grid-cols-5 gap-3">
                {favList.map((charity) => <CharityCard key={charity.name} charity={charity}/>)}
            </div>

        }

    </>)
}