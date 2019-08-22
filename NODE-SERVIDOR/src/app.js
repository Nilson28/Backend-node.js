import express, {json} from 'express';
import morgan from 'morgan';

//importing routes
import eventosRoutes from './routes/eventos';
import conferencistasRoutes from './routes/conferencistas';
import usuariosRoutes from './routes/usuarios';


//initialization
const app = express();

//middelwares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/eventos', eventosRoutes);
app.use('/api/conferencistas', conferencistasRoutes);
app.use('/api/usuarios', usuariosRoutes);




export default app;