import axios from "axios";
import {IBrowseCharity, ICharityDetail} from "./types/charity.tsx";
import React from "react";

export interface IFetchCharity {
    id: string;
    setCharityDetail: React.Dispatch<React.SetStateAction<ICharityDetail>>
}

export interface IBrowseCause {
    cause: string;
    setCauseList: React.Dispatch<React.SetStateAction<IBrowseCharity[]>>
}

export const fetchCharity = async ({id, setCharityDetail}: IFetchCharity) => {
    try {
        const res = await axios.get<{
            nonprofits: ICharityDetail[]
        }>(`https://partners.every.org/v0.2/search/${id}?apiKey=${import.meta.env.VITE_API_KEY}`)
        setCharityDetail(res.data.nonprofits[0])
    } catch (e) {
        console.log('e', e)
    }
}

export const browseCause = async ({cause, setCauseList}: IBrowseCause) => {
    try {
        const res = await axios.get<{
            nonprofits: IBrowseCharity[]
        }>(`https://partners.every.org/v0.2/search/${cause}?apiKey=${import.meta.env.VITE_API_KEY}`)
        setCauseList(res.data.nonprofits)
    } catch (e) {
        console.log('e', e)
    }
}
