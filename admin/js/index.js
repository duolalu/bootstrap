/*
* @Author: lenovo
* @Date:   2018-04-27 20:41:59
* @Last Modified by:   lenovo
* @Last Modified time: 2018-05-18 21:46:34
*/

//侧边导航栏的展开收缩
 $(document).ready(function(e){
 $('.fa-angle-double-right').click(function () {
            var asideleft = $(".sidebar").offset().left;
            if (asideleft == 0) {
                $(".sidebar").animate({ left: -220 });
                $(".content").animate({ marginLeft: 0 });
            }
            else {
                $(".sidebar").animate({ left: 0 });
                $(".content").animate({ marginLeft: 220 });
            }
        })
 //获取table下面的偶数行并设置背景颜色
  $("table tr:even").css("background-color","#e0e0e0");
    //获取table下面的奇数行并设置背景颜色
 $("table tr:odd").css("background-color","");
})