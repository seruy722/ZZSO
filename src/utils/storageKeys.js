import _ from 'lodash';

const keys = {
  beforeRegister: 'beforeRegisterData',
  apiToken: 'authToken',
  userModel: 'userModel',
};


export const getStorageKey = key => _.get(keys, key);
