var back_pic = [
	"../img/backimg1.png",
	"../img/backimg2.png"
]
$('#back_img1').html('<img class="back_img1" src="'+back_pic[0]+'">');
$(function(){
	let slide_pic =()=>{
	let pic_temp = "";
	pic_temp = back_pic.shift();
	back_pic.push(pic_temp);
	$('#back_img1').html('<img class="back_img1" src="'+back_pic[0]+'">');
	}
	setInterval(slide_pic, 4000);
});


$('.button_box').on("click", function(){
	$('.mid_box1').css('display', 'none');
	$('.mid_box2').css('display', 'none');
	$('.mid_box3').css('display', 'none');
	$('.button_box').removeClass('button_select');
	$($(this).attr('data-target')).fadeIn(200);
	$(this).addClass('button_select');
});
$("#button_box1").click();