import * as firebase from "firebase"


const config = {
    apiKey: "AIzaSyAxdyCynvamaUB_JFLBkBwzKvdX9Qi9gd4",
    authDomain: "fittrackify-c32d0.firebaseapp.com",
    databaseURL: "https://fittrackify-c32d0.firebaseio.com",
    projectId: "fittrackify-c32d0",
    storageBucket: "fittrackify-c32d0.appspot.com",
    messagingSenderId: "891005291863"
  };

firebase.initializeApp(config);


const database = firebase.database()
const googleProvider = new firebase.auth.GoogleAuthProvider()

export {firebase, googleProvider, database as default};

// database.ref("workouts").on("child_removed", (snapshot) => {console.log(snapshot.key,snapshot.val())})


// database.ref("workouts").on("child_changed", (snapshot) => {console.log(snapshot.key,snapshot.val())})


// database.ref("workouts").on("child_added", (snapshot) => {console.log(snapshot.key,snapshot.val())})



// // database.ref("workouts").on("value", (snapshot) => {const workouts = []; snapshot.forEach((childSnapshot) => { workouts.push({
// //     id:childSnapshot.key,
// //     ...childSnapshot.val()
// // })})
// // console.log(workouts)})


// database.ref("workouts").push({
//     description: "Heavy lifting",
//     note: "",
//     amountTime: 35*60,
//     createdAt: 15664,
// })
// // database.ref().set({
// //     name: "Matej Turay",
// //     age: 25,
// //     stressLevel: 6,
// //     isSingle: false,
// //     job : {
// //         title: "Front-end Dev",
// //         company: "SLSP"
// //     },
// //     location : {
// //         city: "Bratislava",
// //         country: "Slovakia"

// //     }

// // }).then(() => {console.log("Data sucessfully returned!")}).catch((error) => {console.log("An error happened",error)})
// // // database.ref().set("a string")

// // database.ref("location/city").set('Trnava')


// // database.ref("attributes").set({
// //     height: 196,
// //     weight: 96,
// // }).then(() => { console.log("Attributes added!")}).catch((error) => {console.log("An error happened"
// // , error)})



// // database.ref("isSingle").remove().then(() => console.log("Data has been removed")).catch((error) => console.log(error))

// // database.ref().update({
// //     name: "Ing. Matej Turay",
// //     "location/city":  "Trnava"
    
// // }).then(() => console.log("Data has been updated")).catch((error) => console.log(error))




// // database.ref().update({
// //     stressLevel: 9,
// //     "job/company": "ESET",
// //     "location/city": "Bratislava"
// // }).then(() => console.log("Data has been updated")).catch((error) => console.log(error))




// // database.ref().update({
// //     "job/company": "Google"
// // })

// // database.ref().on("value", (snapshot) => { let userInfo = snapshot.val(); console.log(`${userInfo.name} is ${userInfo.age} years old and works at : ${userInfo.job.company} as ${userInfo.job.title}`)})