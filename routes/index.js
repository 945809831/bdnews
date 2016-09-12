var express = require('express');
var router = express.Router();
var news = require('../lib/news');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
 *----------新闻管理页面主页-----------
 */
router.get('/news-manage', function(req, res, next){
  news.getByCategory('recomendation', function(rows){
    // console.log('render', rows);
    res.render('news-manager.jade', {list: rows});
    res.end();
  });
});


/*
 *==========增加新闻记录=============
 */
router.get('/news-manage/add', function(req, res, next){
   var title    = req.query.title;
   var newsDate = req.query.newsDate;
   var picture  = req.query.picture;
   var abstract = req.query.abstract;
   var category = req.query.category;
   var label    = req.query.label;
   var likes    = req.query.likes;

   try{
       news.addNews(title, newsDate, picture, abstract, category, label, likes);
       res.end("OK");
   } catch (err) {
       throw(err);
   }
});
/**
 *  根据id删除数据库中相应的新闻
 */
router.get('/news-manage/update', function(req, res, next){
    console.log('/news-manage/update');
});
/**
 *  根据传入的category返回Ajax端新闻数据
 */
router.get('/news-manage/list', function(req, res, next){
    var category = req.query.category;
    news.getByCategory(category, function(rows){
        res.render('list-news.jade', {list: rows});
        res.end();
    });
});
/**
 *  根据id删除数据库中相应的新闻
 */
router.get('/news-manage/del', function(req, res, next){
    console.log('/news-manage/del...');
    var id = req.query.id;
    news.deleteById(id);
});

module.exports = router;
