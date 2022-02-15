import React, { useCallback } from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

interface ICardProps {
    title: string;
    description: string;
}

export const Card: React.FC<ICardProps> = ({ title, description }) => {

    return (
        <div className='flex'>
            <Link 
                to={`repository/${title}`}
                style={{ textDecoration: 'none' }}
            >
                <div className="container">
                    <h1 className='title'>{title}</h1>
                    <h3 className='description'>{description}</h3>
                </div>
            </Link>
        </div>
    );
};