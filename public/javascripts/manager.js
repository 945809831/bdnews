$(document).ready(function() {
/*
 *点击增加新闻按钮弹出模态对话框
 */
  $("#add-item").click(function(){
    var dialog = $("#news-edit-dialog");
    var title  = $("#dialog-title");
    var insertNewsBtn = $('#m-insert-news-btn');
    dialog.modal("show");
    title.html("增加新闻条目");
    insertNewsBtn.html("增加新闻");
  });
  /**
   *  单击对话框的增加新闻提交新闻内容，阻止默认的跳转
   */
  $('#news-eidt-form').submit(function(event){
      var newsInfo = $(this).serializeArray();
      event.preventDefault();
    //   var category = $("#news-category");
    //   updateNewsTable(category);
    $.get("news/add", newsInfo,
              function(data){
                      console.log(data);
                      if(data == "OK"){
                          var category = $('#news-category');
                          updateNewsTable(category);
                  }
              });
  });
  /**
   *   根据新闻标题的类别刷新新闻列表
   */
  var updateNewsTable = function(category){
      $('#m-category').value(category);
      var tableContent = $("news-list");
      $.get('news-manage/list?category=' + category, function(data, status){
          $('#news-list').html(data);
      });
  };

  // 点击删除链接，删除当前的新闻条目
  $('delete-news').click(function(){
      var id = $(this).attr('data-id');
      $.get('news-manage/del?id=' + id, function(data, status){
          var category = $("#news-category");
          updateNewsTable(category);
      });
  });

  /**
   *  左侧新闻列表点击时切换右侧显示内容
   */
   $('#news-category-list ul li a').click(function(){
       console.log('news category clicked...');
       var category = $(this).attr('data-category');
       // 从数据库中获取数据刷新新闻表格
       updateNewsTable(category);
       // 重新设置类别的标题
       $('#news-category').html(category);
   });
});
