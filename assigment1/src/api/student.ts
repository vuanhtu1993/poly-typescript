import instance from ".";
import {AxiosResponse} from 'axios'
 
export const getStudents = function<T>() {
    const url = '/students'
    return instance.get<T>(url)
}
