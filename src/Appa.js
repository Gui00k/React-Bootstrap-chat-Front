import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./App.css";
import Nav from "react-bootstrap/Nav";
import Poli from "./poli.png";

export default function Appa() {
  return (
    <Container>
      <div style={{ backgroundColor: "rgb(60, 53, 53) ", width: 1045 }}>
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col lg={1}>
            {" "}
            <Nav
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
              <Nav.Item>
                <Nav.Link eventKey="link-1">
                  <span class="bi bi-house-door-fill attach_btn-test border"></span>
                </Nav.Link>
                <Nav.Link eventKey="link-1">
                  {" "}
                  <span class="bi bi-chat-fill attach_btn-test border"></span>
                </Nav.Link>
                <Nav.Link eventKey="link-1">
                  {" "}
                  <span class="bi bi-pie-chart-fill attach_btn-test-1 border"></span>
                </Nav.Link>
                <Nav.Link eventKey="link-1">
                  {" "}
                  <span class="bi bi-building attach_btn-test border"></span>
                </Nav.Link>
                <Nav.Link eventKey="link-1">
                  {" "}
                  <span class="bi bi-gear attach_btn-test border"></span>
                </Nav.Link>
                <Nav.Link eventKey="link-1">
                  {" "}
                  <span class="bi bi-currency-dollar attach_btn-test border"></span>
                </Nav.Link>
                <Nav.Link eventKey="link-1">
                  {" "}
                  <span class="bi bi-tools attach_btn-test border"></span>
                </Nav.Link>
                <Nav.Link eventKey="link-1">
                  {" "}
                  <span
                    style={{ marginTop: 80 }}
                    class="bi bi-question-circle attach_btn-test border"
                  ></span>
                </Nav.Link>
                <Nav.Link eventKey="link-1">
                  {" "}
                  <span class="bi bi-person-circle attach_btn-test border"></span>
                </Nav.Link>
                <Nav.Link eventKey="link-1">
                  {" "}
                  <span class="bi bi-chevron-double-right attach_btn-test border"></span>
                </Nav.Link>
                <Nav.Link eventKey="link-1">Versao {"\n"} 12121</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col lg={4}>
            <div
              style={{
                backgroundColor: "rgb(29, 27, 27)",
                borderRadius: 15,
                width: 350,
                height: 600,
              }}
              class="  contacts_card;"
            >
              <div class="card-header">
                <div class="input-group">
                  <input
                    type="text"
                    placeholder="Search..."
                    name=""
                    class="form-control search"
                  />
                  <div class="input-group-prepend">
                    <span class="input-group-text search_btn">
                      <i class="fas fa-search"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="card-body contacts_body">
                <ui class="contacts">
                  <li class="active">
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img
                          src={Poli}
                          alt="100"
                          class="rounded-circle user_img"
                        />
                        <span class="online_icon"></span>
                      </div>
                      <div class="user_info">
                        <span>Guilherme</span>
                        <p>Gui is online</p>
                      </div>
                    </div>
                  </li>
                  <li class="active-1">
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img
                          src={Poli}
                          alt="100"
                          class="rounded-circle user_img"
                        />
                        <span class="online_icon offline"></span>
                      </div>
                      <div class="user_info ">
                        <span>Poli</span>
                        <p>Poli left 7 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li class="active-1">
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img
                          src={Poli}
                          alt="100"
                          class="rounded-circle user_img"
                        />
                        <span class="online_icon"></span>
                      </div>
                      <div class="user_info">
                        <span>Poli2</span>
                        <p>Poli is online</p>
                      </div>
                    </div>
                  </li>
                  <li class="active-1">
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img
                          src={Poli}
                          alt="100"
                          class="rounded-circle user_img"
                        />
                        <span class="online_icon offline"></span>
                      </div>
                      <div class="user_info">
                        <span>Poli3</span>
                        <p>Poli left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li class="active-1">
                    <div class="d-flex bd-highlight">
                      <div class="img_cont">
                        <img
                          src={Poli}
                          alt="100"
                          class="rounded-circle user_img"
                        />
                        <span class="online_icon offline"></span>
                      </div>
                      <div class="user_info">
                        <span>Poli3</span>
                        <p>Poli left 50 mins ago</p>
                      </div>
                    </div>
                  </li>
                </ui>
              </div>
              <div class="card-footer"></div>
            </div>
          </Col>
          <Col lg={7}>
            <div style={{ width: 680, height: 600 }} class="card">
              <div
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                class="card-header msg_head"
              >
                <div class="d-flex bd-highlight">
                  <div class="img_cont">
                    <img src={Poli} alt="100" class="rounded-circle user_img" />
                    <span class="online_icon"></span>
                  </div>
                  <div class="user_info">
                    <span>Chat with Khalid</span>
                    <p>1767 Messages</p>
                  </div>
                  <div class="video_cam">
                    <span>
                      <i class="fas fa-video"></i>
                    </span>
                    <span>
                      <i class="fas fa-phone"></i>
                    </span>
                  </div>
                </div>
                <span id="action_menu_btn">
                  <i class="fas fa-ellipsis-v"></i>
                </span>
                <div class="action_menu">
                  <ul>
                    <li>
                      <i class="fas fa-user-circle"></i> View profile
                    </li>
                    <li>
                      <i class="fas fa-users"></i> Add to close friends
                    </li>
                    <li>
                      <i class="fas fa-plus"></i> Add to group
                    </li>
                    <li>
                      <i class="fas fa-ban"></i> Block
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-body msg_card_body">
                <div class="d-flex justify-content-start mb-4">
                  <div class="img_cont_msg">
                    <img
                      src={Poli}
                      alt="100"
                      class="rounded-circle user_img_msg"
                    />
                  </div>
                  <div class="msg_cotainer">
                    Hi, how are you Gui?
                    <span class="msg_time">8:40 AM, Today</span>
                  </div>
                </div>
                <div class="d-flex justify-content-end mb-4">
                  <div class="msg_cotainer_send">
                    Hi Poli i am good tnx how about you?
                    <span class="msg_time_send">8:55 AM, Today</span>
                  </div>
                  <div class="img_cont_msg">
                    <img
                      src={Poli}
                      alt="100"
                      class="rounded-circle user_img_msg"
                    />
                  </div>
                </div>
                <div class="d-flex justify-content-start mb-4">
                  <div class="img_cont_msg">
                    <img
                      src={Poli}
                      alt="100"
                      class="rounded-circle user_img_msg"
                    />
                  </div>
                  <div class="msg_cotainer">
                    I am good too, How is it going?
                    <span class="msg_time">9:00 AM, Today</span>
                  </div>
                </div>
                <div class="d-flex justify-content-end mb-4">
                  <div class="msg_cotainer_send">
                    Going good, I'm getting ready for new challenges
                    <span class="msg_time_send">9:05 AM, Today</span>
                  </div>
                  <div class="img_cont_msg">
                    <img
                      src={Poli}
                      alt="100"
                      class="rounded-circle user_img_msg"
                    />
                  </div>
                </div>
                <div class="d-flex justify-content-start mb-4">
                  <div class="img_cont_msg">
                    <img
                      src={Poli}
                      alt="100"
                      class="rounded-circle user_img_msg"
                    />
                  </div>
                  <div class="msg_cotainer">
                    What did you think of this challenge?
                    <span class="msg_time">9:07 AM, Today</span>
                  </div>
                </div>
                <div class="d-flex justify-content-end mb-4">
                  <div class="msg_cotainer_send">
                    Very good, I hadn't made any app in full bootstrap and react
                    before, I learned a lot in this project
                    <span class="msg_time_send">9:10 AM, Today</span>
                  </div>
                  <div class="img_cont_msg">
                    <img
                      src={Poli}
                      alt="100"
                      class="rounded-circle user_img_msg"
                    />
                  </div>
                </div>
                <div class="d-flex justify-content-start mb-4">
                  <div class="img_cont_msg">
                    <img
                      src={Poli}
                      alt="100"
                      class="rounded-circle user_img_msg"
                    />
                  </div>
                  <div class="msg_cotainer">
                    Very good, so get ready for the next challenges
                    <span class="msg_time">9:12 AM, Today</span>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="">
                  <textarea
                    name=""
                    class="form-control type_msg"
                    placeholder="Type your message..."
                  ></textarea>

                  <div class="input-group-append">
                    <span class="input-group-text send_btn">
                      <i class=""></i>
                    </span>
                  </div>

                  <div
                    style={{
                      height: 40,
                      backgroundColor: "rgba(0, 0, 0, 0.74)",
                      borderRadius: 7,
                    }}
                    class="col-sm-12"
                  >
                    <div class="input-group-append">
                      <span class="input-group-text attach_btn">
                        <i class="bi bi-sort-alpha-up"></i>
                      </span>
                      <div class="input-group-append">
                        <span class="input-group-text attach_btn">
                          <i class="fa-solid fa-mobile-screen-button"></i>
                        </span>
                      </div>
                      <div
                        style={{ marginLeft: "auto" }}
                        class="input-group-append"
                      >
                        <span class="input-group-text attach_btn">
                          <i class="bi bi-files"></i>
                        </span>
                      </div>
                      <div class="input-group-append">
                        <span class="input-group-text attach_btn">
                          <i class="bi bi-paperclip"></i>
                        </span>
                      </div>
                      <div class="input-group-append">
                        <span class="input-group-text attach_btn">
                          <i class="fa-solid fa-rocket"></i>
                        </span>
                      </div>
                      <div class="">
                        <span class="input-group-text attach_btn">
                          <i class="bi bi-emoji-smile-fill"></i>
                        </span>
                      </div>
                      <div class="">
                        <span class="input-group-text attach_btn">
                          <i class="bi bi-mic-fill"></i>
                        </span>
                      </div>
                      <div class="send-btn">
                        <span class="input-group-text attach_btn">
                          <i class="bi bi-send-fill"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
      </div>
    </Container>
  );
}
