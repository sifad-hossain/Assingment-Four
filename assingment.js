function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
    return "please input a positve value";
    }
    const ticketPrice = 120;
    const totalSell = ticketPrice * ticketSale;
    const totalCost = 500 + 8 * 50;
    const result = totalSell - totalCost;
    return result;
    }


    function checkName(name) {
    if (typeof name !== "string") {
    return "invalid";
    }
    const paramsValue = name.toLowerCase();
    const checkName = paramsValue.split("");
    const lastvalue = checkName[checkName.length - 1];
    const values = ["a", " y", "i", "e", "o", "u", "w"];
    for (const word of values) {
    if (word === lastvalue) {
    return "Good Name";
    }
    }
    return "Bad Name";
    }



    function deleteInvalids(array) {
    if (Array.isArray(array) == false) {
    return "please give an array";
    }
    let result = [];
    for (const value of array) {
    if (typeof value === "number" && !isNaN(value)) {
    result.push(value);
    }
    }
    return result;
    }



function password(obj) {
    if (!obj.siteName || !obj.birthYear || !obj.name) {
      return "invalid";
    }
    if (obj.birthYear.toString().length != 4) {
      return "invalid";
    }

    obj.siteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);   
    return obj.siteName + "#" + obj.name + "@" + obj.birthYear;
  }


    function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) == false || typeof livingCost !== "number") {
    return "invalid input";
    }
    let totalIncome = 0;
    let IncreaseIncome = 0;
    for (const value of arr) {
    totalIncome += value;
    if (value >= 3000) {
    IncreaseIncome += value;
    }
    }
    const taxvalue = (IncreaseIncome * 20) / 100;
    const totalCost = livingCost + taxvalue;
    const savingMoney = totalIncome - totalCost;
    if (savingMoney < 0) {
    return "earn more";
    } else {
    return savingMoney;
    }
    }

