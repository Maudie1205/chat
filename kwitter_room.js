

var firebaseConfig = {
      apiKey: "AIzaSyALPtenOI07lijErGgAGT4xRQYNHkc_Ty8",
      authDomain: "kwitter-4045a.firebaseapp.com",
      databaseURL: "https://kwitter-4045a-default-rtdb.firebaseio.com",
      projectId: "kwitter-4045a",
      storageBucket: "kwitter-4045a.appspot.com",
      messagingSenderId: "898424278002",
      appId: "1:898424278002:web:5550a33bdb9f5dcbeaf96b",
      measurementId: "G-NNTGSGHK8G"
    };
    
  
     firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
