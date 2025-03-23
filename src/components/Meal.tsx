import { Link } from 'react-router-dom';

interface MealItemProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const Meal: React.FC<MealItemProps> = ({ idMeal, strMeal, strMealThumb }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link className="btn" to={`/meal/${idMeal}`}>
          Watch category
        </Link>
      </div>
    </div>
  );
};

export { Meal };
