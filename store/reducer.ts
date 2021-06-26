import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";

export interface State {}

const initState: State = {};

export const reducer = (
  state: State = initState,
  action: AnyAction
) => {
  switch (action.type) {
    case HYDRATE:
      if (action.payload.app === "init") delete action.payload.app;
      if (action.payload.page === "init") delete action.payload.page;
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
