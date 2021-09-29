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

function onBuyButtonClick() {
    //funktion som triggar funktioner vid köp
    howManyCups();
    if (validAmount) {
      coffeeSort();
      totalCups();
      calculateCoffeePrice();
      totalAmountOfPurchases();
      membershipStatusCheck();
      showHistory();
      addToHistoryArray();
  
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
  }

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
  selectedCoffee = document.getElementById("typeOfCoffee").selectedIndex
    return selectedCoffee
  //tar fram vilket sorts kaffe som köpts
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
}

function showHistory() {
  //Visar transaktionshistoriken för kunden
  const parent = document.getElementById("transactions"); //element som vi fäster våra transaktioner till
  const child = document.createElement("p"); //skapar en ny p tagg på ny rad
  const defaultText = document.getElementById("noTransactions")

  child.innerHTML =
    //texten som läggs på den nya taggen
    `Du har köpt ${numberOfCups} st ${coffees[selectedCoffee].name} för ${
     updatedPriceOfCoffee
    }kr. Summa: ${updatedPriceOfCoffee * numberOfCups}`;
  parent.appendChild(child); //fäster vår nya tagg på föräldra taggen

  let transactionFirst = document.getElementById("letItBeFirst") 
  transactionFirst.insertBefore(child, transactionFirst.childNodes[0])//Gör att transaktionen hamnar högst upp
  defaultText.style.display = "none" //gör du har inga transaktioner osynlig

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
    coffees[selectedCoffee].name,
    numberOfCups,
    updatedPriceOfCoffee * numberOfCups
  );
  transactionHistory.push(storageObject);
  console.log(transactionHistory)
}

function calculateCoffeePrice() {
  // Hämta original priset för kaffet
  let coffeePrice = coffees[selectedCoffee].price

  // Räkna prisändring -- Fick tips att använda 1.0
  let priceChange = 1.0; //= 1.0 // 1.0 == 100%, ingen rabatt 1.0 * 300 = 300

  // 1000kr måste vara först annars kommer vi aldrig att få rabatten på 15%
  // Vid 1000kr, minska 15%
  
  if (totalMoneySpent >= 500){
    priceChange = 0.90;
    
    if (totalMoneySpent >= 1000){
      priceChange = 0.85;
      
    } else {
      
    }
  }
  // if (totalMoneySpent >= 1000) {
  //   priceChange = 0.85; // 15% rabatt --- 100 * 0.85 = 85
    
  // }
  // // Vid 500kr, minska 10%
  // else if (totalMoneySpent >= 500) {
  //   priceChange = 0.90; // 10% rabatt --- 100 * 0.9 = 90
  // }

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

