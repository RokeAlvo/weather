export class LocalStorageService {
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export const localStorageService = new LocalStorageService();
