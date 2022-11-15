import { useGlobalContext } from '../Context';

const Meals = () => {
  const context = useGlobalContext();
  console.log(context);
  return <div>Meals</div>;
};

export default Meals;
