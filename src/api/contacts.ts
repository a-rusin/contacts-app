/** @format */

import axios from "axios";
import { ContactDto } from "src/types/dto/ContactDto";

export const getContacts = async () => {
  const { data } = await axios.get<ContactDto[]>(
    "https://fs04.gcfiles.net/fileservice/file/download/a/177331/sc/385/h/0afc05779dcbbebd7055a1d87b8c7c6b.json"
  );

  return data;
};
