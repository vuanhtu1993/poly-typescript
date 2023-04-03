import instance from ".";
import { IProduct } from "../models";

export const getAll = () => {
    const uri = "/products"
    return instance.get(uri)
}

export const getById = (id: number) => {
    const uri = "/products/" + id
    return instance.get(uri)
}