/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ContactDto } from "src/types/dto/ContactDto";

export const contactsApi = createApi({
  reducerPath: "contacts/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fs04.gcfiles.net/fileservice/file/download/a/177331/sc",
  }),
  endpoints: (builder) => {
    return {
      getContacts: builder.query<ContactDto[], void>({
        query: () => "/385/h/0afc05779dcbbebd7055a1d87b8c7c6b.json",
      }),
    };
  },
});
