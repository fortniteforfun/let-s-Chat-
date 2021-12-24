//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDrfMJ6a9hePqSThT8uoyUokUXWlIKISSU",
      authDomain: "kwitter-788cb.firebaseapp.com",
      databaseURL: "https://kwitter-788cb-default-rtdb.firebaseio.com",
      projectId: "kwitter-788cb",
      storageBucket: "kwitter-788cb.appspot.com",
      messagingSenderId: "1021108641639",
      appId: "1:1021108641639:web:d6a4dfbeb0de67e87899c2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  room_name = childKey;
                  //Start code
                  console.log("room_name" + room_name);
                  row = "<div class='room_name' id=" + room_name + "onclick='redirectToRoomName(this.id)'>#" + room_name + "</div><hr>"
                  document.getElementById("output").innerHTML += row
                  //End code      
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
      
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("username")
      localStorage.removeItem("room_name")
      window.location = "index.html";
}
function logOut(){
    window.location.replace("index.html")
}
function display(){
    username=document.getElementById("user_name").innerHTML;
    document.getElementById("username").value=username;   
}