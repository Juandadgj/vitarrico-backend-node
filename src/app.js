import express from 'express';
import indexRoutes from './routes/index.routes';
import configEnv from './config/env/envModule';
import connectDB from './config/database/database';

configEnv();

const PORT = process.env.PORT;
const app = express();

connectDB();

app.use(indexRoutes)

app.listen(PORT, () => console.log(`Server on port: ${PORT}`));
