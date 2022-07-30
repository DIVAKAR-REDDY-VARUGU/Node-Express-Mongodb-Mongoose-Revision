const crypto=require('crypto');
console.clear();



// To know all type of ciphers 
// for(let i of crypto.getCiphers())console.log("\n"+i);

let algo1='aes192'    //aes-128-cbc,...   
let algo2='sha512'    // sha256,.....
let password='abcdefg'
let msg="hello divakar Reddy !!! "
let textEncodingType1='hex'
let textEncodingType2= "utf8";

let hash=crypto.createHash(algo2,password).update(msg).digest(textEncodingType1);
console.log("\nhash value : "+hash)
// hash value : 0f5cfe4ef34d18b505a1b84e80d9bd62ee484ef14ba8c3edbea17ac901e2994e9a4191af5dd0a52430c1fb39935468e6797446f67ef0663532053fab6c684dbf




let cipher=crypto.createCipher(algo1,password);
let cipherText=cipher.update(msg,textEncodingType2,textEncodingType1)+cipher.final('hex');
console.log("\ncipher text : "+cipherText);
//cipher text : f6339e645681ee3d91d67a774fd5f6828a22ea67c532f2461dfd87e8c8179872

let decrypt=crypto.createDecipher(algo1,password);
let plainText=decrypt.update(cipherText,textEncodingType1,textEncodingType2)+decrypt.final(textEncodingType2)
console.log("Plain Text : "+plainText);


let l_ = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
console.log(l_);