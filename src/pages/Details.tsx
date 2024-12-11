import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/types';

const Details: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get the id from the URL params
    const item = useSelector((state: RootState) =>
        state.items.find((item) => item.id === Number(id))
    );

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <Link
                to="/"
                className="px-4 py-2 bg-green-500 text-white rounded-md mb-4 ml-4"
            >
                Go to Dashboard
            </Link>
            <h1 className='mt-4'>Item Details</h1>
            <p>Name: {item.name}</p>
            <p>Value: {item.value}</p>
        </div>
    );
};

export default Details;
