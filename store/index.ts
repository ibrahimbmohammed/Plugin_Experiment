/* eslint-disable import/no-unresolved */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
// import storage from 'redux-persist/lib/storage';
import { ROOT_DATA_KEY } from "@constants";
import loginModalReducer from "@store/login-modal";
import postModalReducer from "@store/post-modal";
import themeReducer from "@store/theme-slice";
import orgIdReducer from "@store/org-id";
import userEmailReducer from "@store/user-email";
import dashboardHomeReducer from "@store/dashboard/dashboard-home";
import dashboardHomeBirthdayReducer from "@store/dashboard/dashboard-home-birthdays";
import userProfessionalInformationReducer from "@store/dashboard/dashboard-user-professional-information";
import dashboardEventsReducer from "@store/dashboard/dashboard-events";
import resetCodeReducer from "@store/reset-password-code";
import userDataReducer from "@store/user-data/user-data";
import navItemDataReducer from "@store/nav-route/nav-route";
import dashboardOrgDataReducer from "@store/dashboard/dashboard-org-data";
import organizationPaymentAPIsDataReducer from "@store/payment-apis/";
import footerDataReducer from "@store/footer";
import notificationsDataReducer from "@store/notifications";
import conferenceHomeReducer from "@store/conference/conference-home";
import conferencePresenterListReducer from "@store/conference-presenters/index";

const rootPersistConfig = {
  key: ROOT_DATA_KEY,
  storage: storageSession,
};

const combinedReducers = combineReducers({
  loginModal: loginModalReducer,
  postModal: postModalReducer,
  theme: themeReducer,
  orgId: orgIdReducer,
  userEmail: userEmailReducer,
  dashboardHome: dashboardHomeReducer,
  dashboardHomeBirthday: dashboardHomeBirthdayReducer,
  userProfessionalInformation: userProfessionalInformationReducer,
  dashboardEvents: dashboardEventsReducer,
  navItemData: navItemDataReducer,
  resetCodeData: resetCodeReducer,
  userData: userDataReducer,
  dashboardOrgData: dashboardOrgDataReducer,
  footerData: footerDataReducer,
  organizationPaymentAPIsData: organizationPaymentAPIsDataReducer,
  notificationsData: notificationsDataReducer,
  conferenceHome: conferenceHomeReducer,
  conferencePresentersList: conferencePresenterListReducer,
});

const rootReducer: typeof combinedReducers = (state, action) => {
  if (action.type === "logout-user") {
    storageSession.removeItem(`persist:${ROOT_DATA_KEY}`);
    return combinedReducers(undefined, action);
  }
  return combinedReducers(state, action);
};

const persistedReducers = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store, {}, () => {
  persistor.persist();
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
