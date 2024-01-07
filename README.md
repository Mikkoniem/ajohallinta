# ajohallinta

# Ajohallintaohjelma

Tämä on yksinkertainen ajohallintaohjelma, joka on rakennettu Reactilla. Ohjelma mahdollistaa uusien ajojen luomisen ja näyttää Maanmittauslaitoksen kartan.

## Komponentit

### 1. LuoAjoPage.tsx

Tämä komponentti tarjoaa lomakkeen uuden ajon luomiseksi. Se sisältää seuraavat tiedot:
- Asiakas
- Ajankohta
- Osoite
- Paikkakunta
- Yhteystiedot
- Lisätietoja

Lomakkeen tiedot lähetetään konsoliin `handleSubmit`-funktion avulla.

### 2. Kartta.tsx

Tämä komponentti näyttää Maanmittauslaitoksen kartan. Se käyttää Leaflet-kirjastoa ja asettaa karttanäkymän Helsingin koordinaatteihin.

### 3. App.tsx

Pääsovelluksen komponentti, joka sisältää reitityksen. Käyttäjä voi kirjautua sisään antamalla etu- ja sukunimensä. Onnistuneen kirjautumisen jälkeen käyttäjä ohjataan "Ajonhallinta"-sivulle.

### 4. AjoHallintaPage.tsx

Tämä sivu näyttää pääsivun ajohallintanäkymän. Käyttäjä voi navigoida "Kartta"-sivulle tai "Luo uusi ajo"-sivulle navigaatiopalkin avulla. Tämä sivu sisältää myös suojauksen, joka estää käyttäjää pääsemästä ajohallintasivulle ilman kirjautumista.

### 5. LoginForm.tsx

Tämä komponentti tarjoaa kirjautumislomakkeen, joka sisältää kentät etu- ja sukunimelle. Kirjautumisen jälkeen käyttäjä ohjataan "Ajonhallinta"-sivulle.

## Käyttöohjeet

1. Kirjaudu sisään antamalla etu- ja sukunimesi.
2. Kirjautumisen jälkeen voit navigoida "Ajonhallinta"-sivulle.
3. Ajonhallintasivulla voit käyttää karttaa ja luoda uusia ajoja.

## Asennus

1. Kloonaa repositorio.
2. Asenna riippuvuudet komennolla: `npm install`
3. Käynnistä sovellus komennolla: `npm start`

## Lisätietoja

Tämä ohjelma on kehitetty Reactilla ja käyttää Leaflet-karttakirjastoa. Voit lisätä uusia toiminnallisuuksia ja kehittää sitä edelleen tarpeidesi mukaan.

