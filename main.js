let users = {}; 

for (let i = 1; i <= 10; i++) {
  let name = prompt(`Введите имя пользователя ${i}:`); 
  let age = prompt(`Введите возраст пользователя ${i}:`); 
  
 
  users[i] = {
    name: name,
    age: age
  };
  
  console.log(`Пользователь - ${i}`);
  console.log(`Имя - ${name}`);
  console.log(`Возраст - ${age}`);
}

console.log(users); 
