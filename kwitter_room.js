var firebaseConfig = {
    apiKey: "AIzaSyCira3_iCm7_L4pprjV5UjuqK8oMma7CsY",
    authDomain: "kwitter-project-beb1a.firebaseapp.com",
    projectId: "kwitter-project-beb1a",
    storageBucket: "kwitter-project-beb1a.appspot.com",
    messagingSenderId: "755662458275",
    appId: "1:755662458275:web:4c4d62ba2748b5fb681e16",
    measurementId: "G-9F9D9W0FB6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name")  
  document.getElementById("user_name").innerHTML="welcome  "+ user_name + "!"

  function addRoom()
  {
room_name=document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({
  purpose:"adding Room Name"
})
localStorage.setItem("room_name",room_name)
window.location("kwitter_page.html")

  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
      document.getElementById("output").innerHTML+=row
      });});}
getData();

function redirectToRoomName(name)
{
localStorage.setItem("room_name",name)
window.location="kwitter_page.html"
}
function logout()
{
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location="index.html"
}