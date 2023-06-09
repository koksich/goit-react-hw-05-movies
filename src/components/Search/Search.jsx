import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = ({ onSubmit }) => {
  const [value, setValue] = useState('');

    const handleChange = ({ target: {value} }) => { 
        setValue(value);
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        const searchValue = value.trim();
        if (!searchValue) {
            alert('The search field cannot be empty. Please, enter movie name');
            return;

        };
        onSubmit(searchValue);
    };
    
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        autoComplete="off"
        placeholder="Enter movie name"
        value={value}
        onChange={handleChange}
      />
      <button type="submit" aria-label="Search">
        {' '}
        Seacrh {<FiSearch />}
      </button>
    </form>
  );
};

export default Search;
