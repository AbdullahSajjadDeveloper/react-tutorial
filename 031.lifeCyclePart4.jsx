// Code:-

// 1. ProductIdAndQuantityAndAddToCart.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Importing Necessary User-Defined Components
import FunctionalCart from "./FunctionalCart";

class ProductIdAndQuantityAndAddToCart extends React.Component {
  constructor() {
    super();
    this.state = {
      productId: 0,
      qty: 0,
    };
  }
  addProduct = (pid) => {
    this.setState({
      productId: pid,
      qty: this.state.qty + 1,
    });
  };
  render() {
    return (
      <React.Fragment>
        <FunctionalCart
          ProductId={this.state.productId}
          Quantity={this.state.qty}
        />
        <h1>
          {this.state.qty} Noodles - Product ID ({this.state.productId})
        </h1>
        <button
          onClick={() => {
            this.addProduct(1432);
          }}
        >
          Add To Cart
        </button>
      </React.Fragment>
    );
  }
}

// Exporting ProductIdAndQuantityAndAddToCart Component
export default ProductIdAndQuantityAndAddToCart;

//2. FunctionalCart.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

class FunctionalCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.ProductId,
      qty: this.props.Quantity,
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.qty !== state.qty) {
      return { qty: props.qty };
    } else {
      return null;
    }
  }
  render() {
    return <React.Fragment></React.Fragment>;
  }
}

// Exporting FunctionalCart Component
export default FunctionalCart;

// 3. App.jsx:-

// Importing Necessary React Built-In Components
import React from "react";

// Importing Necessary React User-Defined Components
import ProductIdAndQuantityAndAddToCart from "./ProductIdAndQuantityAndAddToCart";

// Components
const App = () => {
  return (
    <React.Fragment>
      <ProductIdAndQuantityAndAddToCart />
    </React.Fragment>
  );
};

// Exporting App Component
export default App;

// 4. index.jsx:-

// Importing Necessary React Built-In Components
import React from "react";
import ReactDOM from "react-dom";

// Importing Necessary React User-Defined Components
import App from "./App";

// Making DOM Manupulation
ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);

