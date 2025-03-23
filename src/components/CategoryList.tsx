import { CategoryItem } from './CategoryItem';

interface Category {
  idCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
  strCategory: string;
}

interface CategoryListProps {
  catalog?: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ catalog = [] }) => {
  return (
    <div className="list">
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
};
export { CategoryList };
