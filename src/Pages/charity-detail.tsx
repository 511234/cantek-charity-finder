import {Link, useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import {Navbar} from "../Components/Navbar.tsx";
import {ICharityDetail} from "../types/charity.tsx";
import {fetchCharity} from "../axios.ts";
import {Toast} from "../Components/Toast.tsx";
import {CoverImg} from "../Components/CoverImg.tsx";
import FAV_REMOVE from '../imgs/fav-remove.png'
import FAV_ADD from '../imgs/fav-add.png'
import URL from '../imgs/url.png'

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
            <div className="absolute bg-white opacity-75 rounded-lg p-4 w-2/5 flex flex-col gap-3" id="charity-details" style={{top: '200px', right: '100px'}}>
                <div className="flex flex-row items-center">
                <img alt={charityDetail?.name} src={charityDetail?.logoUrl}/>
                <span>{id}</span>
                </div>
                {charityDetail?.location && <span>{charityDetail.location}</span>}
                {charityDetail?.description && <p className="mt-5">{charityDetail.description}</p>}
                <div className="bg-white opacity-100 charity-action flex flex-row gap-4" >
                    {isInLs ?
                        <button type="button" onClick={handleRemoveFromFav}>
                            <img alt="Remove from Favourite" className="w-10 h-10" src={FAV_REMOVE} />
                        </button>
                        :
                        <button type="button" onClick={handleAddToFav}>
                            <img alt="Add to Favourite" className="w-10 h-10" src={FAV_ADD} />
                        </button>
                    }
                    <button type="button"><Link to={`${charityDetail?.profileUrl}`}>
                        <img alt="Learn More" className="w-10 h-10" src={URL} />
                    </Link>
                    </button>
                </div>
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

        {isSuccess && <Toast message={toastMessage}/>}


        {/*</div>*/}

    </>)

}