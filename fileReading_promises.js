const fs=require('fs');
const readFile=path=> new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(data);
            }
        });
    });
readFile('./file1.txt')
.then((result)=>{
    console.log(result);
    return readFile('./file2.txt')
})
.then((result)=>{console.log(result);})
.catch((err) => console.log(err))

