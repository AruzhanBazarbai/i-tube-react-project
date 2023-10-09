import { DataResponse } from "../../common";
import { postAsync } from "../functions";

export const login = async (email: string, password: string): Promise<DataResponse<string>> =>
  postAsync("/login", JSON.stringify({ email, password }));
export const register = async (
  email: string,
  name: string,
  password: string,
): Promise<DataResponse<string>> =>
  postAsync("/register", JSON.stringify({ email, name, password }));
