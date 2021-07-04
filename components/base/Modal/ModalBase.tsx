import React, { FC } from "react";
import { ModalBaseProps } from "../../../types";
import Close from "../../../icons/Close";
import Button from "../Button";

const ModalBase: FC<ModalBaseProps> = (props) => {
  return (
    <div
      className={
        "fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm backdrop-saturate-150 transform scale-0 transition-transform duration-300" +
        (props.open ? " scale-100" : "")
      }
    >
      <div className={"bg-white w-10/12 md:w-1/2 xl:w-1/3 h-2/3 p-8 rounded-sm shadow-lg "+ props.modalClassName ?? ""}>
        <div className="flex justify-between">
          <div></div>
          <div>{props.title}</div>
          <Button onClick={() => props.onClose()} icon={true}>
            <Close className="h-6" />
          </Button>
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default ModalBase;
