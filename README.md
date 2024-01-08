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










# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
