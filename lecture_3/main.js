//1) გაამრავლე თითოეული ელემენტი c.Input: [1,2,3] - Output: [3,6,9]
    console.log("1) 3-ზე გამრავლება ");
    let input = [1, 2, 3];
    let output = input.map((item) => item * 3);
    console.log(output);

//2)გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე
    console.log("2) რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე ");
    let arr_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,12,14,15];
    let filterd = arr_2.filter((item) => item % 3 === 0);
    console.log(filterd);

//3)დააბრუნე ყველა დადებითი რიცხვის ჯამი
    console.log("3) დადებითი რიცხვების ჯამი");
    let arr_3 = [-1, -2, -4, -5, -6, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;
    let positive = arr_3.filter((num) => num > 0);
    positive.forEach((item) => (sum += item));
    console.log(positive);
    console.log(sum);
    console.log("დადებითი რიცხვების ჯამი reduce-ით");
    let sumReduce = arr_3
    .filter((num) => num > 0)
    .reduce((sum, num) => sum + num, 0);
    console.log(sumReduce);

//4)მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
    console.log("4) წაშალე თითოეული სტრინგის ბოლო სიმბოლო");
    let namesArr = ["giorgi", "nika", "mariami"];
    let newnamesArr = namesArr.map((name) => name.slice(0, -1));
    console.log(newnamesArr);
//5)გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე
    console.log(
    "5))გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე",
    );
    let arr_5 = [66, 12, 23, 25, 6, 17, 20, 9, 10];
    let newArr5 = arr_5.map((num) => num * 2).filter((item) => item % 3 === 0);
    console.log(newArr5);

//6) დაალაგე რიცხვები ზრდადობით let numsArr = [1,-1,-2,-10,111,3,2,5]
    console.log("6)დაალაგე რიცხვები ზრდადობით");
    let numsArr = [1, -1, -2, -10, 111, 3, 2, 5];
    let soretednumsArr = numsArr.sort((a, b) => a - b);
    console.log(soretednumsArr);

//7)გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია.
    console.log(
    "7)გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია.",
    );
    let numsArr7 = [1, -1, -2, -10, 111, 3, 2, 5];
    let newnumsArr7 = numsArr7.map((num) => num * 2).filter((num) => num > 5);
    console.log(newnumsArr7);

//8)let arr = [1,1,1,1,2,2,3,3,3] დააბრუნე let unque = [1,2,3]
    console.log("8)დუბლიკატების წაშლა");
    let arr = [1, 1, 1, 1, 2, 2, 3, 3, 3];
    let unique = [...new Set(arr)];
    console.log(unique);

//9დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამს let arr = [-1,20,90,4,5,111]
    let arr9 = [-1, 20, 90, 4, 5, 111];
    let sortarr9 = arr9.sort((a, b) => a - b);
    console.log(`9) ორი უმცირესის ჯამი ${sortarr9[0] + sortarr9[1]}`);
