/* eslint-disable import/no-unresolved */
import { FetchUserDataQueryQuery } from "@lib/types/generated";
import Toast from "@lib/utils/toast";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const navItemsDataSlice = createSlice({
  name: "navItem",
  initialState: {
    admin: [],
    dashboard: [],
    main: [],
  },
  reducers: {
    setIntNavItemData: (state, action) => {
      state = action.payload;
      return state;
    },
    setNavItemData: (state, action) => {
      const newState = Object.assign(state, action.payload);
      return newState;
    },
    setAdminItemData: (state, action) => {
      state?.admin?.push(action?.payload?.admin);
      return state;
    },
    removeAdminItemData: (state, action) => {
      console.log("whats app", action?.payload?.admin?.name);
      const newState = state?.admin?.filter(
        (item) => item.name !== action?.payload?.admin?.name
      );
      const newAdmin = {
        admin: newState,
      };
      const newStateObj = Object.assign(state, newAdmin);
      return newStateObj;
    },
    removeNavItemData: () => ({}),
  },
});

export const fetchAndnavItemData = () => async (dispatch: any) => {
  const response = await fetch("/api/user-data");
  if (response.ok) {
    const data: FetchUserDataQueryQuery = await response.json();
    const { setNavItemData } = navItemsDataSlice.actions;
    dispatch(setNavItemData(data));
  } else {
    Toast("Updating Personal Information Failed. Refresh!", { type: "error" });
  }
};

export const navItemDataActions = navItemsDataSlice.actions;

export default navItemsDataSlice.reducer;
