// src/pages/AddItem.tsx
import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/reducer';
import { useNavigate } from 'react-router-dom';

const AddItem: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        value: Yup.number().required('Value is required').positive('Value must be positive'),
    });

    return (
        <div className="max-w-lg mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Add New Item</h1>
            <Formik
                initialValues={{ name: '', value: 0 }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    dispatch(addItem(values));
                    navigate('/');
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="mb-4">
                            <label className="block text-lg font-medium">Name</label>
                            <Field
                                type="text"
                                name="name"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            />
                            {errors.name && touched.name && <div className="text-red-500">{errors.name}</div>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-medium">Value</label>
                            <Field
                                type="number"
                                name="value"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            />
                            {errors.value && touched.value && <div className="text-red-500">{errors.value}</div>}
                        </div>
                        <button
                            type="submit"
                            className="w-full p-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddItem;
