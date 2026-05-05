//////1) let fullName = "Lika Mamaladze" - საბოლოო პასუხი "L.M."//////
let fullName = "Lika Mamaladze";
let firstlastName = fullName.split(" ");
let result = `${firstlastName[0][0]}.${firstlastName[1][0]}.`;
console.log(`1) ${result}`);

//2) let email = " EXAMPLE@MAIL.COM " - გაწმინდე (trim) და გადაიყვანე lowercase-ში. გადაამოწმე, შეიცავს თუ არა "@"
let email = " EXAMPLE@MAIL.COM ";
email = email.trim().toLowerCase();
console.log(`2) Email:${email}`);
console.log(`შეიცავს ემაილი @? ${email.includes("@") ? "კი" : "არა"}`);

//3) let str = "luka" ამოიღეთ ბოლო ასო და გადააქციეთ upperCase-ად
let str = "luka";
console.log(
  `3) luka-ს ბოლო ასო აფერქეისში ${str[str.length - 1].toUpperCase()}`,
);

//4)
console.log("4) გამოიყენე for ლუპი 1-დან 100-მდე რიცხვებზე.");
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FooBar");
  } else if (i % 3 == 0) {
    console.log("Foo");
  } else if (i % 5 == 0) {
    console.log("Bar");
  } else {
    console.log(i);
  }
}

//5)let text = "JS is stupid but sometimes cool" - სიტყვა "stupid" შეცვალე "s****d"-ით.
let text = "JS is stupid but sometimes cool";
let replacedText = text.replace("stupid", "s****d");
console.log(`5) ${replacedText}`);



///////////////////////////////////თეორია//////////////////////////////////////////

/*
  1)რამდენი ცვლადი გვაქვს ჯავასკრიპტში.(პასუხი თეორიულად გაეცი)
  ჯავასკრიპტში გვაქვს 3 ცვლადის ტიპი let,const,var.
  var არის function-scoped ცვლადი ხელმისაწვდომი იყო დეკლარაციამდე, მაგრამ undefined-ით var თითქმის აღარ გამოიყენება.
  let და const ტიპის ცვლადებს ავქვთ ბლოკ სკოპი.
  let ტიპის ცვლადი შეგვიძლია შევცვალოთ ხოლო const ტიპის ცვლადი არ შეგვიძლია შევცვალოთ ის კონსტანტაა.
*/
/*
  2)რამდენიტიპი გვაქვს ჯავასკრიპტში.(ჩამოთვალე)(პასუხი თეორიულად გაეცი)
  ჯავასკრიპტში გვაქვს 8  ტიპი: string, number, boolean, null, undefined, symbol, bigint,object.
  აქედან 7 არის პრიმიტიული, ობიექტი კი არის  არაპრიმიტიული.პრიმიტიული ნიშნავს რომ unmutable ანუ არ არის შეცვლადი, ხოლო არაპრიმიტიული mutable ანუ არის შეცვლადი.
*/
/*
  3) რომელი მეთოდი აქცევს სტრინგს მასივად.(პასუხი თეორიულად გაეცი)
   სტრინგს მასივად აქცევს split მეთოდი, თუ split მეთოდს ვუთითებთ ცარიელ სტრინგს, მაშინ სტრინგის ყველა ასო ცალკე ელემენტად გადაეცემა მასივში ასევე შეგვეძლია spread ... ოპერატორითაც. 
*/
/*
  4) სტრინგი პრიმიტიული ტიპია თუ არა ? .(პასუხი თეორიულად გაეცი)
  სტრინგი არის პრიმიტიული ტიპი რდაგან მაგალიდა ვთქვათ let name="Nona";
  name[0]="n";  ამ შემთხვევაში name[0] არ შეიცვლება რადგან სტრინგი  არის პრიმიტიული ტიპი და მისი ელემენტები არ არის შეცვლადი.
*/
/*
   5)ჩამოთვალე რა მეთოდები ვისწავლეთ მაგ -> length(პასუხი თეორიულად გაეცი)
    განვიხილეთ შემდეგი მეთოდები: length, toUpperCase, toLowerCase, trim, includes,charAt(), replace, split.
    length მეთოდი გვიბრუნებს სიგრძეს.
    toUpperCase მეთოდს სტრინგის ყველა ასო გადაყავს UpperCase-ში .
    toLowerCase მეთოდს სტრინგის ყველა ასო გადაყავს LowerCase-ში .
    trim მეთოდი სტრინგის დასაწყისა და ბოლოში არსებული whitespace-ბს შლის.      
    includes მეთოდი გვიბრუნებს true თუ სტრინგი შეიცავს მითითებულ მნიშვნელობას და false თუ არ შეიცავს.
    charAt() მეთოდი გვიბრუნებს სტრინგის მითითებულ ინდექსზე არსებულ ასოს.
    replace მეთოდი სტრინგში არსებულ პირველ არგუმენტს შეცვლის ახალი არგუმენტით.
    split მეთოდი სტრინგს მასივად აქცევს იმის მიხედვით თუ რა არგუმენტს მივაწვდით მას.
*/
