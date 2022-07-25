import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./App.css";
import Nav from "react-bootstrap/Nav";
import Poli from "./poli.png";

export default function App() {
  return (
    <Container>
      <div
        style={{ backgroundColor: "rgb(60, 53, 53) ", height: 80, width: 1125 }}
      >
        <Row>
          <Col lg={12}>
            <Nav
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
              <Nav.Item>
                <Nav.Link href="poli.png">
                  <img src={Poli} alt="100" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">
                  <span
                    style={{ marginTop: 23 }}
                    class="bi bi-chat-left-text attach_btn-test-1"
                  >
                    {" "}
                    POLICHAT
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <span class=" attach_btn-test">Poli</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">
                  <span
                    style={{ fontSize: 20, color: "white" }}
                    class=" bi-chevron-down attach_btn-test-1"
                  ></span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">
                  {" "}
                  <span
                    style={{
                      width: 15,
                      backgroundColor: "green",
                      bordeRadius: 12,
                      alignContent: "center",
                    }}
                    class="bi bi-whatsapp attach_btn-test-1"
                  ></span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">
                  <i style={{}}>
                    {" "}
                    Canal SDR 0001 <br></br> 90/1000 Contatos-dia{" "}
                  </i>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">
                  {" "}
                  <span
                    style={{ fontSize: 25, color: "white" }}
                    class=" bi-chevron-down attach_btn-test-1"
                  ></span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">
                  {" "}
                  <i
                    style={{
                      width: 130,
                      height: 60,
                      color: "white",
                      backgroundColor: "rgba(255, 255, 0, 0.71) ",
                      textAlign: "center",

                      justifyContent: "center",
                    }}
                    class="nav-link border "
                    href="#"
                  >
                    Indique para Ganhar
                  </i>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">
                  <span class="bi bi-share-fill attach_btn-test-1"></span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">
                  {" "}
                  <span class="bi-person-workspace attach_btn-test-1"></span>{" "}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">
                  {" "}
                  <span
                    style={{ textAlign: "center" }}
                    class="bi bi-globe attach_btn-test-1"
                  ></span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">
                  <span class="bi bi-megaphone-fill attach_btn-test-1"></span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">
                  <span class="bi bi-brightness-high-fill attach_btn-test-1"></span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">
                  <span class="bi bi-toggle-on attach_btn-test-1"></span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">
                  <span class="bi bi-moon-stars-fill attach_btn-test-1"></span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}

        {/* Columns are always 50% wide, on mobile and desktop */}
      </div>
    </Container>
  );
}
