import {Link} from "react-router-dom";
import HELP_ICON from '../imgs/help-icon.png'

export const CauseCard = ({cause}) => {

    return (
        <div id="card" className="p-2 border rounded-xl px-5 border-none h-[200px] bg-teal-100 hover:bg-teal-200">
            <Link to={`/charity/${cause.name}`}>
                <div className="grid grid-cols-3">
                    <img className="w-10 h-10" src={cause.logoUrl ?? HELP_ICON}/>
                    <span className="col-span-2">{cause.name}</span>
                    {/*<br/>*/}
                    {/*<span>{cause.location}</span>*/}
                </div>
            </Link>
        </div>
    )
}