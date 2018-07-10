/*
* @Author: lenovo
* @Date:   2018-05-18 15:53:12
* @Last Modified by:   lenovo
* @Last Modified time: 2018-05-18 17:54:49
*/

$(document).ready(function(e){
	//添加用户模态框
	$('#add').click(function(e){
		$(".op_content").val("");
		
	})
    $("#save").click(function(e){
        $('#myModal').modal('hide')
         userManagement();
    });
    $("#empty").click(function(e){
        $(".op_content").val("");
    });
    //删除用户
    $("#delete").click(function(e){
        if(confirm('确认删除？')){
         userdelete();
        }
 	});
 	//修改用户模态框
    $("#update_save").click(function(e){
        $('#update_myModal').modal('hide')
         userManagement();
    });
    $("#update_empty").click(function(e){
        $(".update_op_content").val("");
    });
    //删除用户
    $("#update_delete").click(function(e){
        if(confirm('确认删除？')){
         userdelete();
        }
 	});


});

function userManagement(){
  var id = document.getElementById("identity").value;
  var un = document.getElementById("username").value;
  // var regex = /^[^_][A-Za-z]*[a-z0-9_]*$/ ;
  var ret1 = regex.test(id);
  var ret2 = regex.test(un);
  if(un == "" || id == ""){
    alert("数据不能为空！");
    return false;
    }else if(ret1 == false || ret2 == false){
      alert("输入错误！（只能输入数字和字母）");
    }else if(un.length < 6){
      alert("输入错误！（用户名不得小于六位）");
    }else{
      $.ajax({
        url:"/goform/user_manage",
      data:{
          identity:$("#identity").val(),
          username:$("#username").val(),
        },
        type:"POST",
        dataType:"text",
        async: true,
        // contentType:"application/x-www-form-urlencoded; charset=UTF-8"
        success: function(data){    //    alert后台的返回值
               alert("访问成功");
           },
        error: function(){
               alert('访问失败');
           }
      });
      return true;
    }
}



function userdelete(){
    $.ajax({
      cache: true,
      url:"/goform/goahead_dev_delete",
      data:$("#form_list").serialize(),
      type:"POST",
      dataType:"text",
      async: true,
      success: function(data){
        if(data==1 ){
          alert("删除成功！");
          window.location.reload();
        }else if(data == 2){
          alert("请选择要删除的!");
          window.location.reload();
        }else{
          alert("删除失败！");
          window.location.reload();
        }
      }
    });

  };