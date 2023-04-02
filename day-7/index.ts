//numeric enum

enum RequestType {
  readData = 1,
  saveData = 3,
  deleteData,
}
// console.log(RequestType);
// console.log(RequestType["deleteData"]);
// console.log(RequestType.readData);

//numeric string

enum RequestType2 {
  readData = "READ_DATA",
  deleteData = "DELETE_DATA",
}

console.log(RequestType2.deleteData);

//hetergenous enum
enum RequestType3 {
  readData = "READ_DATA",
  id = 101,
}
