import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { MealList } from '../components/MealList';
import { Preloader } from '../components/Preloader';

interface Category {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState<Category[] | null>(null);

  useEffect(() => {
    if (!name) return;
    getFilteredCategory(name).then((data) => setMeals(data.meals || []));
  }, [name]);

  return <>{!meals ? <Preloader /> : <MealList meals={meals} />}</>;
}

export { Category };
