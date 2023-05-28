import path from 'node:path';
import express from 'express';
import session from 'express-session';
import routes from './routes';
import User from '../models/User';

declare module 'express-session' {
  interface SessionData {
    user: User;
  }
}

const app = express();
const sessionConfig = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
};
if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sessionConfig.cookie.secure = true; // serve secure cookies
}
app.use(session(sessionConfig));

app.use(async (req, res, next) => {
  await next();
  const now = new Date();
  console.log(now, res.statusCode, req.method, req.path, req.ip);
})
app.use(express.static('public'))
app.use('/api', routes);
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname+'../../../public/index.html'));
});

export default app;