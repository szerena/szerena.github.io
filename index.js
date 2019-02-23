database = firebase.database();

let path = "posts/1";
let dataToSave = {
  RacerName: "RacerName 1",
  roundtime: "6"
};

database.ref(path).set(dataToSave);

let pathToRacer = "racer";

let data ={name:"Mark", roundTime: 5 }

database.ref(pathToRacer).push(data);