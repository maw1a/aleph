import React, { FC } from "react";
import SearchBar from "./SearchBar";
import Logo from "../../../icons/Logo";

const Header: FC<any> = (props) => {
  return (
    <nav className="shadow-md">
      <div className="container mx-auto px-2 py-3">
        <div className="w-100 flex items-center justify-between">
          <div className="inline-flex">
            <Logo className="h-12"/>
          </div>
          <div className="inline-flex">
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
