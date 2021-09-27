class CoffeStorage {
  constructor(typeOfCoffe, amountOfCups, purchaseAmount) {
    this.typeOfCoffe = typeOfCoffe;
    this.amountOfCups = amountOfCups;
    this.purchaseAmount = purchaseAmount;
  }
}

const coffees = [
  {
    //array med information om kaffet som kan köpas
    name: "Bryggkaffe",
    price: 20,
  },
  {
    name: "Cappucino",
    price: 30,
  },
  {
    name: "Latte",
    price: 40,
  },
];
const transactionHistory = [];

let validAmount = true;

let numberOfCups; //antal koppar vid köpet
let selectedCoffee; //typ av kopp id köp
let priceOfCoffee; //priset på antal koppar vi köp

//Totala summor
let totalNumberOfCups = 0;
let totalMoneySpent = 0;

let membershipStatus = "";

function howManyCups() {
  //Räknar ut mängden koppar som köpts vid ett tillfälle
  numberOfCups = Number(document.getElementById("coffee").value); //number gör att det blir en integer istället för en string
  if (numberOfCups >= 0) { //kontrollerar om antal koppar är godkänt
      validAmount = true //för att tillåta validAmount att användas igen om man skrivit ett negativt värde innan
    return numberOfCups;
  } else alert("Ogiltigt antal");
  return (validAmount = false);
}

function coffeeSort() {
  //tar fram vilket sorts kaffe som köpts
  const coffeeOption = document.getElementById("typeOfCoffee");
  selectedCoffee = coffeeOption.value;
  return selectedCoffee;
}

function onBuyButtonClick() {
  //funktion som triggar funktioner vid köp
  howManyCups();
  if (validAmount) {
    coffeeSort();
    totalCups();
    totalAmountOfPurchases();
    membershipStatusCheck();
    showHistory();
    addToHistoryArray();

    //just to make sure if it works
    // console.log(totalMoneySpent);
    // console.log(totalNumberOfCups);

    // Determin Status

    //Show the results under input box
    const totalResult = document.getElementById("totalSection"); //Visar totala resultatet att köpen
    totalResult.innerHTML = `Du har handlat för ${totalMoneySpent}kr <br/> Medlemskaps status: ${membershipStatus}`;
  }
}

function showHistory() {
  //Visar transaktionshistoriken för kunden
  const parent = document.getElementById("transactions"); //element som vi fäster våra transaktioner till
  const child = document.createElement("p"); //skapar en ny p tagg på ny rad
  child.innerHTML =
    //texten som läggs på den nya taggen
    `Du har köpt ${numberOfCups} st ${coffees[selectedCoffee - 1].name} för ${
      coffees[selectedCoffee - 1].price
    }kr. Summa: ${coffees[selectedCoffee - 1].price * numberOfCups}`;
  parent.appendChild(child); //fäster vår nya tagg på förälra taggen
}

function totalCups() {
  //summerar den totala mängden av koppar
  totalNumberOfCups += numberOfCups;
}

function totalAmountOfPurchases() {
  //Totala kostnaden av köpta koppar
  priceOfCoffee = coffees[selectedCoffee - 1].price;
  console.log(priceOfCoffee * numberOfCups);
  totalMoneySpent = totalMoneySpent + priceOfCoffee * numberOfCups;
  //  return priceOfCoffee * amountOfCups
}

function membershipStatusCheck() {
  //Kontrollerar vilken status medlemskapet har
  if (totalNumberOfCups < 10) {
    membershipStatus = "Brons";
  } else if (totalNumberOfCups >= 10 && totalNumberOfCups < 30) {
    membershipStatus = "Silver";
  } else if (totalNumberOfCups >= 30) {
    membershipStatus = "Guld";
  }
}

function addToHistoryArray() {
  //Skapar vi objekt och lägger in de i arrayen
  let storageObject = new CoffeStorage(
    coffees[selectedCoffee - 1].name,
    numberOfCups,
    coffees[selectedCoffee - 1].price * numberOfCups
  );
  transactionHistory.push(storageObject);
  // console.log(transactionHistory)
}
