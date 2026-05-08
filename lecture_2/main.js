//1) შექმენი ცარიელი მასივი და შეავსე მასში რიცხვები 5-დან 15-მდე
let arr_1 = [];
for (let i = 5; i < 15; i++) {   //თუ 15-ის ჩათვლით გვინდა i <= 15;
  arr_1.push(i);
}
console.log(arr_1);
//2) დაბეჭდე მასივის ელემენტები უკუღმა let arr = [1,2,3,4,5]
console.log(`2) შებრუნებული მასივი`);
let arr = [1, 2, 3, 4, 5];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
let reversed = [...arr].reverse();
console.log(reversed);

//3) იპოვე მასივში მინიმალური რიცხვი let arr = [100,2,3,9]
let arr_3 = [100, 2, 3, 9];
let min = Math.min(...arr_3);
console.log(`3)მინიმალური მასივიდან arr = [100,2,3,9] - ${min}`);
//4) ამოიღე შუა 3 ელემენტი slice-ით.let arr = [1,2,3,4,5,6,7]
let arr_4 = [1, 2, 3, 4, 5, 6, 7];
let shua = arr_4.slice(2, 5);
console.log(`4) შუა სამი ${shua}`);
//5) გააერთიანე ორი მასივი let arr1 = [1,2] let arr2=[3,4]
let arr1 = [1, 2];
let arr2 = [3, 4];
let gaertianebuli = [...arr1, ...arr2];
console.log(
  `5)ორი მასივის გააერთიანება spreed ოპერატორის გამოყენებით ${gaertianebuli}`,
);
console.log(`concat-ის გამოყენებით ${arr1.concat(arr2)}`);
//6) წაშალე დუბლირებული ელემენტები let arr = [1,2,3,4,5,6,6,7,7]
let arr_6 = [1, 2, 3, 4, 5, 6, 6, 7, 7];
let removed = [...new Set(arr_6)];
console.log(
  `6)წაშალე დუბლირებული ელემენტები let arr = [1,2,3,4,5,6,6,7,7]  სიმრავლის გამოყენებით ${removed}`,
);
let removeDub = [];
for (let i = 0; i < arr_6.length; i++) {
  if (!removeDub.includes(arr_6[i])) {
    removeDub.push(arr_6[i]);
  }
}
console.log(`includis გამოყენებით ${removeDub}`);
//7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). მინიშნება: გამოიყენე % 2 === 0  let arr = [1,2,3,4,5,6,7]
console.log(`7) ლუწი და კენტი რიცხვები let arr = [1,2,3,4,5,6,7] მასივიდან `);
let arr_7 = [1, 2, 3, 4, 5, 6, 7];
let luwi = [];
let kenti = [];
for (let i = 0; i < arr_7.length; i++) {
  if (arr_7[i] % 2 === 0) {
    luwi.push(arr_7[i]);
  } else {
    kenti.push(arr_7[i]);
  }
}
console.log(`ლუწი რიცხვები ${luwi}`);
console.log(`კენტი რიცხვები ${kenti}`);

//8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი.
console.log(`8) დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი 
                 [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4]-მასივიდან`);
let arr_8 = [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4];
let poscaunt = 0;
let negativsum = 0;
for (let i = 0; i < arr_8.length; i++) {
  arr_8[i] > 0 ? (poscaunt += 1) : (negativsum += arr_8[i]);
}
console.log(`დადენითების რაოდენობა ${poscaunt}`);
console.log(`ურაყოფითების ჯამი ${negativsum}`);

//9) დააბრუნე მასივის თითოეული ელემენტის ინვერსი (ანუ [1,-2] მაგივრად [-1,2]). მინიშნება: გამოიყენე push(-arr[i])
console.log(`9)let arr= [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4] მასივის ინვერსი`);
let invers = [];
for (let i = 0; i < arr_8.length; i++) {
  invers.push(-arr_8[i]);
}
console.log(invers);

//10) let arr = [1,[2,[3]],[4] შენი მიზანია მიიღო [1,2,3,4]
console.log("10) let arr = [1,[2,[3]],[4] შენი მიზანია მიიღო [1,2,3,4]");
let arr_10 = [1, [2, [3]], [4]];
let onelevel = arr_10.flat(Infinity);
console.log(onelevel);

//11)let fruits = ["apple", "banana", "orange", "kiwi"] წაშალე "banana" მასივიდან splice()-ით
//"orange"-ის წინ დაამატე "mango"
//ბოლოს დაბეჭდე ახალი მასივი.
let fruits = ["apple", "banana", "orange", "kiwi"];
let newfruits = [...fruits];
newfruits.splice(1, 1);
console.log(`11) delete banana: ${newfruits}`);
newfruits.splice(1, 0, "mango");
console.log(`added mango: ${newfruits}`);
