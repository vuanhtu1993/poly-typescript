import instance from ".";
import { IProduct } from "../models";

export const getAll = () => {
    const uri = "/products"
    return instance.get(uri)
}