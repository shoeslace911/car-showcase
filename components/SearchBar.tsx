"use client";

import React, { useState } from "react";
import { SearchManufacture } from ".";

const SearchBar = () => {
  const [manufacture, setManufacture] = useState("");
  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacture manufacturer={manufacture} setManufacturer={setManufacture} />
      </div>
    </form>
  );
};

export default SearchBar;
