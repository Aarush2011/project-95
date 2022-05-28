var firebaseConfig = {
  apiKey: "AIzaSyArslEcJ1R0HqrYF33BdG3TSCFEYzLwGeY",
  authDomain: "letschat-44b9d.firebaseapp.com",
  databaseURL: "https://letschat-44b9d-default-rtdb.firebaseio.com",
  projectId: "letschat-44b9d",
  storageBucket: "letschat-44b9d.appspot.com",
  messagingSenderId: "1003746733595",
  appId: "1:1003746733595:web:1e94b0656aa59d898a52be",
  measurementId: "G-GWBW6CKRM8"
};
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";



function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
  });
  localStorage.setItem("room_name" , room_name);
  winddow.location="kwitter_room.html";
}
function getData(){firebase.database().ref("/").on('value',function(snapshot){document.getElementById("output").innerHTML="";snapshot.forEach(function(childSnapshot){childKey=childSnapshot.key;
Room_names=childKey;
console.log("roomname"+ Room_names);
row="<div class='room_name' id="+Room_names+" onClick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;
});});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_room.html";
}


function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}

