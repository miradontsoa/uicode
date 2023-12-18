import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import SearchFieldA from "./search-field-a";

export default function Example() {
  const [searchText, setSearchText] = useState("-");
  return (
    <div className="grid gap-4 max-w-sm mx-auto">
      <div>
        <SearchFieldA
          placeholder={"Keyword ..."}
          searchButtonIcon={<MagnifyingGlassIcon />}
          onSearch={(text) => {
            setSearchText(text);
          }}
        />
      </div>

      <div>
        <SearchFieldA
          placeholder={"Keyword ..."}
          searchButtonIcon={<MagnifyingGlassIcon />}
          beforeElement={<Bars3Icon className="w-6" />}
          rounded="full"
          onSearch={(text) => {
            setSearchText(text);
          }}
        />
      </div>

      <div>
        <SearchFieldA
          placeholder={"Keyword ..."}
          searchButtonIcon={<MagnifyingGlassIcon />}
          variant={"style-a"}
          rounded="full"
          onSearch={(text) => {
            setSearchText(text);
          }}
        />
      </div>
      <div>
        <SearchFieldA
          placeholder={"Keyword ..."}
          searchButtonText={"Search"}
          searchButtonIcon={<MagnifyingGlassIcon />}
          rounded="small"
          onSearch={(text) => {
            setSearchText(text);
          }}
        />
      </div>

      <div>
        <SearchFieldA
          placeholder={"Keyword ..."}
          searchButtonText={"Search"}
          searchButtonIcon={<MagnifyingGlassIcon />}
          variant={"style-a"}
          rounded="large"
          onSearch={(text) => {
            setSearchText(text);
          }}
        />
      </div>
      <div>
        <SearchFieldA
          placeholder={"Keyword ..."}
          searchButtonText={"Search"}
          searchButtonIcon={<MagnifyingGlassIcon />}
          rounded="full"
          onSearch={(text) => {
            setSearchText(text);
          }}
        />
      </div>
      <div>
        <p>Search text: {searchText}</p>
      </div>
    </div>
  );
}
