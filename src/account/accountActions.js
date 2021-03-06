import {
  ACCOUNT_SWITCH,
  REALM_ADD,
  SET_AUTH_TYPE,
  ACCOUNT_REMOVE,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../constants';

export const switchAccount = (index: number) => ({
  type: ACCOUNT_SWITCH,
  index,
});

export const realmAdd = (realm: string) => ({
  type: REALM_ADD,
  realm,
});

export const setAuthType = (authType: string) => ({
  type: SET_AUTH_TYPE,
  authType,
});


export const removeAccount = (index: number) => ({
  type: ACCOUNT_REMOVE,
  index,
});

export const loginSuccess = (realm, email, apiKey) => ({
  type: LOGIN_SUCCESS,
  realm,
  email,
  apiKey,
});

export const logout = () => ({
  type: LOGOUT,
});
