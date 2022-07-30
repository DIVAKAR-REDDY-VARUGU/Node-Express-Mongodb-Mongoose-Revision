console.clear()
const fs=require('fs');




//  Reading file 1 data

var data = fs.readFileSync("./file_read_writing/file1.txt");
console.log(data.toString());


//  Writing data to file 2

fs.writeFileSync('./file_read_writing/file2.txt',"this data will create new file 2 and added to that ")


//  Appending data to file 2

fs.appendFileSync('./file_read_writing/file2.txt'," this is new data for file 2 that is appended ")


