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

class CoffeStorage {
  constructor(typeOfCoffe, amountOfCups, purchaseAmount) {
    this.typeOfCoffe = typeOfCoffe;
    this.amountOfCups = amountOfCups;
    this.purchaseAmount = purchaseAmount;
  }
}

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

//funktion som triggar funktioner vid köp
function onBuyButtonClick() {
  howManyCups();
  if (validAmount) {
    coffeeSort();
    totalCups();
    totalPurchasePrice();
    totalAmountOfPurchases();
    membershipStatusCheck();
    showHistory();
    addToHistoryArray();
    displayCustomerInformation()
  }
}
//Räknar ut mängden koppar som köpts vid ett tillfälle
function howManyCups() {

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
//tar fram vilket sorts kaffe som köpts
function coffeeSort() {
  return selectedCoffee = document.getElementById("typeOfCoffee").selectedIndex
}
//summerar den totala mängden av koppar
function totalCups() {
  totalNumberOfCups += numberOfCups;
}
//beräknar kaffepriset och om det är rabatterat
function totalPurchasePrice() {
  // Hämta original priset för kaffet
  let coffeePrice = coffees[selectedCoffee].price

  // Räkna prisändring -- Fick tips att använda 1.0
  let priceChange = 1.0; //= 1.0 // 1.0 == 100%, ingen rabatt 1.0 * 300 = 300

  if (totalMoneySpent >= 500) {
    priceChange = 0.90;

    if (totalMoneySpent >= 1000) {
      priceChange = 0.85;
    }
  }
  let newCoffeePrice = priceChange * coffeePrice

  // console.log({
  //   totalSpent: totalMoneySpent,
  //   coffeePrice: coffeePrice,
  //   priceChange: priceChange,
  //   newCoffePrice: newCoffeePrice
  // })

  // Uppdatera priset på kaffe
  updatedPriceOfCoffee = newCoffeePrice
}
//Totala kostnaden av köpta koppar
function totalAmountOfPurchases() {
  // console.log(priceOfCoffee * numberOfCups);
  totalMoneySpent += updatedPriceOfCoffee * numberOfCups;
}
//Kontrollerar vilken status medlemskapet har
function membershipStatusCheck() {
  if (totalNumberOfCups < 10) {
    membershipStatus = "Brons";
  } else if (totalNumberOfCups >= 10 && totalNumberOfCups < 30) {
    membershipStatus = "Silver";
  } else if (totalNumberOfCups >= 30) {
    membershipStatus = "Guld";
  }
}
//Visar transaktionshistoriken för kunden
function showHistory() {

  const parent = document.getElementById("transactions"); //element som vi fäster våra transaktioner till
  const child = document.createElement("p"); //skapar en ny p tagg på ny rad
  const defaultText = document.getElementById("noTransactions")

  //texten som läggs på den nya taggen
  child.innerHTML =
    `Du har köpt ${numberOfCups} st ${coffees[selectedCoffee].name} för ${
     updatedPriceOfCoffee
    }kr styck. Summa: ${updatedPriceOfCoffee * numberOfCups}kr`;
  parent.appendChild(child); //fäster vår nya tagg på föräldra taggen

  let transactionFirst = document.getElementById("letItBeFirst")
  transactionFirst.insertBefore(child, transactionFirst.childNodes[0]) //Gör att transaktionen hamnar högst upp
  defaultText.style.display = "none" //gör du har inga transaktioner osynlig

}
//Skapar vi objekt och lägger in de i arrayen
function addToHistoryArray() {

  let storageObject = new CoffeStorage(
    coffees[selectedCoffee].name,
    numberOfCups,
    updatedPriceOfCoffee * numberOfCups
  );
  transactionHistory.push(storageObject);
  console.log(transactionHistory)
}
//Tar fram kund info och visar högst upp
function displayCustomerInformation() {
  const dicountText = document.getElementById("discount"); //kontrollerar vilken discount man har och skriver ut den
  if (totalMoneySpent >= 500 && totalMoneySpent < 1000) {
    dicountText.innerHTML = "Du har nu 10% rabatt på ordinarie priser."
  } else if (totalMoneySpent >= 1000) {
    dicountText.innerHTML = "Du har nu 15% rabatt på ordinarie priser."
  }
  //Show the results under input box
  const totalResult = document.getElementById("totalSection"); //Visar totala resultatet att köpen
  totalResult.innerHTML = `Du har handlat för ${totalMoneySpent}kr <br/> Medlemskaps status: ${membershipStatus}`;
}

// Uppdatera kaffe alternativen
function updateCoffeSelectionView() {

  // Hämta select element från index.html
  const selectElement = document.getElementById("typeOfCoffee")

  for (let index = 0; index < coffees.length; index++) {
    const coffeeObject = coffees[index];

    const optionValue = index + 1 // Plussar med 1 för att få samma värde som innan
    const optionText = `${coffeeObject.name} - ${coffeeObject.price} kr`

    // Skapar nytt option element
    const option = document.createElement("option");
    option.value = optionValue
    option.text = optionText

    // Lägger till nytt element i nya select-element taggen
    selectElement.appendChild(option)

    console.log({
      optionText: optionText,
      optionValue: optionValue
    })
  }
}

// Körs enbart när vi laddar koden första gången
console.log("Laddar in gruppppgift.js: Start")
updateCoffeSelectionView()
console.log("Laddar in gruppppgift.js: Stop")
