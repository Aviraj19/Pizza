menu_array=["Cheese pizza","Vegetable pizza","Mushroom pizza","Onion pizza","Golden pizza"];
function getmenu() {
    htmldata="";
    menu_array.sort()
    for (index = 0; index < menu_array.length; index++) {
        htmldata=htmldata+"<h3>"+menu_array[index]+"</h3>";
    }
    document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item() {
var item =document.getElementById("add_item").value ;
menu_array.push(item)
htmldata="<section class='cards'>";
    menu_array.sort()
    for (index = 0; index < menu_array.length; index++) {
        htmldata=htmldata+"<div class='card'><img src='images/pizzaImg.png'>"+menu_array[index]+"</div>";
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}