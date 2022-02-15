import React, { useEffect } from 'react';
import { Card } from '../components/Card';

import { useParams } from 'react-router-dom';

interface IRouteParams {
    id: string;
    desc: string;
}

export const Repository: React.FC = () => {
    const {  
        id: currentRepository,
        desc: description
    } = useParams<IRouteParams>();

    return (
        <Card 
            title={currentRepository}
            description={description}
        />
    );
}; 