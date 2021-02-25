
	import firebase from "firebase/app";

    import 'firebase/firestore';
    
    
     // variables
     var firebaseConfig = {
        apiKey: "AIzaSyAUzEa4pz4VJp2j_ANZqCG9r2UEdSIFzVA",
        authDomain: "taskproject-87dc3.firebaseapp.com",
        databaseURL: "https://taskproject-87dc3.firebaseio.com",
        projectId: "taskproject-87dc3",
        storageBucket: "taskproject-87dc3.appspot.com",
        messagingSenderId: "558369244015",
        appId: "1:558369244015:web:27d781d4fdde401b149e9a",
        measurementId: "G-HK0E5LV4S5"
      };

      
  const firebaseApp = Firebase.initializeApp(FirebaseConfig);

  
var db = firebaseApp.firestore();
  