
var firebaseConfig = {
      apiKey: "AIzaSyABGQsd6Rt8j2IqlkQ8TO267y7yU-JQtfY",
      authDomain: "kwitter-9528b.firebaseapp.com",
      databaseURL: "https://kwitter-9528b-default-rtdb.firebaseio.com",
      projectId: "kwitter-9528b",
      storageBucket: "kwitter-9528b.appspot.com",
      messagingSenderId: "921602357043",
      appId: "1:921602357043:web:c95b0033c9822812d0b046"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function addRoom(){
        room_name= document.getElementById("room_name").value;
        console.log(room_name);
        firebase.database().ref("/").child(room_name).update({
            purpose:"adding user"
        });
        localStorage.setItem("room_name",room_name);
        window.location = "kwitter_page.html";
    }
  
    
    user_name= localStorage.getItem("name");
    document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";
   
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row= "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location= "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location("index.html");
}