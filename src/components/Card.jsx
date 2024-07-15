import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Card = (props) => {

    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full hoverBtn">
            <img className="w-[300px] h-[300px] max-w-full rounded-lg" src={props.img} alt={props.title} />
            <div className="mt-4 flex justify-start items-center gap-2.5">
                <FaStar color="gold" size={24} />
                <FaStar color="gold" size={24} />
                <FaStar color="gold" size={24} />
                <FaStar color="gold" size={24} />
                <FaStarHalfAlt color="gold" size={24} />
                <p className="text-xl font-bold font-palanquin">({props.rating})</p>
            </div>
            <h1 className="mt-2 text-2xl leading-normal font-bold font-palanquin">{props.title}</h1>
            <p className="mt-2 font-semibold text-[#FF6452] text-2xl leading-normal">${props.price}</p>
        </div>
    )
}

export default Card