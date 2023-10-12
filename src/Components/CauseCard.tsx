import {Link} from "react-router-dom";

export const CauseCard = ({cause}) => {

    return (
        <div id="card" className="border rounded-xl border-none h-[200px] bg-lightBlue">
            <Link to={`/charity/${cause.name}`}>
                <span>{cause.name}</span>
                <br/>
                <span>{cause.location}</span>
            </Link>
        </div>
    )
}