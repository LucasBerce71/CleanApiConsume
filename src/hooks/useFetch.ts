import { useState, useEffect } from 'react';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { api } from '../services/api';

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        api.get(url, options)
            .then((response: AxiosResponse) => {
                setData(response.data);
            })
            .catch((error: Error) => {
                setError(error);
            })
            .finally(() => setIsFetching(false));
    }, []);

    return { data, error, isFetching };
};