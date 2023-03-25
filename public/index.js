$(".chatName").click(function(){
  var id = $(this).attr("id");
  $(".fa-comment").css("display", "none");
  $("form").css("display", "initial");
  $(".selectedChat").css("display", "initial");
  $("#selectedChatName").text(id);
});
