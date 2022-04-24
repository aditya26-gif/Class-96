
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDeZexclN7an39OrBwyd5KBlQsn8oFModE",
      authDomain: "classtest-b805d.firebaseapp.com",
      projectId: "classtest-b805d",
      storageBucket: "classtest-b805d.appspot.com",
      messagingSenderId: "475624976651",
      appId: "1:475624976651:web:a542aa09bb4e524bf1b20e"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}