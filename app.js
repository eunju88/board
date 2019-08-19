// npm install express
const express = require('express');

const app = express();

// express body-parser
app.use(express.urlencoded({extended : false}));

app.use(express.static('resource'));

출처: https://mainia.tistory.com/5707 [녹두장군 - 상상을 현실로]

// 템플릿 엔진 선언
// npm install ejs
app.set('view engine', 'ejs');
app.set('views', './views');

// '/' 경로에 Router
app.get('/', function(req, res){
    res.render('index');
})

app.get('/login', function(req, res){
    res.render('member/login');
})

app.get('/signup', function(req, res){
    res.render('member/signup');
})

app.get('/view', function(req, res){
    res.render('board/view');
})

app.listen(3001, () => {
    console.log('Server running at localhost:3001');
})