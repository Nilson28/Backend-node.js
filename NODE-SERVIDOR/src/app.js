import express, {json} from 'express';
import morgan from 'morgan';

//importing routes
import eventosRoutes from './routes/eventos';
import conferencistasRoutes from './routes/conferencistas';
import usuariosRoutes from './routes/usuarios';
import conferenciasRoutes from './routes/conferencias';
import espaciosRoutes from './routes/espacios';
import encuestasRoutes from './routes/encuestas';
import inscripcionesRoutes from './routes/inscripciones';


//initialization
var cors = require('cors');
const app = express();

//middelwares
app.use(cors());
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/eventos', eventosRoutes);
app.use('/api/conferencistas', conferencistasRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/conferencias', conferenciasRoutes);
app.use('/api/espacios', espaciosRoutes);
app.use('/api/encuestas', encuestasRoutes);
app.use('/api/inscripciones', inscripcionesRoutes);



export default app;