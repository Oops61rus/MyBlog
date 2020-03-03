const express = require('express');   // фреймворк для приложений Node.js
const cors = require('cors');         // для безопасности (разрешать запросы от моего имени, запрещать от других)
const path = require('path');         // утилиты для работы с файлами и путями
const bodyParser = require('body-parser');    // промежуточное ПО для анализа тела Node.js
const authRouter = require('./routes/auth');  // путь к маршрутизатору

const base = process.cwd(); 
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());                // запуск библиотеки CORS
app.use(express.static(path.join(base, '/public')));

app.use('/auth', authRouter);

// app.post('/auth/sign-up', (req, res, next) => { 
//   // console.log(req.body, res, next);
//   console.log(1);
//   console.log(req.body);

//   next();
// },
  
//   (req, res) => {
//     // console.log(req.body);
//     console.log(2);
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});