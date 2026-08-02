import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export async function getAllCategories() {
  try {
    const data = await axios(`${BASE_URL}/products/categories` );
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getCategoryBySlug(slug) {
  try {
    const data = await axios(`${BASE_URL}/products/category/${slug}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}