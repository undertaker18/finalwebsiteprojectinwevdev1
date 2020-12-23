$(document).ready(function () {

    $(".sendbutton").click(function () {
        
        var comment = $("#commentbox").val();
        
        $(".commentscontainer").append('<br><div class="singlecomment">');
        $(".commentscontainer .singlecomment:last").append('<div class="avatar">');
        $(".commentscontainer .singlecomment:last").append('<div class="commentcontent">');
        $(".commentscontainer .singlecomment .commentcontent:last").append('<p class="comment">' + comment);
        
        $("#commentbox").val("");
    });
    
    $(".cardsB").click(function() {
        
    });
    
});











