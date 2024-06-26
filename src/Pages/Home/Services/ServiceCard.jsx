import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service || {}
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
      <div key={_id} className="card w-96 mx-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl font-bold text-[#ff3811]">Price : ${price}</p>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
      {/* { */}
      {/* service?.map(ser => (    */}
      {/* )) */}
      {/* } */}

    </div>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.array,
};
export default ServiceCard;