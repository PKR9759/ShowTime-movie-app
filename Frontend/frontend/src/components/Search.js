import React from 'react';
import { InputGroup, InputGroupText, Input } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

const Search = ({ setSearchQuery }) => {
  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search mt-4 mb-4" >
      <InputGroup>
        <Input
          type="text"
          placeholder="Search by name"
          onChange={handleChange}
        />
        <InputGroupText>
          <FaSearch />
        </InputGroupText>
      </InputGroup>
    </div>
  );
}

export default Search;
