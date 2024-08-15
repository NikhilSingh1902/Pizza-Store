import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const initialValues = { name: '', email: '', message: '' };
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
    alert('Message sent!');
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="contact-details">
        <p><strong>Name:</strong> Nikhil Kumar Singh</p>
        <p><strong>Email:</strong> Nikhilsingh.email@example.com</p>
        <p><strong>Address:</strong> 123 Pizza Street,kolkata</p>
      </div>
      <h2 className="text-center my-4">Send Us a Message</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className="add-item-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <Field as="textarea" name="message" className="form-control" />
            <ErrorMessage name="message" component="div" className="error-message" />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Send Message</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
