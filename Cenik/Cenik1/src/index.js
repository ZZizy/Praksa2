import { initializeApp } from "firebase/app";
const app = initializeApp(firebaseConfig);

const tableU = document.querySelector(`.table`)
//Create element and render data
const renderUser = doc => {
  const tr = `
    <tr data-id='${doc.id}'>
      <td>${doc.data().Phone}</td>
      <td>${doc.data().Ipad}</td>
      <td>${doc.data().Mac}</td>
      <td>${doc.data().Ipod}</td>
      <td>
        <button class="btn btn-edit">Edit</button>
        <button class="btn btn-delete">Delete</button>
      </td>
    </tr>
  `;
  tableUsers.insertAdjacentHTML('beforeend', tr);
}

//Get from Database
db.collection('Product').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added') {
      renderUser(change.doc);
    }
    if(change.type === 'removed') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsers.removeChild(tbody);
    }
    if(change.type === 'modified') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsers.removeChild(tbody);
      renderUser(change.doc);
    }
  })
})