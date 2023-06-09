import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import PropTypes from 'prop-types';

import { Form, Input, Btn } from './Search.styled';


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
    <Form onSubmit={handleSubmit}>
      <Input
        type="search"
        name="search"
        autoComplete="off"
        placeholder="Enter movie name"
        value={value}
        onChange={handleChange}
      />
      <Btn type="submit" aria-label="Search">
         {<FiSearch />}
      </Btn>
    </Form>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
