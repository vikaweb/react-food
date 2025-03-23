import { API_URL } from './config';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory?: string;
  strInstructions?: string;
  strYoutube?: string;
}

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface MealsResponse {
  meals: Meal[] | null;
}

interface CategoriesResponse {
  categories: Category[];
}

const getMealById = async (mealId: string): Promise<MealsResponse> => {
  const response = await fetch(`${API_URL}lookup.php?i=${mealId}`);
  if (!response.ok) {
    throw new Error(`Ошибка запроса: ${response.status}`);
  }
  return response.json();
};

const getAllCategories = async (): Promise<CategoriesResponse> => {
  const response = await fetch(`${API_URL}categories.php`);
  if (!response.ok) {
    throw new Error(`Ошибка запроса: ${response.status}`);
  }
  return response.json();
};

const getFilteredCategory = async (catName: string): Promise<MealsResponse> => {
  const response = await fetch(`${API_URL}filter.php?c=${catName}`);
  if (!response.ok) {
    throw new Error(`Ошибка запроса: ${response.status}`);
  }
  return response.json();
};

export { getAllCategories, getFilteredCategory, getMealById };
