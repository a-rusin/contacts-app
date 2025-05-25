/** @format */

import { makeAutoObservable } from "mobx";
import { getGroups } from "src/api/groups";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const groupsStore = makeAutoObservable({
  groups: [] as GroupContactsDto[],
  *getGroups() {
    const data: GroupContactsDto[] = yield getGroups();
    groupsStore.groups = data;
  },
});
