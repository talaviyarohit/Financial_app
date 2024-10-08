

import React from 'react'
import { useEffect, useState } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAsync, uploadImages } from '../../Services/Actions/addproductAction';
import { useNavigate } from 'react-router';


function AddProduct() {
    const { isSubmit } = useSelector(state => state.admin)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [addProducts, setAddProducts] = useState({
        name: '',
        description: '',
        price: '',
        discount: '',
        shoping: '',
        category: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddProducts({ ...addProducts, [name]: value });
    };

    const handleImages = async (e) => {
        const file = e.target.files[0];

        try {
            const url = await dispatch(uploadImages(file));
            setAddProducts({ ...addProducts, image: url });
        } catch (error) {
            console.error('Error uploading image:', error);
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(addProducts);


        dispatch(addProductAsync(addProducts));
        setAddProducts({
            name: '',
            author: '',
            generation: '',
            date: '',
            image: '',
            description: ''
        });

        console.log("updatedFormData", addProducts);

        setTimeout(() => {
            navigate('/event')
        }, 3000)

    };
    return (

        <div>
            {/* <Admin /> */}
            <main>
                <Container className='m-0'>
                    <h2 className='bg-warning py-3 ps-2'>Add payment</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="productName" className="mb-3">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Amount"
                                name="name"
                                value={addProducts.name}
                                onChange={handleChange}

                            />
                        </Form.Group>
                        <div className='d-flex  gap-5'>
                            <Form.Group controlId="productName" className="mb-3">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="date"

                                    name="author"
                                    value={addProducts.author}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="productName" className="mb-3">
                                <Form.Label>category</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter  categoryn"
                                    name="generation"
                                    value={addProducts.generation}
                                    onChange={handleChange}
                                />
                            </Form.Group>


                        </div>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Payment Method</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Case</option>
                                <option>Credit</option>
                            </Form.Select>
                        </Form.Group>


                        {/* <div className='d-flex  gap-5'>
                            <Form.Group controlId="productPrice" className="mb-3">
                                <Form.Label>Publication Date</Form.Label>
                                <Form.Control
                                    type="date"

                                    name="date"
                                    value={addProducts.date}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>
                        <Form.Group controlId="productImage" className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="file"
                                name="image"
                                onChange={handleImages}
                            />
                        </Form.Group> */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea"
                                type='text'
                                name='description'
                                onChange={handleChange}
                                value={addProducts.description}
                                rows={3} />
                        </Form.Group>

                        <br />

                        <Button variant="dark" className='mt-2 btn-color' type="submit">
                            Add Payment
                        </Button>
                    </Form>
                </Container>
            </main>
        </div>
    )
}
export default AddProduct


