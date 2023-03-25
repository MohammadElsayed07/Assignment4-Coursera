const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (let i = 0; i < names.length; i++) {
  let name = names[i];
  let firstLetter = name.charAt(0);

  if (firstLetter.toLowerCase() === "j") {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}
