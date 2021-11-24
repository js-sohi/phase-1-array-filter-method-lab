const findMatching = (driverArray, driver) => {
  // iterate over our array
  // return an array that matches the string driver
  return driverArray.filter((human) => {
    // check where human === driver
    // case insensitive ?  ==> make all one case
    return human.toLowerCase() === driver.toLowerCase();
  });
};

const fuzzyMatch = (driverArray, firstLetters) => {
  return driverArray.filter((driver) => {
    // test if the current driver starts with the firstLetters argument?
    const testLength = firstLetters.length;
    return driver.startsWith(firstLetters);
    // //return (
    //   driver.slice(0, testLength).toLowerCase() === firstLetters.toLowerCase()
    // );
  });
};

const matchName = (driverArray, driver) => {
  return driverArray.filter((driverObj) => {
    // test if the key of 'name' is equal to our driver arg

    // how to get the value of key name out of driverObj??
    return driverObj.name === driver;
  });
};