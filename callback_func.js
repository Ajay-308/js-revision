// js is synchronous and single threaded language means it can do one thing at a time and in order

// callback function
//this is without callback function
function downloadFile() {
  console.log("Downloading file...");
  setTimeout(() => {
    console.log("File downloaded!");
  }, 2000);
}

function notifyUser() {
  console.log("Download complete! Sending notification...");
}

downloadFile();
notifyUser();
// //output
// downloading file ...
// download complete ! sending notification ...
// file downloaded !

// so we can use callback function to solve this problem
function downloadFile(callback) {
  console.log("Downloading file...");
  setTimeout(() => {
    console.log("File downloaded!");
    callback();
  }, 2000);
}

function notifyUser() {
  console.log("Download complete! Sending notification...");
}

downloadFile(notifyUser);
