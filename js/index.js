
const menuList = document.getElementById("menu_list");
menuList.style.maxHeight = "0px"

function openMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "120px"
    }else{
        menuList.style.maxHeight = "0px"
    }
}
