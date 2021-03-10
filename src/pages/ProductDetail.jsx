import React from "react";
import Navigation from "../components/Navigation";
import { Button, Row, Col } from "react-bootstrap";
import logo from "../logo.svg";

export default function ProductDetail() {
  return (
    <div>
      <Navigation />
      <div className="container mt-4">
        <Row>
          <Col xs={6} md={4}>
            <img src={logo} alt="" />
          </Col>
          <Col xs={6} md={8}>
            <h5>Nama Produk</h5>
            <div className="flex3">
              <div className="text-secondary mr-2">HARGA</div>
              <h4>Rp 50000</h4>
            </div>
            <hr />
            <div className="flex3">
              <div className="text-secondary mr-2">WARNA</div>
              <div>
                <h6>Pilih variant</h6>
                <div>
                  <Button className="mr-2">1</Button>
                  <Button className="mr-2">1</Button>
                  <Button className="mr-2">1</Button>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex3">
              <div className="text-secondary mr-2">UKURAN</div>
              <div>
                <h6>Pilih variant</h6>
                <div>
                  <Button variant="secondary" className="mr-2">
                    M
                  </Button>
                  <Button className="mr-2">L</Button>
                  <Button className="mr-2">XL</Button>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex3">
              <div className="text-secondary mr-2">JUMLAH</div>
              <div>
                <h6>Atur jumlah</h6>
                <div>
                  <Button variant="secondary" className="mr-2">
                    -
                  </Button>
                  <Button className="mr-2">value</Button>
                  <Button className="mr-2">+</Button>
                </div>
              </div>
            </div>
            <hr />

            <Button variant="warning">Tambah ke Keranjang</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
