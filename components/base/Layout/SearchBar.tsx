import React, { FC } from "react";
import Button from "../Button";
import Search from "../../../icons/Search";

interface SearchBarProps {
  searchTerm?: string;
}

const SearchBar: FC<SearchBarProps> = (props) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="inline-flex rounded-full border-2">
      <Button icon={true} onClick={() => setOpen(!open)} className="focus:outline-none">
        <Search className="h-5" />
      </Button>
      <input
        placeholder="Search Aleph.."
        className={
          "font-sans px-1 text-lg rounded-r-full bg-transparent " +
          (open ? "" : "hidden")
        }
      />
    </div>
  );
};

export default SearchBar;
