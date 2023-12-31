import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import apiRouter from './routes/apiRouter';
import resLocals from './middlewares/resLocals';
import apiAuthRouter from './routes/apiAuthRouter';
import authRouter from './routes/authRouter';
import renderRouter from './routes/renderRouter';
// import { apiProtectMiddleWare, signInUserMiddleWare } from './middlewares/authMiddlewares';

require('dotenv').config();

const SessionFileStore = sessionFileStore(session);

const PORT = 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    store: new SessionFileStore({}),
    secret: 'qwe',
    name: 'test',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    },
  }),
);

// app.use((req, res, next) => {
//   res.locals.path = req.originalUrl;
//   next();
// });

// app.use((req, res, next) => {
//   res.locals.user = req.session.user;
//   next();
// });
app.use(resLocals);

app.use('/', indexRouter);
app.use('/', renderRouter);
app.use('/api', apiRouter);
app.use('/api/auth', apiAuthRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
