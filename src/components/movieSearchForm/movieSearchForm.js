import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from 'components/movieSearchForm/movieSearchForm.styled';
import { useState } from 'react';

import { FcSearch } from 'react-icons/fc';

export default function MoviesSearchForm({ setSearchParams, initialValue }) {
  const [query, setQuery] = useState('');

  const submitRequest = event => {
    event.preventDefault();
    setSearchParams({ query });
  };

  const addSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={submitRequest}>
        <SearchFormInput
          className="input"
          name="searchQueryStr"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Movie name"
          defaultValue={initialValue}
          onChange={addSearchParams}
        />

        <SearchFormButton type="submit">
          <FcSearch size={30} />
        </SearchFormButton>
      </SearchForm>
    </SearchBar>
  );
}
