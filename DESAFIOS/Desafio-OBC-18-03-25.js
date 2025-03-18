for (let i = 1; i <= 100; i++) {
    let output = "";
  
    switch (true) {
        case i % 3 === 0:
            output = "One";
            break;
        case i % 5 === 0:
            output = "Bit";
            break;
        case i % 3 === 0 && i % 5 === 0:
            output = "Code";
            break;
        default:
            output = i;
    }
  
    console.log(output);
  }