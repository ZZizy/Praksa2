import { initializeApp } from "firebase/app";
import {get, getDatabase, ref,child, set} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBWwyFQr7XO6LLXDd-D7KOwN7y_nLaEH3Y",
  authDomain: "mojcenik.firebaseapp.com",
  databaseURL: "https://mojcenik-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mojcenik",
  storageBucket: "mojcenik.appspot.com",
  messagingSenderId: "63719063115",
  appId: "1:63719063115:web:45987837a7a2bab3ef57ce",
  
};

const app = initializeApp(firebaseConfig);

function writeData(Id) {
    const db = getDatabase();
    set(ref(db, 'Product/' + Id), {
      Iphone: "900$",
      Mac: "2000$",
      Ipod:"600$",
      Ipad: "700$"
    });
  }
writeData("Price")
//list
const dbRef = ref(getDatabase());
get(child(dbRef, `Product/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

// var number = 0;
// var tbody = document.getElementById('tbody1');
// function addToList(Iphone,Mac,Ipod,Ipad){
//   let trow = document.createElement("tr");
//   let td1 = document.createElement('td');
//   let td2 = document.createElement('td');
//   let td3 = document.createElement('td');
//   let td4 = document.createElement('td');
//   let td5 = document.createElement('td');
  
//   td1.innerHTML=++number;
//   td2.innerHTML=Iphone;
//   td3.innerHTML=Mac;
//   td4.innerHTML=Ipod;
//   td5.innerHTML=Ipad;
  
//   trow.appendChild(td1);
//   trow.appendChild(td2);
//   trow.appendChild(td3);
//   trow.appendChild(td4);
//   trow.appendChild(td5);

//   tbody.appendChild(trow);
// }
// function addAllToList(TheProduct){
//   number=0;
//   tbody=innerHTML="";
//   TheProduct.foreEach(element =>{
//     addToList(element.Iphone,element,Mac,element,Ipod,element,Ipad)
//   });
// }
