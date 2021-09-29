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

Använder ska kunna skriva in antalet koppar den önskar av den valda kaffesorten och sedan trycka "Köp"
Användarens transaktion ska sparas ner.
Om användaren har köpt mindre än 10 koppar så uppnår den "Brons" status. Detta ska skrivas ut för användaren.
Om användaren har köpt 10 koppar eller mer men mindre än 30 koppar så uppnår den "Silver" status. Detta ska skrivas ut för användaren.
Om användaren har köpt 30 koppar eller mer så uppnår den "Guld" status. Detta ska skrivas ut för användaren.

Användarens transaktionshistorik ska skrivas ut (kaffesort, antal, totalpris)

Det totala värdet för användarens transaktioner ska skrivas ut

- Så här ser det ut när användaren kommer in på sajten

![01.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d207f237-1e87-4ec0-9d2a-8536a1968f5d/Screenshot_2021-09-26_at_21.06.11.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210929%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210929T105120Z&X-Amz-Expires=86400&X-Amz-Signature=159721889d13feb5a37f62d5bb4166501cc959c03f4d93c258927f5dc22b802d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screenshot%25202021-09-26%2520at%252021.06.11.png%22)

- Så här ser det ut när användaren först köpt 5 bryggkaffe och sedan 4 Cappuccino
  ![02.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2291feb3-93e2-4ebb-9bdd-23eaad7ae817/Screenshot_2021-09-26_at_21.07.01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210929%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210929T105418Z&X-Amz-Expires=86400&X-Amz-Signature=8edc37ef00bef0ae2ff24b567fe702494f9da4097dc9a5bb95d1152911efc51c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screenshot%25202021-09-26%2520at%252021.07.01.png%22)
- Så här ser det ut när användaren först köpt 5 bryggkaffe, sedan 4 Cappuccino och sedan 10 latten
  ![03.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/48f1034d-f05f-49af-a6ed-881e697e6786/Screenshot_2021-09-26_at_21.07.38.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210929%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210929T105523Z&X-Amz-Expires=86400&X-Amz-Signature=19ee6b76d1f9500c2774f62a2fffbccb8b12e711ed1e57cc92e5666760afd0e4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screenshot%25202021-09-26%2520at%252021.07.38.png%22)
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
