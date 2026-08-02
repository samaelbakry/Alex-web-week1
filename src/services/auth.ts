import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export async function loginFn(username: string, password: string) {
  try {
    const data = await axios.post(`${BASE_URL}/auth/login` , {
        username,
        password
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}