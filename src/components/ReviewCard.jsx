import {star} from '../assets/icons';

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={imgURL} alt={customerName} className="rounded-full object-cover w-[120px] h-[120px]"/>
            <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>

            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img src={star} width={24} height={24} className="object-cover m-0"/>
                <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
            </div>

            <h3 className="font-palanquin text-3xl font-bold mt-1 text-center">{customerName}</h3>
        </div>
    );
};

export default ReviewCard;