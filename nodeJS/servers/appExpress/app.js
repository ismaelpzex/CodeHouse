const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dayjs = require('dayjs');
const fs = require('fs');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const clientsRouter = require('./routes/clients');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//MIDDLEWARES
app.use((req, res, next) => {
  console.log(new Date());
  next();
});

// app.use((req, res, next) => {
//   if (Math.random() > 0.6) res.end('el numero aletatorio es mayor de 0.6')
//   else next();
// });

app.use((req, res, next) => {
  const line = `[${dayjs().format('DD-MM-YYYY HH:mm:ss')} Método: ${req.method}. Url: ${req.url}]\n`
  console.log(line);
  fs.appendFile('./logs/main.log', line, () => {
    next();
  })
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/clientes', clientsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
