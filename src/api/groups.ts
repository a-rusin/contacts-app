/** @format */

import axios from "axios";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const getGroups = async () => {
  const { data } = await axios.get<GroupContactsDto[]>(
    "https://fs04.gcfiles.net/fileservice/file/download/a/177331/sc/0/h/f1e98b0d70d16a909818b03b72415733.json"
  );

  return data;
};
