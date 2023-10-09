import { StorageHelper } from "./storage";

const TOKEN_STORAGE_KEY_NAME = "token_api";

export class TokenStorageHelper {
  public static getToken(): string {
    return StorageHelper.getItem(TOKEN_STORAGE_KEY_NAME);
  }

  public static setOrUpdateToken(value: string): void {
    StorageHelper.setOrUpdateItem(TOKEN_STORAGE_KEY_NAME, value);
  }

  public static deleteToken(): void {
    StorageHelper.deleteItem(TOKEN_STORAGE_KEY_NAME);
  }
}
