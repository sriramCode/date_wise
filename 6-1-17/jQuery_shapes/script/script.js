var id=1;
$(document).ready(function(){
$(".circleDetails").hide();
$(".rectangleDetails").hide();
$(".squareDetails").hide();
console.log("hided");
});
function select(value) {
    console.log(value);
    if( value == "circle" )
        {
            $(".circleDetails").show();
            $(".rectangleDetails").hide();
            $(".squareDetails").hide(); 
        }
    else if( value == "rectangle" ){
        $(".rectangleDetails").show();
        $(".circleDetails").hide();
        $(".squareDetails").hide();
    }
    else if( value == "square" ){
        $(".squareDetails").show();
        $(".circleDetails").hide();
        $(".rectangleDetails").hide();
    }
    else{
        $(".circleDetails").hide();
        $(".rectangleDetails").hide();
        $(".squareDetails").hide();
    }            
 }
function createCircle(radius){
    $("ul").append('<div id='+id+'></div><br>');
   var myShape = _SSS('circle',radius,radius,'#999');
   myShape.HTMLShape($('#'+id));
    id++;    
    document.getElementById('radius').value="";
}
function createRectangle(length,breadth){
   $("ul").append('<div id='+id+'></div><br>');
   var myShape = _SSS('square',length,breadth,'#999');
   myShape.HTMLShape($('#'+id));
    id++; 
    document.getElementById('length').value="";
    document.getElementById('breadth').value="";
}
function createSquare(side){
    $("ul").append('<div id='+id+'></div><br>');
   var myShape = _SSS('square',side,side,'#999');
   myShape.HTMLShape($('#'+id));
    id++; 
    document.getElementById('side').value="";
}