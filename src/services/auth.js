import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export async function loginFn(username, password) {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login` , {
        username,
        password
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}