import { usersInfo } from "../../assets/mock";

// const ROOT = "/auth";

const allUsers = usersInfo;

export const login = (email: string, password: string) => {
  const isFind = allUsers.find((el) => el.email === email && el.password === password);
  return isFind;
};

export const registration = (email: string, name: string, password: string) => {
  const isFind = allUsers.find((el) => el.email === email && el.password === password);
  if (!isFind) {
    allUsers.push({
      id: (allUsers.length + 1).toString(),
      profileSrc: require("../../assets/images/icons/profile.png"),
      subscriptions: [],
      email: "test5@mail.ru",
      name: "test5",
      password: "123456789",
    });
    return allUsers[allUsers.length - 1];
  }
  return isFind;
};

// export const login = async (email: string, password: string): Promise<DataResponse<string>> =>
//   postAsync(`${ROOT}/login`, JSON.stringify({ email, password }));

// export const registration = async (
//   email: string,
//   name: string,
//   password: string,
// ): Promise<DataResponse<string>> =>
//   postAsync(`${ROOT}/register`, JSON.stringify({ name, password }));
