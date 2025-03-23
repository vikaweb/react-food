import { useNavigate } from 'react-router-dom';
import { Meal } from './Meal';

interface Category {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}
interface CategoryListProps {
  meals?: Category[];
}

const MealList: React.FC<CategoryListProps> = ({ meals = [] }) => {
  const navigate = useNavigate();
  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="list">
        {meals.map((el) => (
          <Meal key={el.idMeal} {...el} />
        ))}
      </div>
    </>
  );
};
export { MealList };
