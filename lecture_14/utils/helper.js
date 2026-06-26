export function toupper(str) {
  return str.toUpperCase();
}
export function capital(str) {
  return str
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
}
export function isPalindrom(str){
    let reversed=str.split("").reverse().join("");
    if(str===reversed) return true;
    else return false;
}
export function longest(str){
    let words=str.split(" ");
    let longest=words.sort((a,b)=>b.length-a.length);
    return longest[0];
}