import { LocalStorage } from 'quasar';
import { getStorageKey } from 'src/utils/storageKeys';

export default function guest({ next, store }) {
  const token = LocalStorage.getItem(getStorageKey('apiToken'));
  if (store.getters['auth/isUserAuth']) {
    return next(false);
    /* eslint-disable-next-line */
  } else if (token) {
    return next({
      name: 'login',
    });
  }
  return next();
}
