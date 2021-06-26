import { createStore, AnyAction, Store } from "redux";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import { State, reducer } from "./reducer";

const makeStore = (context: Context) => createStore(reducer);

export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });
