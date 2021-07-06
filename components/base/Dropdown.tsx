import React, { FC } from "react";
import { DropdownProps } from "../../types";

const Dropdown: FC<DropdownProps> = ({
  anchor,
  children,
  open,
  className = "",
  position = "bottom-right",
}) => {
  const [display, setDisplay] = React.useState("");
  React.useEffect(() => {
    if (open) {
      setDisplay("");
    } else {
      setTimeout(() => setDisplay("hidden"), 500);
    }
  }, [open]);

  return (
    <div className="relative inline-block">
      {anchor}
      <div
        className={[
          "origin-top-right right-0 mt-2 absolute w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none transition ease-in-out duration-500",
          open
            ? "transform opacity-100 scale-100"
            : "transform opacity-0 scale-50",
          display,
          className,
        ].join(" ")}
      >
        <div className="py-1" role="none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
