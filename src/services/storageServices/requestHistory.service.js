import { localStorageService } from "@/services/localStorage.service";

/**
 *
 */
class RequestHistoryService {
  KEY = "history";

  /**
   * @param storage {LocalStorageService}
   * @param maxItems {number}
   */
  constructor(storage, maxItems = 10) {
    this.maxItems = maxItems;
    this.storage = storage;
    const storedHistory = this.storage.get(this.KEY);
    this.history = Array.isArray(storedHistory) ? storedHistory : [];
  }

  add(item) {
    this._delete(item);
    const newLength = this.history.unshift(item);
    if (newLength > this.maxItems) this.history.pop();
    this._save();
  }

  _save() {
    this.storage.set(this.KEY, this.history);
  }

  get() {
    return this.history;
  }

  _delete(value) {
    const position = this.history.indexOf(value);
    if (position !== -1) {
      this.history.splice(position, 1);
    }
  }
}

export const requestHistoryService = new RequestHistoryService(
  localStorageService
);
