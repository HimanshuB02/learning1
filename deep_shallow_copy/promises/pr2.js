function someExpensiveFunction() {
    var currentDateObj = new Date();
    var numberOfMlSeconds = currentDateObj.getTime();
    var addMlSeconds = 10000;
    var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);
    while (new Date() < newDateObj) {}
    return 8;
  }

  function someExpensiveFunction(){
      return new Promise((resolve)=>{
          setTimeout(()=>{
            resolve("this is now resolved");              
          },5000);

      });
  }