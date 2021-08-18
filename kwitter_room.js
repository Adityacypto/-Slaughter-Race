
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAFfpR7v7jItar4-IBTyDsHVSxoNhe3FXY",
      authDomain: "slaughter-race-ccf19.firebaseapp.com",
      databaseURL: "https://slaughter-race-ccf19-default-rtdb.firebaseio.com",
      projectId: "slaughter-race-ccf19",
      storageBucket: "slaughter-race-ccf19.appspot.com",
      messagingSenderId: "445956012270",
      appId: "1:445956012270:web:09b47093cd5d6c62261bff",
      measurementId: "G-LF4VGL5GKC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");

document.getElementById("user_name").innerHTML= "Welcome  "+   user_name + "!!";


   function addroom(){

        roomname= document.getElementById("roomname").value;
        firebase.database().ref("/").child(roomname).update({
              purpose : "add roomname"
        });

        localStorage.setItem("roomname",roomname);
        window.location = "kwitter_page.html";

   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+ Room_names );
      row =  "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("roomname",name);
      window.location= "kwitter_page.html";
}

function logout(){
       
      localStorage.removeItem("username");
      window.location= "index.html";
}