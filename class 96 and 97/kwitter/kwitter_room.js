
var firebaseConfig = {
  apiKey: "AIzaSyBPxr3_Kz1zCvIk5YrDBQgWtUk_xkGHfNU",
  authDomain: "kwitter-c4c70.firebaseapp.com",
  databaseURL: "https://kwitter-c4c70-default-rtdb.firebaseio.com",
  projectId: "kwitter-c4c70",
  storageBucket: "kwitter-c4c70.appspot.com",
  messagingSenderId: "168949335237",
  appId: "1:168949335237:web:8998bd735b138906c11cac"
};

firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({

  });

  localStorage.setItem("room_name",  room_name);
  window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName (this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

    });
  });

}

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
    window.location = "kwitter.html";
}
