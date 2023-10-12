import {Link} from "react-router-dom";

export const CharityCard = ({charity}) => {

    return (
        <>
            <div id="card" className="border rounded-xl border-none h-[200px] bg-lightBlue">
                <Link to={`/charity/${charity.name}`}>
                    <span>{charity.name}</span>
                    <br/>
                    <span>{charity.location}</span>
                </Link>
            </div>
        </>
    )
}