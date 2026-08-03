import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export async function getProducts() {
  try {
    const data = await axios(`${BASE_URL}/products`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getProductById(id) {
  try {
    const data = await axios(`${BASE_URL}/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function searchForProduct(query) {
  try {
    const data = await axios(`${BASE_URL}/products/search?q=${query}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}