function addUser(){
    username=document.getElementById("user_name").innerHTML;
localStorage.setItem("username",username);
window.location.replace("kwitter_room.html")
}