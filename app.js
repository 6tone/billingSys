const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const engine = require('ejs-locals');
const requestTimeout = function (req, res, next) {
  res.setTimeout(20 * 1000, () => {
    console.error(`Response timeout! method:${req.method}, url:${req.originalUrl}, body:${JSON.stringify(req.body, 0, 2)}, ip:${req.ip}`)
    res.status(500);
    return res.send()
  });
  next();
};
app.engine('ejs', engine);
app.set('views', './views');
app.set('view engine', 'ejs');app.set('case sensitive routing', true);// 路由區分大小寫
app.set('trust proxy', true); // 取得發送端IP的設定
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
app.use(requestTimeout);// 設定超時回應
app.use(morgan('common', { skip: (req, res) => res.statusCode === 204 }));
app.use('/static', express.static(__dirname + '/public'));
app.use((req, res, next) => {
  // 跨網域設定值
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Max-Age', '1800');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Content-Length, Accept,Authorization');
  if (req.method === 'OPTIONS') {
    res.end();
  } else {
    next();
  }
})

app.get('/', function (req, res) {
  res.render('index', {'title': '首頁',});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})