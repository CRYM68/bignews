(function() {
  var base = "http://localhost:8080/api/v1";
  var BigNew = {
    article_search: base + "/index/search", //文章搜索
    article_type: base + "/index/category", //文章类型
    hotPic: base + "/index/hotpic", //热点图
    article_hot: base + "/index/rank", //文章热门排行
    new_news: base + "/index/latest", //最新资讯
    new_comment: base + "/index/latest_comment", //最新评论
    attention: base + "/index/attention", //焦点关注
    article_particular: base + "/index/article", //文章详细内容
    comment_release: base + "/index/post_comment", //发表评论
    comment_list: base + "/index/get_comment" //评论列表
  };
  window.BigNew = BigNew;
})();
