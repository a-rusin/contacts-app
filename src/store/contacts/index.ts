/** @format */

import { contactsApi } from "./api";

export const contactsApiReducerPath = contactsApi.reducerPath;
export const contactsApiReducer = contactsApi.reducer;
export const contactsApiMiddleware = contactsApi.middleware;

export const { useGetContactsQuery } = contactsApi;
