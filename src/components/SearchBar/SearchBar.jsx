import React from 'react';

function SearchBar() {
  return (
    <form>
      <input type="search" placeholder="Buscar produtos" className="search__input" />
      <button type="submit" className="search__button">
        icone
      </button>
    </form>
  );
}
export default SearchBar;
