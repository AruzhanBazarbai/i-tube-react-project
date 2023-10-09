export class StorageHelper {
  public static setOrUpdateItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public static getItem(key: string): string {
    return localStorage.getItem(key) ?? "";
  }

  public static deleteItem(key: string): void {
    localStorage.removeItem(key);
  }
}
