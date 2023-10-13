import {Link, useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import {Navbar} from "../Components/Navbar.tsx";
import {ICharityDetail} from "../types/charity.tsx";
import {fetchCharity} from "../axios.ts";
import {Toast} from "../Components/Toast.tsx";
import {CoverImg} from "../Components/CoverImg.tsx";

export const CharityDetail = () => {
    const handleInLsCheck = () => {
        const favLsList = JSON.parse(localStorage.getItem('charity-fav-list')) ?? []
        return favLsList.find((item) => item?.name === id)
    }

    const {id} = useParams()
    const [charityDetail, setCharityDetail] = useState<ICharityDetail | null>(null)
    const [isInLs, setIsInLs] = useState(handleInLsCheck)
    const [isSuccess, setIsSuccess] = useState(false)
    const [toastMessage, setToastMessage] = useState('')


    const handleAddToFav = () => {
        const favLsList = JSON.parse(localStorage.getItem('charity-fav-list')) ?? [];
        favLsList.push(charityDetail)
        localStorage.setItem('charity-fav-list', JSON.stringify(favLsList))
        setIsSuccess(true)
        setToastMessage(`${id} is successfully added to favourite list!`)
        setIsInLs(true)
    }

    const handleRemoveFromFav = () => {
        let favLsList = JSON.parse(localStorage.getItem('charity-fav-list')) ?? [];
        favLsList = favLsList.filter((item) => item?.name !== id)
        localStorage.setItem('charity-fav-list', JSON.stringify(favLsList))
        setIsSuccess(true)
        setToastMessage(`${id} is successfully removed from favourite list!`)
        setIsInLs(false)
    }

    useEffect(() => {
        fetchCharity({id, setCharityDetail})
    }, [])

    console.log('charity detail', charityDetail)

    return (<>
        <CoverImg imgUrl={charityDetail?.coverImageUrl ?? 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2740&q=80'}>
        <Navbar/>
        </CoverImg>
        {/*<div className=" flex flex-row gap-2" id="charity-wrapper">*/}
            <div className="absolute bg-white opacity-75 rounded-lg p-4 w-2/5" id="charity-details" style={{top: '200px', right: '100px'}}>
                <div className="flex flex-row items-center">
                <img alt={charityDetail?.name} src={charityDetail?.logoUrl}/>
                <span>{id}</span>
                </div>
                <span>{charityDetail?.location}</span>
                <p className="mt-5">{charityDetail?.description}</p>
                {Array.isArray(charityDetail?.tags) && charityDetail?.tags.length > 0 &&
                    <>
                        <div className="flex flex-row gap-2">
                            {
                                charityDetail?.tags.map((tag) =>
                                    <button key={tag} type="button"
                                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                        <Link to={`/search/${tag}`}>#{tag}</Link></button>
                                )
                            }
                        </div>
                    </>
                }
            </div>
            <div className="charity-action flex flex-row mx-32 gap-4" >
                {isSuccess && <Toast message={toastMessage}/>}
                {isInLs ?
                    <button type="button" className="rounded-lg bg-blue-400" onClick={handleRemoveFromFav}>Remove from
                        Favourite
                    </button>
                    :
                    <button type="button" className="rounded-lg bg-blue-400" onClick={handleAddToFav}>Add to Favourite
                    </button>
                }
                <button type="button" className="rounded-lg bg-green-400"><Link to={`${charityDetail?.profileUrl}`}>Check
                    it in every.org</Link></button>
            </div>

        {/*</div>*/}

    </>)

}