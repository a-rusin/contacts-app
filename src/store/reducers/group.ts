import { AnyAction } from "redux";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { DATA_GROUP_CONTACT } from "../../__data__";

export const groupReducer = (
  state: GroupContactsDto[] = DATA_GROUP_CONTACT,
  action: AnyAction
): GroupContactsDto[] => {
  switch (action.type) {
    default:
      return state;
  }
};
