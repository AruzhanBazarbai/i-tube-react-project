import { DataResponse } from "../../common";
import { postAsync } from "../functions";

const ROOT = "/auth";

export const login = async (email: string, password: string): Promise<DataResponse<string>> =>
  postAsync(`${ROOT}/login`, JSON.stringify({ email, password }));

export const registration = async (
  // email: string,
  name: string,
  password: string,
): Promise<DataResponse<string>> =>
  postAsync(`${ROOT}/register`, JSON.stringify({ name, password }));
