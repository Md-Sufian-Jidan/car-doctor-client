import axios from "axios";
import { useEffect } from "react";
import UseAuth from '../Hooks/UseAuth'

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { logOut } = UseAuth();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res
        }, err => {
            console.log('error tracked in the interceptors', err.response);
            if (err.response.status == 401 || err.response.status == 403) {
                logOut()
                    .then()
                    .catch(error => console.log(error))
            }
        })
    }, [logOut])

    return axiosSecure;
};

export default useAxiosSecure;