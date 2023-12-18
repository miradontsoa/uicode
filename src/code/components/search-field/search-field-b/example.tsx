import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import SearchFieldB from "./search-field-b";

export default function Example() {
  const [searchText, setSearchText] = useState("-");
  return (
    <div className="grid gap-4 max-w-md mx-auto">
      <div>
        <SearchFieldB
          placeholder={"Keyword ..."}
          searchButtonIcon={<MagnifyingGlassIcon />}
          beforeElement={<MagnifyingGlassIcon className="w-6" />}
          onSearch={(text) => {
            setSearchText(text);
          }}
        />
      </div>

      <div>
        <SearchFieldB
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
        <SearchFieldB
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
        <SearchFieldB
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
        <SearchFieldB
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
        <SearchFieldB
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
