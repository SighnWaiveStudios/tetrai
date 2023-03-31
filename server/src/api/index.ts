import path from 'node:path';
import express from 'express';
import routes from './routes';

const app = express();
app.use(express.static('public'));
app.use('/api', routes);
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname+'../../../public/index.html'));
});

export default app;