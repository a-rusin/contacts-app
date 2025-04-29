import { combineReducers } from "redux";
import { contactReducer } from "./contact";
import { groupReducer } from "./group";

export const rootReducer = combineReducers({
  contact: contactReducer,
  group: groupReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
