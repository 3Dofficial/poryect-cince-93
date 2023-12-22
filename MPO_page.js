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
var room_name=document.getElementById("room_name").value;
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}

    function logout(){
        localStorage.removeItem ("user_name");
        localStorage.removeItem ("room_name");
        window.location="index.html";
  }