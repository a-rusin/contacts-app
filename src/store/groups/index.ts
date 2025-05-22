/** @format */

import { groupsApi } from "./api";

export const groupsApiReducerPath = groupsApi.reducerPath;
export const groupsApiReducer = groupsApi.reducer;
export const groupsApiMiddleware = groupsApi.middleware;

export const { useGetGroupsQuery } = groupsApi;
