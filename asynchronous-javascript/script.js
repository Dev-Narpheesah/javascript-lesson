// ASYNCHRONOUS JAVASCRIPT

// const interval =  setInterval(() =>  console.log("Hello World!"), 1000);
// clearInterval(interval);

const myInterval = setTimeout(() => console.log("Hello World!"), 1000);

// SYNCHRONOUS JAVASCRIPT

const functionOne = () => {
  console.log("Function One");

  functionTwo();
  console.log("Function One, part two");
};

const functionTwo = () => {
  setTimeout(() => console.log("Function Two"), 2000);
};
functionOne();

// const fetchUser = (userName) => {
//   setTimeout(() => {
//     return { user: userName };
//   }, 2000);
// };

// const user = fetchUser("Test");
// console.log(user);

// Callback

const fetchUserOne = (name, callback) => {
  setTimeout(() => {
    console.log("Now we have the user");
    callback({ user: name });
  }, 2000);
};

const user2 = fetchUserOne("Test", (user2) => {
  console.log(user2);
});

// Callback Hell

const fetchUserTwo = (username, callback) => {
  setTimeout(() => {
    console.log("Now we have the user");
    callback({ username });
  }, 2000);
};

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

const user3 = fetchUserTwo("Micheal", (user) => {
  console.log(`Your name is: ${user.username}`);
  fetchUserPhotos(user.username, (userphotos) => {
    console.log(`Your photos are: ${userphotos}`);
    fetchUserPhotosDetails(userphotos[0], (details) => {
      console.log(`Your photo details are ${details}`);
    });
  });
});

// This is called callback Hell. it becomes unreable

const user4 = fetchUserTwo("Micheal", (user) => {
  fetchUserPhotos(user.username, (userPhotos) => {
    fetchUserPhotosDetails(userPhotos[0], (details) => {
      fetchUserPhotosDetails(userPhotos[0], (details) => {
        fetchUserPhotosDetails(userPhotos[0], (details) => {
          fetchUserPhotosDetails(userPhotos[0], (details) => {
            console.log(details);
          });
        });
      });
    });
  });
});


const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we are Promise");

      resolve({username: "Bode"})
      reject("User not Found")  
    }, 5000);
});
promise
.then((user) => console.log(user.username))
.catch((error) => console.log(error));

const fetchUser = (username) => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("We are using promise")

        resolve(username);
    }, 4000);
})
};

const fetchUserPhotos = (username) => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("We have the photos")

        resolve(["photos", "photos2"]);
    }, 4000);
})
};

const fetchUserPhotosDetails = (photo) => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Now we have the photo details")

        resolve("details");
    }, 4000);
})
};


fetchUser("Zainab")
.then((user) => fetchUserPhotos(user))
.then((photos) => fetchUserPhotos(photos[0]))
.then((details) => console.log(details) );