const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
  }
  
  // console.log(user.friends[0].phone.ddd) //Ele dá erro pois no phone dá undefined, e ele tenta acessar a propriedade ddd de undefined.
  console.log(user.friends[0].phone?.ddd) // aqui ele vai ler tudo, e no phone?. ele vai dizer p JS tentar ler o phone, se ele não for null ou undefined, ele vai ler a próxima, e caso for null ou undefined, ele para a verificação.
  console.log(user?.brothers?.length)
  
  console.log(user.brothers?.[5].name)