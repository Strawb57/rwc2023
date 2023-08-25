import { initializeApp} from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js';
import { getDatabase, ref, push} from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js';

const appSettings = {
    databaseURL: "https://points-9e12e-default-rtdb.europe-west1.firebasedatabase.app/"

}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const pointsDB = ref(database, "Entries");

const inputName = document.getElementById("input-name");
const inputPoints = document.getElementById("input-points")
const addButton = document.getElementById("add-button");

const member = { name: null, score: null};

addButton.addEventListener("click", function(){
    let name = inputName.value;
    let points = inputPoints.value;

    member.name = name;
    member.score = points;

    push(pointsDB, member);

    // console.log(name);
    // console.log(points);
})