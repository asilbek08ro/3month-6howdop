let Users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  

  let userWithId2 = Users.find(user => user.id === 2);
  console.log(userWithId2);
  

  let filteredUsers = Users.filter(user => user.id > 1);
  console.log(filteredUsers);
  


