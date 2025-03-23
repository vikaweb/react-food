import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCategories } from '../api';
import { CategoryList } from '../components/CategoryList';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

function Home() {
  const [catalog, setCatalog] = useState<Category[]>([]);
  const [filteredCatalog, setFilteredCatalog] = useState<Category[]>([]);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str: string) => {
    setFilteredCatalog(
      catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase()))
    );

    navigate({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLocaleLowerCase()
                .includes(search.split('=')[1].toLocaleLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? <Preloader /> : <CategoryList catalog={filteredCatalog} />}
    </>
  );
}

export { Home };
