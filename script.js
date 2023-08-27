import { initializeApp} from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js';
import { getDatabase, ref, push, onValue} from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js';

const appSettings = {
    databaseURL: "https://points-9e12e-default-rtdb.europe-west1.firebasedatabase.app/"

}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const pointsDB = ref(database, "Entries");

const inputName = document.getElementById("input-name");
const inputPoints = document.getElementById("input-points");
const addButton = document.getElementById("add-button");
const entryListEL = document.getElementById("entry-list");

const member = { name: null, score: null};

addButton.addEventListener("click", function(){
    let name = inputName.value;
    let points = inputPoints.value;

    member.name = name;
    member.score = points;

    push(pointsDB, member);

    let entry = name + " - " + points;

  //  updateLineItem(entry);
    

    clearInputFields();



    // console.log(name);
    // console.log(points);
})

onValue( pointsDB, function(snapshot){
    let entryArray = Object.values(snapshot.val());

    for (let i=0; i < entryArray.length; i++){
        console.log(entryArray[i]);
        let currentEntry = Object.values(entryArray[i]);
        delete currentEntry.name;
        delete currentEntry.score;
        console.log(currentEntry[0]);
        console.log(currentEntry[1]);
        //const itemArr = currentEntry.
        updateLineItem(currentEntry[0] + " - "  + currentEntry[1]);
    }

})




function clearInputFields(){
    inputName.value = "";
    inputPoints.value = "";
}

function updateLineItem(item){
    entryListEL.innerHTML += `<li>${item}</li>`;
    // let nodeLi = document.createElement("li");
    // const textnode = document.createTextNode("Guiness or Thatchers");
    // nodeLi.appendChild(textnode);
    // entryListEL.appendChild(node);
}

function removeLineItems(){
    let ul = document.getElementById("entry-list");
    ul.innerHTML = "";


}

function updateAllLineItems(){

}

