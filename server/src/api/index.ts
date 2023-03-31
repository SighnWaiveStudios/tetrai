import path from 'node:path';
import express from 'express';
import routes from './routes';

const app = express();
app.use(async (req, res, next) => {
  await next();
  const now = new Date();
  console.log(now, res.statusCode, req.method, req.path, req.ip);
})
app.use(express.static('public'));
app.use('/api', routes);
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname+'../../../public/index.html'));
});

export default app;