import React, { Component } from "react";
import Navigation from "../components/Navigation";
import db from "../data/products.json";
import { DropdownButton, Dropdown, InputGroup } from "react-bootstrap";
import Star from "../components/Stars";

class Home extends Component {
  state = {
    products: [...db],
  };
  toProduct(data) {
    console.log("data", data);
  }
  render() {
    const { products } = this.state;
    return (
      <>
        <Navigation />
        <div className="container mt-3">
          <div className="flexs mb-4">
            <div>Menampilkan {products.length} produk</div>
            <div className="flex2">
              <strong className="mr-2">Urutkan:</strong>
              <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title="Filter"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div className="list-product">
            {products.map((item, index) => (
              <div
                onClick={this.toProduct.bind(this, item)}
                className="card mb-3"
                style={{ width: "200px" }}
                key={index}
              >
                <img src={item.product_image} className="card-img-top" alt="" />
                <div className="card-body">
                  <div className="card-title">{item.product_name}</div>
                  <h6>
                    <strong>Rp {item.product_price}</strong>
                  </h6>
                  <div className="mb-1">
                    <small>{item.city}</small>
                  </div>
                  <Star />
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
