function Regex() {
    var data = "Belajar menimba ilmu programming bersama Niomic";

    const str = new RegExp('bersama');
    console.log(str.exec(data));
}
Regex();

const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[A-E]/gi;
const matches = str.match(regexp);

console.log(matches);