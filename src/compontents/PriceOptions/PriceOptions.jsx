import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to gym facilities during)",
        "Cardio and strength training",
        "Locker room access",
        "Discounts on group fitness classes",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 49.99,
      features: [
        "Access to gym facilities during ",
        "Full access to cardio and strength",
        "Access to group fitness classes",
        "Sauna and steam room access",
        "Discounts on personal training sessions",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 79.99,
      features: [
        "Access to gym facilities during",
        "Personalized workout plans",
        "Unlimited access to personal trainer",
        "Nutritional guidance",
        "Access to all group fitness classes",
        "Exclusive access to VIP lounge area",
        "Complimentary towel service",
      ],
    },
    {
      id: 4,
      name: "Annual Membership",
      price: 499.99,
      features: [
        "Access to gym facilities during",
        "Priority booking for group fitness ",
        "Discounts on merchandise supplements",
        "Access to all premium amenities",
        "Free guest passes",
        "Quarterly fitness assessments",
      ],
    },
  ];
  return (
    <div className="m-12">
      <h1 className="text-5xl">Best prices in the town </h1>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
