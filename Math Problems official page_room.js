var firebaseConfig = {
      apiKey: "AIzaSyAHYZzHfY069F_nxvXUKI6PSPr7Q2a7Ql4",
      authDomain: "mpop-data-base.firebaseapp.com",
      databaseURL: "https://mpop-data-base-default-rtdb.firebaseio.com",
      projectId: "mpop-data-base",
      storageBucket: "mpop-data-base.appspot.com",
      messagingSenderId: "491193518110",
      appId: "1:491193518110:web:a0e1a5f364cf8a83ac860f"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML=user_name;
  
  function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"agregado"
      });
      localStorage.setItem("room_name",room_name);
      window.location="MPO_page.html";
  }
//AÑADE TUS ENLACES DE FIREBASE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log (Room_names);
      row='<div class="room_name" id="'+Room_names+'" onclick="redirectToRoomName(this.id)">#'+Room_names+'</div><hr>';
      document.getElementById("output").innerHTML+=row;
      //Final del código
      });});}
getData();
function redirectToRoomName(name){
      console.log (name);
      localStorage.setItem ("room_name",name);
      window.location="MPO_page.html";
}
function logout(){
      localStorage.removeItem ("user_name");
      localStorage.removeItem ("room_name");
      window.location="index.html";
}