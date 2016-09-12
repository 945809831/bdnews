/**
 * Created by PRO on 2016/6/19.
 */
var mysql = require("mysql");

//链接数据库，设置用户名、密码、主机及要打开的数据库
var dbConnection = function(){
  var conn = mysql.createConnection({
      host:     "127.0.0.1",
      user:     "dbuser",
      password: "123",
      database: "db1"
  });
  return conn;
};
/*
 *  从数据库中取出分类的新闻数据
 */
exports.getByCategory = function(category, callback){
  var conn = dbConnection();
  var items;
  var sql = 'SELECT id, title, newsDate, picture, abstract, label, likes\
          FROM news WHERE category = ? ORDER BY id DESC';
  conn.query(sql, [category], function(err, rows){
    if(err){
      console.log('[SELECT error]', err.message);
    }
    callback(rows);
  });
};
/*
 *  根据Id删除某一条新闻数据
 */
exports.deleteById = function(id){
    var conn = dbConnection();
    var sql = 'DELETE FROM news WHERE id=?';
    conn.query(sq, [id], function(err, rows){
        if(err){
            console.log('[DELETE error]', err.message);
        }
    });
};

/*
 *  根据Id更新某一条新闻数据
 */
 exports.updateById = function(id){

 };

 /*
  *   增加一条新闻数据
  */
exports.addNews = function(resTitle, resNewsDate, resPicture, resAbstract, resCategory, resLabel, resLikes){
    console.log('&&&&: ',resTitle, resNewsDate, resPicture, resAbstract, resCategory, resLabel, resLikes);
    var title    = test(resTitle);
    var newsDate = test(resNewsDate);
    var picture  = test(resPicture);
    var abstract = test(resAbstract);
    var category = test(resCategory);
    var label    = test(resLabel);
    var likes    = test(resLikes);
    var sql = "INSERT INTO news(title, newsDate, picture, abstract, category, label, likes)"
            + "values(?, ?, ?, ?, ?, ?, ?)";
    var conn = dbConnection();
    conn.query(sql, [title,newsDate,picture,abstract,category,label,likes],
       function (err, rows) {
           if(err) throw err;
       });
};

/*
 * 辅助函数：验证从浏览器传出的参数，
 */
function test(str){
    var result;
    if(str !== undefined){
        result = str.trim();  //删除两端的空格
        result = result.replace(/</g, "&lt");//替换字符串中<和>，避免执行<script>脚本
        result = result.replace(/>/g, "&gt");
    }
    return result;
}
