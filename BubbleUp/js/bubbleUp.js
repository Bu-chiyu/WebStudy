var $bubbles=$(".bubbles");
var bubbleWidth=$bubbles.width();
var num=$bubbles.attr("num");
var duration=$bubbles.attr("duration");
bubbleUp();
setInterval(bubbleDelete, duration * 1000);
setInterval(bubbleUp, duration * 1000);

function bubbleUp(){
	for(i=0;i<num;i++){
		var $bubble=$('<div></div>');
		var offset=bubbleWidth*Math.random()+'px';
		var enlarge=5*Math.random();
		var time=(duration-1) * Math.random() + 1+'s';
		$bubble.attr('class','bubble');
		$bubble.css("animation","up "+time+" ease-in-out");
		$bubble.css("transform","translate("+offset+",0) scale("+enlarge+")");
		$bubbles.append($bubble);
	}	
};
function bubbleDelete(){
	$bubbles.empty();
}