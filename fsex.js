const fs = require("fs");

new Promise((resolve, reject) => {
  fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
