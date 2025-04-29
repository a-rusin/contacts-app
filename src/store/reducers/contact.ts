// const initialState =

import { ContactDto } from "src/types/dto/ContactDto";
import { DATA_CONTACT } from "../../__data__";
import { AnyAction } from "redux";

export const contactReducer = (
  state: ContactDto[] = DATA_CONTACT,
  action: AnyAction
): ContactDto[] => {
  switch (action.type) {
    default:
      return state;
  }
};
