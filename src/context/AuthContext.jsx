import { createContext } from "react";

export const AuthContextWrapper = createContext({ token:undefined , login: ()=>{} , logout:()=>{} , user:undefined});
export const ProductsContextWrapper = createContext()