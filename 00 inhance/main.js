

// function user(name,lastName,age){
//     return {
//         name:name,
//         lastName:lastName,
//         age:age,
//         showDetails: ()=>{
//             console.log(`
//                  Name: ${name}, 
//                  Last Name: ${lastName},
//                  Age: ${age}`);
//         }
//     };
// }


// let user1 = user('Ming','Yuan',26);

// user1.showDetails();

const object  = {
    a: 1,
    b: 2,
    c: 3
};



for(datas in object){
    console.log(`${datas}, ${object[datas]}`);
}