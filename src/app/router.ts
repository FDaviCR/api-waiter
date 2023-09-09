import { Router } from 'express';


export const router = Router();

// List Categories
router.get('/categories', (req, res) => {
	res.send('OK');
});

// Create Category
router.get('/categories', (req, res) => {
	res.send('OK');
});

// Create Products
router.post('/products', (req, res) => {
	res.send('OK');
});

// List Products by Categories
router.get('/categories/:idCategory/products', (req, res) => {
	res.send('OK');
});

// List Orders
router.get('/orders', (req, res) => {
	res.send('OK');
});

// Create Orders
router.post('/orders', (req, res) => {
	res.send('OK');
});

// Change Order status
router.patch('/orders/:idOrder', (req, res) => {
	res.send('OK');
});

// Delete Order
router.delete('/orders/:idOrder', (req, res) => {
	res.send('OK');
});

