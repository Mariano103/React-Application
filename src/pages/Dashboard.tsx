// src/pages/Dashboard.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateItem } from '../store/reducer';
import { RootState } from '../store/types'; // Import the RootState type
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.items);

    const handleAddItem = () => {
        dispatch(addItem({ name: 'New Item', value: 500 }));
    };

    const handleRemoveItem = (id: number) => {
        dispatch(removeItem(id));
    };

    const handleUpdateItem = (id: number) => {
        dispatch(updateItem(id, { name: 'Updated Item', value: 150 }));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
            <div className='w-full flex grid-cols-2 grid-rows-2'>
                <div className='w-full'>
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold">Pie Chart</h2>
                        <PieChart width={400} height={400}>
                            <Pie data={items} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
                        </PieChart>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold">Bar Chart</h2>
                        <BarChart width={600} height={300} data={items}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#8884d8" />
                        </BarChart>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex'>
                        <button
                            onClick={handleAddItem}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4"
                        >
                            Add Item
                        </button>
                        {/* Add a Link to AddItem page */}
                        <Link
                            to="/add-item"
                            className="px-4 py-2 bg-green-500 text-white rounded-md mb-4 ml-4"
                        >
                            Go to Add Item
                        </Link>
                    </div>
                    <table className="table-auto w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">Value</th>
                                <th className="py-2 px-4 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id}>
                                    <td className="py-2 px-4 border-b">{item.name}</td>
                                    <td className="py-2 px-4 border-b">{item.value}</td>
                                    <td className="py-2 px-4 border-b">
                                        <Link
                                            to={`/details/${item.id}`}
                                            className="text-blue-500 hover:underline mr-2"
                                        >
                                            View Details
                                        </Link>
                                        <button
                                            onClick={() => handleUpdateItem(item.id)}
                                            className="text-blue-500 hover:underline mr-2"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleRemoveItem(item.id)}
                                            className="text-red-500 hover:underline"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
