
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

      apiKey: "AIzaSyB9W4P6Qq64kAyUad55GIVdFed96T_8TE4",
    
      authDomain: "kwitter-df1b8.firebaseapp.com",
    
      databaseURL: "https://kwitter-df1b8-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-df1b8",
    
      storageBucket: "kwitter-df1b8.appspot.com",
    
      messagingSenderId: "1054340201512",
    
      appId: "1:1054340201512:web:7ae6c9d47c69cb0ebb491d",
    
      measurementId: "G-QTVCL0Z2N0"
    
    };
    
        // Initialize Firebase
    
        firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function addRoom()
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
      });

       localStorage.setItem("room_name", room_name);

       window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names +"onclick='redirectToRoomName(this,id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location  = "index.html";
}