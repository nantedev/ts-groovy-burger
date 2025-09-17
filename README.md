# Groovy Burger

## 1. installation du projet

```
yarn install
```

## 2. connexion backend firebase :

firebase-config.js > ces variables d'environnement seront consommés via process.env.REACT_APP_API_KEY

Si projet initilisé avec Vite.JS :

```

VITE_APP_API_KEY = ???
VITE_APP_AUTH_DOMAIN = ???
VITE_APP_PROJECT_ID = ???
VITE_APP_STORAGE_BUCKET = ???
VITE_APP_MESSAGING_SENDER_ID = ???
VITE_APP_APP_ID = ???

```

firebase-config.js > ces variables d'environnement seront consommés via import.meta.env.VITE_APP_API_KEY

## 3. Pour lancer le projet

```

yarn dev

```
