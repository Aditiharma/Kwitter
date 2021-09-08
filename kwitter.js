function addUser(){
    userName= document.getElementById("user_name").value;
    localStorage.setItem("name", userName);
    window.location= "kwitter_room.html";
}