class CoffeStorage {
  constructor(typeOfCoffe, amountOfCups, purchaseAmount) {
    this.typeOfCoffe = typeOfCoffe;
    this.amountOfCups = amountOfCups;
    this.purchaseAmount = purchaseAmount;
  }
}

const coffees = [{
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
let updatedPriceOfCoffee; // Nya priset för en kaffe med rabatt

//Totala summor
let totalNumberOfCups = 0;
let totalMoneySpent = 0;

let membershipStatus = "";

function howManyCups() {
  //Räknar ut mängden koppar som köpts vid ett tillfälle
  numberOfCups = Number(document.getElementById("coffee").value); //number gör att det blir en integer istället för en string
  if (numberOfCups > 0 && numberOfCups < 10) { //kontrollerar om antal koppar är inom godkänt spann
    validAmount = true //för att tillåta validAmount att användas igen om man skrivit ett negativt värde innan
    return numberOfCups;
  } else if (numberOfCups <= 0) {
    alert("För lågt antal angivet. Ange antal koppar köpta mellan 1-10");
    return (validAmount = false);
  } else if (numberOfCups > 10) {
    alert("För högt antal angivet. Ange antal koppar köpta mellan 1-10");
    return (validAmount = false);
  }
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
    calculateCoffeePrice()
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
      updatedPriceOfCoffee
    }kr. Summa: ${updatedPriceOfCoffee * numberOfCups}`;
  parent.appendChild(child); //fäster vår nya tagg på förälra taggen
}

function totalCups() {
  //summerar den totala mängden av koppar
  totalNumberOfCups += numberOfCups;
}

function totalAmountOfPurchases() {
  //Totala kostnaden av köpta koppar
  priceOfCoffee = updatedPriceOfCoffee;
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
    updatedPriceOfCoffee * numberOfCups
  );
  transactionHistory.push(storageObject);
  // console.log(transactionHistory)
}

function calculateCoffeePrice() {
  // Hämta original priset för kaffet
  let coffeePrice = coffees[selectedCoffee - 1].price
  // Räkna prisändring -- Fick tips att använda 1.0
  let priceChange = 1.0; //= 1.0 // 1.0 == 100%, ingen rabatt 1.0 * 300 = 300

  // 1000kr måste vara först annars kommer vi aldrig att få rabatten på 15%
  // Vid 1000kr, minska 15%
  if (totalMoneySpent >= 1000) {
    priceChange = 0.85; // 15% rabatt --- 100 * 0.85 = 85
  }
  // Vid 500kr, minska 10%
  else if (totalMoneySpent >= 500) {
    priceChange = 0.90; // 10% rabatt --- 100 * 0.9 = 90
  }
  let newCoffeePrice = priceChange * coffeePrice

  console.log({
    totalSpent: totalMoneySpent,
    coffeePrice: coffeePrice,
    priceChange: priceChange,
    newCoffePrice: newCoffeePrice
  })

  // Uppdatera priset på kaffe
  updatedPriceOfCoffee = newCoffeePrice

}