import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response){
	try {
		const { name, description, imagePath, price, ingredients, category } = req.body;

		const product = await Product.create({ name, description, imagePath, price, ingredients, category });

		res.status(201).json(product);
	} catch (error) {
		res.status(500).json({
			error: error
		});
	}
}
