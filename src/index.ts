import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost:27017')
	.then(() => console.log('Conectado ao MongoDB'))
	.catch(() => console.log('Erro ao conectar no MongoDB'));

app.listen(7777, ()=>{
	console.log('🖳 - Servidor está rodando na porta: 7777');
});
