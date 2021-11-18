const firebaseConfig = {
    apiKey: "AIzaSyBXXPZ0sNAbC6OEuaUB701qXQyCLsdPCaU",
    authDomain: "kwitter-a7973.firebaseapp.com",
    projectId: "kwitter-a7973",
    storageBucket: "kwitter-a7973.appspot.com",
    messagingSenderId: "221940975763",
    appId: "1:221940975763:web:493f8f612068bbf44fa566"
  };
  
  firebase.initializeApp(firebaseConfig);

  var user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

  function addRoom(){
    var room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value',function(snapshot){document.getElementById("output").innerHTML="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;Room_names = childKey;
    //Start code
    console.log("Room name = "+Room_names)
    var row="<div class='room_name' id="+Room_names+" onclick='rediectToRoomName(this.id)'> #"+Room_names+"</div>";
    document.getElementById("output").innerHTML+=row;
    //End code
});});}
getData();

function rediectToRoomName(name){
  console.log(name);
  localStorage.setItem("name",name);
  window.location="kwitter_page.html";
}