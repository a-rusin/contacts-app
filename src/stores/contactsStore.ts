/** @format */

import { makeAutoObservable } from "mobx";
import { getContacts } from "src/api/contacts";
import { ContactDto } from "src/types/dto/ContactDto";

export const contactsStore = makeAutoObservable({
  contacts: [] as ContactDto[],
  *getContacts() {
    const data: ContactDto[] = yield getContacts();
    contactsStore.contacts = data;
  },
});
