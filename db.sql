-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-06-12 17:26:48
-- 服务器版本： 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db1`
--
CREATE DATABASE IF NOT EXISTS db1;
-- --------------------------------------------------------
USE db1;
--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `newsDate` datetime DEFAULT NULL,
  `picture` varchar(200) DEFAULT NULL,
  `abstract` varchar(100) DEFAULT NULL,
  `category` varchar(20) NOT NULL,
  `label` varchar(20) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `title`, `newsDate`, `picture`, `abstract`, `category`, `label`, `likes`) VALUES
(19, '习近平讲给青少年的五堂公开课', '2016-06-01 13:10:22', 'images/recom/xidada.jpg', '六一国际儿童节到来之际，习近平给', 'recomendation', '置顶', 0),
(20, '详解华为mate到底值不值得买', '2016-06-01 15:06:20', 'images/recom/4.png;images/recom/4.png;images/recom/4.png;', '', 'recomendation', '置顶', 0),
(21, 'iOS10挑大梁 苹果WWDC将无硬件新品发布', '2016-06-01 15:06:06', 'images/recom/7.jgp;images/recom/8.jpg;images/recom/9.jpg;', '', 'recomendation', '置顶', 0),
(22, '《魔兽》真实道具到底怎么样，让橘子君来告诉你', '2016-06-01 17:21:46', 'images/recom/10.jpg;images/recom/11.jpg;images/recom/12.jpg', '', 'recomendation', '猜你喜欢', 0),
(23, '起底高考舞弊：间谍器材被运用', '2016-06-01 19:21:46', 'images/recom/13.jpg', '51份提到利用作弊器舞弊，占到了总数的六', 'recomendation', '新浪新闻', 0),
(24, '谁是员工的领头羊', '2016-06-01 23:21:46', 'images/integrate/1.jpg;images/integrate/1.jpg;images/integrate/2.jpg', '', 'integrate', '置顶', 0),
(25, '不了解这些干货，刷《X战警》绝对懵逼', '2016-06-01 23:24:46', 'images/integrate/3.jpg;images/integrate/4.jpg;images/integrate/5.jpg', '', 'integrate', '', 0),
(26, '想一下你真的成功遇见未来了吗？', '2016-06-02 02:24:46', 'images/integrate/6.jpg;images/integrate/7.jpg;images/integrate/8.jpg', '', 'integrate', '', 0),
(27, '柳岩们直播卖货风靡，电商直播下一个机会已无悬念', '2016-06-02 02:13:18', 'images/integrate/9.jpg;images/integrate/10.jpg;images/integrate/11.jpg', '', 'integrate', '', 0),
(28, 'AR眼睛来了，据说这家公司李嘉诚和马化腾都投', '2016-06-02 02:25:04', 'images/integrate/12.jpg;images/integrate/13.jpg;images/integrate/14.jpg', '', 'integrate', '', 0),
(29, '北京2016个人养老保险费用上涨', '2016-06-02 04:09:04', 'images/local/timg.jpg', '', 'integrate', '', 0),
(30, '媒体解析人民币背面风景，北京西站曾是备选方案', '2016-06-02 04:09:04', 'images/local/timg2.jpg', '', 'integrate', '', 0),
(31, '今日头条新闻，北京多名小学生流鼻血', '2016-06-02 04:09:04', 'images/local/timg3.jpg', '', 'integrate', '', 0),
(34, '北京市小学生主题演讲抒发美丽北京梦', '2016-06-02 07:15:04', '', '从多个角度诠释青少年对生态中国、美丽北京的理解', 'local', '', 0),
(35, '京郊房山调研记：青山绿水如何变金山银山', '2016-06-02 08:25:04', '', '房山城市化率只有70%，需要就业的人口多，低端产业关停、转移后，当地居民收入实实在在的收到影响', 'local', '', 0),
(36, '交管部门提醒：驾车送考生须遵守尾号限行', '2016-06-02 08:25:04', '', '驾车接送考生的家长要严格遵守本市车辆尾号限行规定，入自家车辆遇尾号限行，提前与亲友调换车辆或选...', 'local', '', 0),
(37, '租房那么贵，美国人为何不买房', '2016-06-02 08:34:16', 'images/local/8.jpg', '靑浦|享6万抵10万优惠，海口|8500元/m', 'local', '', 0),
(38, '8岁男孩过马路被车撞飞瞬间', '2016-06-02 08:50:16', 'images/pictures/1.jpg', '', 'picture', '', 252),
(39, '老汉将积蓄埋地下10年 挖出全变渣', '2016-06-02 09:02:16', 'images/pictures/2.jpg', '', 'picture', '', 2632),
(40, '拳王阿里辞世： 击倒种族歧视的一拳', '2016-06-02 09:13:16', 'images/pictures/3.jpg', '', 'picture', '', 4596),
(41, '拳王阿里传奇生涯回顾', '2016-06-02 09:13:16', 'images/pictures/4.jpg', '', 'picture', '', 455),
(42, '大胡子梅西训练与时间赛跑', '2016-06-02 09:22:16', 'images/pictures/5.jpg', '', 'picture', '', 27),
(43, '董璇产女高云翔当爸爸', '2016-06-02 10:42:16', 'images/amusement/1.jpg', '', 'amusement', '', 0),
(44, '李亚鹏乘机险迟到 礼貌道歉', '2016-06-02 10:50:57', 'images/amusement/2.jpg', '', 'amusement', '', 0),
(48, '阿里生平将拍传记 李安执导', '2016-06-02 10:55:57', 'images/amusement/3.jpg', '1996年美国 亚特兰大奥运会，他被选为点', 'amusement', '网易要闻', 0),
(49, 'BBC记者称飞跃美济礁受威胁 中方： 那是你的角度', '2016-06-02 11:20:57', 'images/amusement/4.jpg', '', 'amusement', '网易要闻', 0),
(50, '一周台湾华语： 周杰伦新作斧头 艾宜良优品上市', '2016-06-02 11:16:32', 'images/amusement/5.jpg', '', 'amusement', '', 0),
(51, '王思聪感叹颜值不如吴亦凡 隔空让女主播翻下床', '2016-06-02 11:18:32', 'images/amusement/6.jpg', '', 'amusement', '', 0),
(52, '深夜俱乐部|你喜欢那种类型的电影？', '2016-06-02 11:20:32', 'images/amusement/7.jpg', '', 'amusement', '', 0),
(53, '夜聊｜从喝口水都被黑到连黑粉都要夸演技，赵丽颖的十年逆袭赢得太漂亮', '2016-06-02 11:20:32', '', '赵丽颖扎着萌萌的双角头出席了《特工皇妃楚乔传》的开机发布会。', 'amusement', '', 0),
(54, '男子疑因心情不好淹死自家狗', '2016-06-03 07:03:32', 'images/society/1.jpg', '赵丽颖扎着萌萌的双角头出席了《特工皇妃楚乔传》的开机发布会。', 'society', '', 0),
(55, '8岁男孩被汽车撞飞瞬间', '2016-06-03 07:03:32', 'images/society/2.jpg', '', 'society', '', 0),
(56, '考生高考前撕书减压', '2016-06-03 07:03:32', 'images/society/3.jpg', '', 'society', '', 0),
(60, '青岛首届稻草人创意文化节探访“童话森林”', '2016-06-03 09:30:35', 'images/society/7.jpg;images/society/8.jpg;images/society/9.jpg', '', 'society', '置顶', 0),
(61, '丰收季节遇到连雨天 河南与天争及时抢收小麦', '2016-06-03 09:12:55', 'images/society/10.jpg;images/society/11.jpg;images/society/12.jpg', '', 'society', '', 0),
(62, '新疆专家成功选育抗寒月季 助力美丽中国建设', '2016-06-03 09:12:55', 'images/society/13.jpg', '', 'society', '', 0),
(63, '北京高考首次应用特警押运试卷，部署8名特警全程跟车', '2016-06-05 16:30:28', 'images/local/1.jpg', '', 'local', '', 0),
(64, '20省市晒工资单，网友我有拖全国人民后腿了', '2016-06-05 16:30:28', 'images/local/2.jpg', '', 'local', '', 0),
(65, '租房那么贵，美国人为何不买房', '2016-06-05 16:30:28', 'images/local/8.jpg', '靑浦|享6万抵10万优惠，海口|8500元/m', 'local', '', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
