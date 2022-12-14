
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';


import productService from './src/daos/index.js';
productService();

