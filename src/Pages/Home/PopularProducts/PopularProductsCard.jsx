import { FaArrowRight } from "react-icons/fa";
import PropTypes from 'prop-types'


const PopularProductsCard = ({ product }) => {
    const { title, img, price } = product;
    return (
        <div className="card w-96 mx-auto p-5 bg-green-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="flex flex-col space-y-3 items-center text-center">
                <div className="rating mt-3">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                </div>
                <h2 className="card-title">{title}</h2>
                <div className="flex items-center justify-between w-full">
                    <p className="text-xl font-bold text-[#ff3811]">Price : ${price}</p>
                    <button className="btn btn-primary"><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};
PopularProductsCard.propTypes = {
    product: PropTypes.object.isRequired
  };

export default PopularProductsCard;