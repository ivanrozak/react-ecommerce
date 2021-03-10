import React from "react";
import Navigation from "../components/Navigation";
import { Button, Row, Col } from "react-bootstrap";

export default function Cart() {
  return (
    <div>
      <Navigation />
      <div className="container mt-4">
        <Row>
          <Col xs={7} md={8}>
            <div className="flexs">
              <div className="text-secondary">
                <input className="mr-2" type="checkbox" />
                Pilih Semua Produk
              </div>
              <div className="primary f-bold">Hapus</div>
            </div>
            <hr />
            looping cart
          </Col>
          <Col xs={5} md={4}>
            <div className="card px-2 py-2">
              <div>
                <strong>Ringkasan Belanja</strong>
              </div>
              <hr />
              <div className="flexs mb-3">
                <div className="text-secondary">Total Harga</div>
                <div className="f-bold">RP.00000</div>
              </div>
              <Button variant="primary">Beli</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
