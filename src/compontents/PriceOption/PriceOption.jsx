import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-400 p-6 text-black flex flex-col rounded-lg">
      <h2 className="text-center">
        <span className="text-5xl font-extrabold ">{price}</span>
        <span className="text-2xl">/months</span>
      </h2>
      <h4 className="text-3xl text-center font-bold my-5">{name}</h4>
      <div className="pl-3 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className=" text-white bg-green-500 py-4 w-full rounded-2xl mt-12 font-bold hover:bg-green-800">
        {" "}
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
