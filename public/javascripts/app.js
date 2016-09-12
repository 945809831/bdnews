/**
 * Created by PRO on 2016/6/1.
 */
$(document).ready(function() {

    //单击“收起”隐藏的菜单
    $(".less").click(function() {
        $(".can-hidden").hide();
        $("#more").html("更多<div class=\"up-triangle\"></div>");
    });
    //单击"更多"隐藏导航菜单
    $("#more").click(function() {
        $(".can-hidden").show();
        $("#more").html("互联网");
    });
	//加载推荐页面的动态内容
	$.get("news/category?category=recomendation",function(data){
		createContent($("#recomendation"), data);
	});

    //存储点击导航栏要显示的container
    var content = ["recomendation", "integrate", "local", "picture", "amusement", "society"];
    //当点击导航栏的第一排时向服务器发送ajax请求
    $(".first-line").children().each(function(index) {
        $(this).click(function() {
            $.get("news/category?category=" + (content[index]), function(data, status) {
                var container = $("#" + content[index]);
                container.show()
                    .siblings().hide();
                createContent(container, data);
            });
        });
    });
    // 将从服务器上获取的新闻数据变成html页面格式
    // 并加入container中显示
    function createContent(container, data) {
        // 获得服务器拉取的新闻信息
        var items = data.data;
        // 如果是图片container，则动态创建图片html结构
        if (items[0].category == "picture") {
        	container.empty();
            for (var i = 0; i < items.length; i++) {
        		// 对每一条新闻创建一个HTML结构，并加入到container中
                // var row = createLargeP1(items[i]);
                container.append( createLargeP1(items[i]) );
            }
        } 
        // 如果是其他类别的container，则动态创建相应的HTML结构
        else { 
        	var numberOfPictues = 0;    // 存储新闻中图片的数目
        	for( var j = 0; j < items.length; j++){
        		//获取新闻包含的图片数目
        		if(items[j].picture == ""){
        			numberOfPictues = 0;
        		} else {
        			var arr = items[j].picture.split(";");
        			numberOfPictues = arr.length;
        		}
        		switch(numberOfPictues){
        			case 0:
        				container.append( createP0(items[j]) );
        				break;
        			case 1:
        				container.append( createP1(items[j]) );
        				break;
        			case 3:
        				container.append( createP3(items[j]) );
        				break;
        		}
        	}
        }
    }
    // 创建带1张大图片的新闻条目，放到container下面
    function createLargeP1(news) {
        //创建标题和点赞节点
        var title = $("<div></div>").text(news.title).addClass("picture-title");
        var like = $("<div></div>").text(news.likes).addClass("like");
        // 创建pictureInfo节点，并将该2个一创建节点加入
        var pictureInfo = $("<div></div>");
        pictureInfo.append(title).append(like);

        var picture = $("<img>").attr("src", news.picture);
        var col = $("<div></div>").addClass("col-xs-12");
        col.append(picture).append(pictureInfo);

        var row = $("<div></div>").addClass("row p1-big");
        row.append(col);

        return row;
    }
    // 带3张图片的新闻条目
    function createP3(news){
    	var pictures = news.picture.split(";");
    	// 创建标题节点， 加入到网格中
    	var title = $("<p></p>").text(news.title).addClass("title");
    	var col = $("<div></div>").addClass("col-xs-12");
    	col.append(title);

    	var img2 = $("<img>").attr("src", pictures[1]);
    	var col2 = $("<div></div>").addClass("col-xs-4");
    	col2.append(img2);

    	var img1 = $("<img>").attr("src", pictures[0]);
    	var col1 = $("<div></div>").addClass("col-xs-4");
    	col1.append(img1);

    	var img3 = $("<img>").attr("src", pictures[2]);
    	var col3 = $("<div></div>").addClass("col-xs-4");
    	col3.append(img3);
    	//时间和分类信息
    	var time = $("<span></span>").text("2小时").addClass("time");
    	var label = $("<span></span>").text(news.label).addClass("label label-danger news-category");
    	var p = $("<p></p>").addClass("news-info");
    	p.append(time).append(label);
    	var  col4 = $("<div></div>").addClass("col-xs-12");
    	col4.append(p);

    	var row = $("<div></div>").addClass("row p3");
    	row.append(col).append(col1).append(col2).append(col3).append(col4);

    	return row;
    }

    // 带一张图片的新闻条目
    function createP1(news){
    	var img = $("<img>").attr("src", news.picture);
    	var col1 = $("<div></div>").addClass("col-xs-4");
    	col1.append(img);

    	// 标题
    	var title = $("<p></p>").text(news.title).addClass("title");
    	// 摘要
    	var abstract = $("<p></p>").text(news.abstract).addClass("abstract");
    	//时间和分类信息
    	var time = $("<span></span>").text("2小时").addClass("time");
    	var label = $("<span></span>").text(news.label).addClass("label label-danger news-category");
    	var info = $("<div></div>").addClass("news-info");
    	info.append(time).append(label);
    	
    	var col2 = $("<div></div>").addClass("col-xs-8");
    	col2.append(title).append(abstract).append(info);

    	var row = $("<div></div>").addClass("row  p1");
    	row.append(col1).append(col2);

    	return row;
    }

    function createP0(news){
    	// 标题和摘要
    	var title = $("<p></p>").text(news.title).addClass("title");
    	var abstract = $("<p></p>").text(news.abstract).addClass("abstract");
    	// 新闻时间和分类信息
    	var time = $("<span></span>").text("2小时").addClass("time");
    	var label = $("<span></span>").text(news.label).addClass("label label-danger news-category");
    	var info = $("<div></div>").addClass("news-info");
    	info.append(time).append(label);
    	// 包含的列栅格
    	var col = $("<div></div>").addClass("col-xs-12");
    	col.append(title).append(abstract).append(info);
    	// 包含的行栅格
    	var row = $("<div></div>").addClass("row p0");
    	row.append(col);
    	return row;
    }
    //上下滚动条的滚动效果
    setInterval(hotwordSlideUp, 2000);

    function hotwordSlideUp() {
        var hotwords = $(".hotword-content");
        var topPos = parseInt(hotwords.css("top"));
        if (topPos <= -80) {
            hotwords.css("top", "0px");
        }
        hotwords.animate({ top: "-=20px" });
    }

});
