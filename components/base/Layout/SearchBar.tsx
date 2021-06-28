import React, { FC } from "react";
import Button from "../Button";
import Search from "../../../icons/Search";

interface SearchBarProps {
  searchTerm?: string;
}

const SearchBar: FC<SearchBarProps> = (props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="inline-flex rounded-full justify-end">
      <Button
        icon={true}
        className="focus:outline-none"
        onClick={() => {
          setOpen(!open);
          // if (document.activeElement === inputRef.current) {
          //   inputRef.current?.blur();
          // } else {
          //   inputRef.current?.focus();
          // }
        }}
      >
        <Search className="h-5" fill="rgb(117,117,117)" />
      </Button>
      <input
        ref={inputRef}
        type="search"
        placeholder="Search Aleph"
        className={
          "focus:outline-none font-sans text-lg rounded-r-full transition-all duration-500 " +
          (open ? "w-full" : "w-0")
        }
      />
    </div>
  );
};

export default SearchBar;
