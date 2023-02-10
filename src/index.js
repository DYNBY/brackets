module.exports = function check(str, bracketsConfig) {
let b = str;
for (let i = 0; i < str.length; i++){
b = b.replaceAll("[]","").replaceAll("{}","").replaceAll("()","").replaceAll("||","").replaceAll("12","").replaceAll("34","").replaceAll("56","").replaceAll("77","").replaceAll("88","");
}
let lB = b.length;
return lB === 0 ? true: false;

}
