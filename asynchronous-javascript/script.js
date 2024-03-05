// ASYNCHRONOUS JAVASCRIPT

// const interval =  setInterval(() =>  console.log("Hello World!"), 1000);
// clearInterval(interval);

// const myInterval = setTimeout(() => console.log("Hello World!"), 1000);

// SYNCHRONOUS JAVASCRIPT

// const functionOne = () => {
//   console.log("Function One");

//   functionTwo();
//   console.log("Function One, part two");
// };

// const functionTwo = () => {
//   setTimeout(() => console.log("Function Two"), 2000);
// };
// functionOne();

// const fetchUser = (userName) => {
//   setTimeout(() => {
//     return { user: userName };
//   }, 2000);
// };

// const user = fetchUser("Test");
// console.log(user);

// Callback
// A callback is a function passed as an argument to another function.

// const fetchUserOne = (name, callback) => {
//   setTimeout(() => {
//     console.log("Now we have the user");
//     callback({ user: name });
//   }, 2000);
// };

// const user2 = fetchUserOne("Test", (user2) => {
//   console.log(user2);
// });

// // Callback Hell

// const fetchUserTwo = (username, callback) => {
//   setTimeout(() => {
//     console.log("Now we have the user");
//     callback({ username });
//   }, 2000);
// };

// const fetchUserPhotos = (username, callback) => {
//   setTimeout(() => {
//     console.log(`Now we have the photo details ${username}`);
//     callback(["photo1", "photo2"]);
//   }, 2000);
// };

// const fetchUserPhotosDetails = (photos, callback) => {
//   setTimeout(() => {
//     console.log(`Now we have the photos details ${photos}`);
//     callback("details");
//   }, 2000);
// };

// const user3 = fetchUserTwo("Micheal", (user) => {
//   console.log(`Your name is: ${user.username}`);
//   fetchUserPhotos(user.username, (userphotos) => {
//     console.log(`Your photos are: ${userphotos}`);
//     fetchUserPhotosDetails(userphotos[0], (details) => {
//       console.log(`Your photo details are ${details}`);
//     });
//   });
// });

// This is called callback Hell. it becomes unreable

// const user4 = fetchUserTwo("Micheal", (user) => {
//   fetchUserPhotos(user.username, (userPhotos) => {
//     fetchUserPhotosDetails(userPhotos[0], (details) => {
//       fetchUserPhotosDetails(userPhotos[0], (details) => {
//         fetchUserPhotosDetails(userPhotos[0], (details) => {
//           fetchUserPhotosDetails(userPhotos[0], (details) => {
//             console.log(details);
//           });
//         });
//       });
//     });
//   });
// });

// SYNTAX OF PROMISE
// const pro = new Promise ((resolve, reject) => {
//   resolve();
//   reject();
// })
// .then(() => {}).catch(() => {});

// const promise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Now we are Promise");

//       resolve({username: "Bode"})
//       reject("User not Found")
//     }, 5000);
// });
// promise
// .then((user) => console.log(user.username))
// .catch((error) => console.log(error));

// const fetchUser = (username) => {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("We are using promise")

//         resolve(username);
//     }, 4000);
// })
// };

// const fetchUserPhotos = (username) => {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("We have the photos")

//         resolve(["photos", "photos2"]);
//     }, 4000);
// })
// };

// const fetchUserPhotosDetails = (photo) => {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Now we have the photo details")

//         resolve("details");
//     }, 4000);
// })
// };

// fetchUser("Zainab")
// .then((user) => fetchUserPhotos(user))
// .then((photos) => fetchUserPhotos(photos[0]))
// .then((details) => console.log(details) );

// Async  and await Syntax

// EXAMPLE ONE
const myUser = {
  userList: [],
};

// const myFoolFunc = async () => {
//  const response = await fetch ('https://jsonplaceholder.typicode.com/users');
//  const fetchJson = await response.json();
// //  console.log(fetchJson);

// return fetchJson
// }
// const anotherFn = async () => {
//   const data = await myFoolFunc();
//   myUser.userList = data;
//   console.log(myUser.userList)
// }
// anotherFn()
// // console.log(myUser.userList)
// // myFoolFunc()

// const getAllUsersEmail = async () => {
//   const response = await fetch ('https://jsonplaceholder.typicode.com/users');
//   const fetchJson = await response.json();
//  //  console.log(fetchJson);

//   const email = fetchJson.map((user) => {
//     return user.email
//   })
//   console.log(email);
//  }
//  getAllUsersEmail()

// const getAllUserEmail = async () => {
//   const response = await fetch ('https://jsonplaceholder.typicode.com/users');
//     const fetchJson = await response.json();
//     const oyee = fetchJson.map((joy) => {
//       return joy.username
//     })
//     console.log(oyee)
// }

// getAllUserEmail()

// const getData = async () => {
//    try {
//     const response = await fetch ('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     return data

//    }catch (error) {
//     console.log("Error:", error.message)
//    }
// }
// getData()

// .then((data) => console.log("data:", data)).catch((error) => console.log("Error:", error.message))

const fetchDataWithErr = async () => {
  try {
    console.log("Fetching Data...");
    const res = await fetch("https://jsonplaceholder.typicode.com/invalid-url");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const $data = await res.json();
    return $data;
  } catch (error) {
    console.log("Error:", error.message);
  }
};
fetchDataWithErr().then((result) => {
  if (result) {
    console.log("Data", result);
  }
});

// const fetchSingleData = async () => {
//   try{
//     const response = await fetch ('https://jsonplaceholder.typicode.com/users');

//     if (!response.ok) {
//       throw new Error('Not Found will be fixed soon')
//     }

//     const [userData] = await response.json()
//     const {username, email, name} = userData;
//     return {username, email, name};

//   }catch (error){
//     console.log("Error:", error.message)
//   }
// }
// fetchSingleData().then(({username, email, name}) => {
//   console.log("Username:", username)
//   console.log("Email:", email)
//   console.log("Name:", name)
// });

// const fetchData = async () => {
//   try{
//     const response = await fetch ('https://jsonplaceholder.typicode.com/users');

//     if (!response.ok) {
//       throw new Error('Not Found will be fixed soon')
//     }

//     const userData = await response.json()
//     const mappedData =userData.map(({username, email, name}) =>{

//       return {username, email, name};
//     } );
//     console.log(mappedData)

//   }catch (error){
//     console.log("Error:", error.message)
//   }
// }
// fetchData()
const fetchNestDta = async () => {

  try{
      console.log("username")
 const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
  
  if(!response.ok){
      throw new Error("Not found will fixed soon")
  }
  const userData = await response.json() 
  const mappedData = userData.map(({ id, username, email, name, address, phone, website, company}) =>({
  id, username, email, name, address: {
      street: address.street,
  },
  phone,
   website, 
   company: {
      name: company.name
  }
      
}));
console.log(mappedData)
  }catch (error){
      console.log("error:",error.message)
}   
}
  fetchNestDta()
