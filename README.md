# gruppuppgift


Webb21 gruppuppgift

# Genomgång av uppgift

Uppgiften går ut på att skapa ett system för en kafeteria.
Användaren ska kunna välja en sorts kaffe från en meny. Varje kaffesort ska ha ett pris.

```bash
const coffees = [
  {name: 'Brygg Kaffe', price: 20},
  {name: 'Cappucino', price: 30},
  {name: 'Latte', price: 40}
]
```

Använder ska kunna skriva in antalet koppar den önskar av den valda kaffesorten och sedan trycka "Köp".
Användarens transaktion ska sparas ner.
Om användaren har köpt mindre än 10 koppar så uppnår den "Brons" status. Detta ska skrivas ut för användaren.
Om användaren har köpt 10 koppar eller mer men mindre än 30 koppar så uppnår den "Silver" status. Detta ska skrivas ut för användaren.
Om användaren har köpt 30 koppar eller mer så uppnår den "Guld" status. Detta ska skrivas ut för användaren.

Användarens transaktionshistorik ska skrivas ut (kaffesort, antal, totalpris)

Det totala värdet för användarens transaktioner ska skrivas ut

- Så här ser det ut när användaren kommer in på sajten

  ![01.png](images/Screenshot%2021-09-26%at%21.06.11.png)

- Så här ser det ut när användaren först köpt 5 bryggkaffe och sedan 4 Cappuccino

  ![02.png](images/Screenshot%2021-09-26%at%21.07.01.png)

- Så här ser det ut när användaren först köpt 5 bryggkaffe, sedan 4 Cappuccino och sedan 10 latten

  ![03.png](Screenshot%2021-09-26%at%21.07.38.png)
  
  # Stilpoäng
  - Lägg in javascripten i en egen fil. ✅
  - Rendera ut innehållet i Select-elementet med hjälp av en array ✅
  - Se till att användaren inte kan mata in ett negativt antal kaffekoppar ✅
  - Se till att användaren inte kan mata in mer än 10 koppar som antal
    - Skriv ut ett felmeddelande om de försöker göra det ✅
  - Lista transaktioner i omvändordning (d.v.s senast först) ✅
  - Skriv endast ut "Dina Transaktioner" om användaren har transaktioner, annars skriver ni ut " Du har inga transaktioner" ✅
  - Minska priserna med 10% när användaren har handlat för 500 kr ✅
  - Minska priserna med 15% när användaren har handlat för 1000kr ✅

  
