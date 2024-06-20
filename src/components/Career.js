import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Career = ({ show, handleClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5000/api/career`, formData);
            if (response.status === 201) {
                alert('Application submitted successfully');
                handleClose();
                setFormData({ name: '', email: '', phoneNumber: '' });
            } else {
                throw new Error('Failed to submit application');
            }
        } catch (error) {
            console.error('Error submitting application:', error.message);
            alert('Failed to submit application');
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Apply for a Career</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={formData.name} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={formData.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="phoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" value={formData.phoneNumber} onChange={handleChange} required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit Application
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default Career;
