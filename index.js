const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const numberset = "123456789";
const symbolset = "~!@#$%^&*()_+/";

const password = (dataset)=>{
    return dataset[Math.floor(Math.random()* dataset.length)];
}

const totalchar = document.getElementById("total-char");
const upperchar = document.getElementById("upper-case");
const lowercase = document.getElementById("lower-case");
const number = document.getElementById("numbers");
const symbol = document.getElementById("symbols");