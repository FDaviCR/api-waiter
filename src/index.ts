import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose.connect('mongodb://127.0.0.1:27017')
	.then(() => {
		console.log('Conectado ao MongoDB');
		const app = express();

		app.use(express.json());
		app.use(router);

		app.listen(7777, ()=>{
			console.log('🖳 - Servidor está rodando na porta: 7777');
		});
	})
	.catch((err) => {
		console.log('Erro ao conectar no MongoDB');
		console.log(err);
	});


