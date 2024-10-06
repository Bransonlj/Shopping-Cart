# Shopping Cart App 

Shopping Cart is a frontend Reactjs application that uses the [Fake Store API](https://fakestoreapi.com/)

# How to run

Run it just like any other React app!

```
npm install
npm run dev
```

# Assumptions

* Shopping cart icon with number of products will only count the number of unique products in the cart. (Similar to real-world e-commerce apps like Shoppee)
* Shopping cart data is only persisted on the client.

# Technical decisions

* I Used context for state management for shopping cart contents as many components within the app will require shopping cart content information and manipulation. This is prefered over passing props through the UI tree as it is verbose and inconvenient and leads to prop drilling.

* Shopping cart contents are stored in the browser local storage in order to persist data.

* Unfortunately, I was unable to write unit tests as I was unfamiliar with using Jest to test React components and could not learn it in time due to time constraints.
