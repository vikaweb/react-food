import { useState } from 'react';

interface SearchProps {
  cb: (searchValue: string) => void;
}

const Search: React.FC<SearchProps> = ({ cb }) => {
  const [value, setValue] = useState<string>('');

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="Search"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={handleSubmit} className="btn search-btn">
          Search
        </button>
      </div>
    </div>
  );
};

export { Search };
