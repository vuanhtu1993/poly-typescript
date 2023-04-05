import instance from ".";
import { IUser, SignupForm } from "../models";

export const signup = (user: SignupForm) => {
    const uri = '/signup'
    return instance.post(uri, user)
}