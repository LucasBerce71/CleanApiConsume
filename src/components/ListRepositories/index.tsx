import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Card } from '../Card';

interface IRepository {
    full_name: string;
    description: string;
};

export const ListRepositories: React.FC = () => {
    const [endpoint, setEndpoint] = useState<string>('users/LucasBerce71/repos');

    const { 
        data, 
        error, 
        isFetching 
    } = useFetch<Array<IRepository>>(endpoint);

    return (
        <ul>
            { isFetching && <p>Aguarde...</p> }

            {data?.map((repository: IRepository) => (
                <Card 
                    title={repository.full_name}
                    description={repository.description}
                />
            ))}
        </ul>
    );
};