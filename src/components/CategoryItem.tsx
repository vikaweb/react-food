import { Link } from 'react-router-dom';

interface CategoryItemProps {
  idCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
  strCategory: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  idCategory,
  strCategoryThumb,
  strCategoryDescription,
  strCategory,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={idCategory} />
        <div className="card-content">
          <span className="card-title">{strCategory}</span>
          <p>{strCategoryDescription.slice(0, 60)}...</p>
        </div>
        <div className="card-action">
          <Link className="btn" to={`/category/${strCategory}`}>
            Watch category
          </Link>
        </div>
      </div>
    </div>
  );
};
export { CategoryItem };
