menu_list_array = [
    "Veggie Pizza (has veggies and no meat)",
    "Non-veg Pizza (includes meet with veggies)",
    "Cheese Pizza (has cheese and sause on the bread)"
]

document.getElementById("output").innerHTML = htmldata;

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").nodeValue;
    menu_list_array.sort();
    htmldata=""
}