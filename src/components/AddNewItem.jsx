import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddNewItem = () => {
  const initialValues = {
    name: '',
    price: '',
    description: '',
    image: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    price: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
    description: Yup.string().required('Required'),
    image: Yup.string().required('Required')
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
    // Handle form submission with axios
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">Add New Pizza</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className="mt-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <Field type="number" id="price" name="price" className="form-control" />
            <ErrorMessage name="price" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <Field as="textarea" id="description" name="description" className="form-control" />
            <ErrorMessage name="description" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <Field type="text" id="image" name="image" className="form-control" />
            <ErrorMessage name="image" component="div" className="text-danger" />
          </div>

          <button type="submit" className="btn btn-primary">Add Pizza</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNewItem;
