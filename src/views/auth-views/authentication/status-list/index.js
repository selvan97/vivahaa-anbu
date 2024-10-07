import {
  Button,
  Card,
  Carousel,
  Col,
  Collapse,
  Dropdown,
  Menu,
  Radio,
  Row,
  Space,
  Tabs,
} from "antd";
import {
  MoreOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons";
import ProfileCandidate from "../../../../assets/vivaahaa/profilecandidate.png";
import EmptyImg from "../../../../assets/vivaahaa/empty.svg";
import { VerifyIcon } from "assets/svg/icon";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { RiUserAddLine } from "react-icons/ri";

const menu = (
  <Menu
    items={[
      {
        label: "1st menu item",
        key: "1",
      },
      {
        label: "2nd menu item",
        key: "2",
      },
      {
        label: "3rd menu item",
        key: "3",
      },
    ]}
  />
);
const StatusList = () => {
  const { Panel } = Collapse;
  const items = [
    {
      key: "1",
      label: "Requests",
      children: (
        <div className="custom_profile_tab_inner">
          <Tabs
            defaultActiveKey="11"
            indicator={{ size: 0 }}
            items={[
              {
                label: <div className="custom-label">Pending Requests<div className="indicator"></div></div>,
                key: "11",
                children: (
                  <>
                    <Link to="/auth/home" className="desktop_profile_list">
                      <Card>
                        <Row gutter={[16, 16]} className="justify-content-between">
                          <Col span={6}>
                            <Carousel arrows infinite={false}>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                            </Carousel>
                          </Col>
                          <Col span={12}>
                            <div className="profile_details status">
                              <div className="profile_head">
                                <div className="top">
                                  <div className="left">
                                    <div className="title">Anitha G</div>
                                    <div className="ids">(12345678)</div>
                                    <VerifyIcon />
                                  </div>
                                  <div className="right">
                                    <div>
                                      <Dropdown overlay={menu}>
                                        <Button
                                          onClick={(e) => e.preventDefault()}
                                          className="more_btn"
                                        >
                                          <Space>
                                            <MoreOutlined className="icon" />
                                          </Space>
                                        </Button>
                                      </Dropdown>
                                    </div>
                                  </div>
                                </div>
                                <div className="bottom">
                                  <div className="online_text">
                                    Online 2h ago
                                  </div>
                                  <Link to="/auth/home" className="chat_text">
                                    Chat now
                                  </Link>
                                </div>
                              </div>

                              <Row gutter={10} className="list_text">
                                <Col span={12}>
                                  <p className="text">23 Years</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">BBA</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">5 Ft 5 In</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">UI/UX Designer</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Hindu, Nadar</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Never Married</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Tamil, English</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">
                                    Chennai, Tamilnadu, India
                                  </p>
                                </Col>
                              </Row>

                              <Row>
                                <Col span={24}>
                                  <div className="profile_note mt-3">
                                    You requested her to add Photo on 30 Apr
                                    2024
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col span={6}>
                            <div className="action_view">
                              <div className="action_btn">
                                <div className="outer_btn">
                                  <Button
                                    className="btn_icon"
                                    shape="circle"
                                    icon={<RiUserAddLine className="icon" />}
                                  ></Button>
                                </div>
                                <span className="text">
                                  Upgrade to connect
                                </span>
                              </div>
                              <div className="match_score">
                                Match Score <span>70%</span>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    </Link>

                    <Link to="/auth/home" className="desktop_profile_list">
                      <Card>
                        <Row gutter={[16, 16]} className="justify-content-between">
                          <Col span={6}>
                            <Carousel arrows infinite={false}>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                            </Carousel>
                          </Col>
                          <Col span={12}>
                            <div className="profile_details status">
                              <div className="profile_head">
                                <div className="top">
                                  <div className="left">
                                    <div className="title">Anitha G</div>
                                    <div className="ids">(12345678)</div>
                                    <VerifyIcon />
                                  </div>
                                  <div className="right">
                                    <div>
                                      <Dropdown overlay={menu}>
                                        <Button
                                          onClick={(e) => e.preventDefault()}
                                          className="more_btn"
                                        >
                                          <Space>
                                            <MoreOutlined className="icon" />
                                          </Space>
                                        </Button>
                                      </Dropdown>
                                    </div>
                                  </div>
                                </div>
                                <div className="bottom">
                                  <div className="online_text">
                                    Online 2h ago
                                  </div>
                                  <Link to="/auth/home" className="chat_text">
                                    Chat now
                                  </Link>
                                </div>
                              </div>

                              <Row gutter={10} className="list_text">
                                <Col span={12}>
                                  <p className="text">23 Years</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">BBA</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">5 Ft 5 In</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">UI/UX Designer</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Hindu, Nadar</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Never Married</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Tamil, English</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">
                                    Chennai, Tamilnadu, India
                                  </p>
                                </Col>
                              </Row>

                              <Row>
                                <Col span={24}>
                                  <div className="profile_note mt-3">
                                    You requested her to add Photo on 30 Apr
                                    2024
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col span={6}>
                            <div className="action_view">
                              <div className="action_btn">
                                <div className="outer_btn">
                                  <Button
                                    className="btn_icon"
                                    shape="circle"
                                    icon={<FaRegHeart className="icon" />}
                                  ></Button>
                                </div>
                                <span className="text">Add to shotlist</span>
                              </div>
                              <div className="action_btn">
                                <div className="outer_btn">
                                  <Button
                                    className="btn_icon"
                                    shape="circle"
                                    icon={<RiUserAddLine className="icon" />}
                                  ></Button>
                                </div>
                                <span className="text">
                                  Upgrade to connect
                                </span>
                              </div>
                              <div className="match_score">
                                Match Score <span>70%</span>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    </Link>
                  </>
                ),
              },
              {
                label: <div className="custom-label">Accepted Requests<div className="indicator"></div></div>,
                key: "22",
                children: (
                  <>
                    <Row justify="center">
                      <Col span={24}>
                        <div className="empty_card">
                          <img
                            src={EmptyImg}
                            alt="Empty"
                            className="img-fluid"
                          />
                          <div className="title">
                            There are no Accepted Requests
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </>
                ),
              },
              {
                label: <div className="custom-label">Sent Requests<div className="indicator"></div></div>,
                key: "33",
                children: (
                  <Row justify="center">
                    <Col span={24}>
                      <div className="empty_card">
                        <img
                          src={EmptyImg}
                          alt="Empty"
                          className="img-fluid"
                        />
                        <div className="title">
                          There are no Sent Requests
                        </div>
                      </div>
                    </Col>
                  </Row>
                ),
              },
            ]}
          />
        </div>
      ),
    },
    {
      key: "2",
      label: "Accepted (1)",
      children: (
        <div className="custom_profile_tab_inner">
          <Tabs
            defaultActiveKey="11"
            indicator={{ size: 0 }}
            items={[
              {
                label: <div className="custom-label">All Request<div className="indicator"></div></div>,
                key: "11",
                children: (
                  <>
                    <Link to="/auth/home" className="desktop_profile_list">
                      <Card>
                        <Row gutter={[16, 16]} className="justify-content-between">
                          <Col span={6}>
                            <Carousel arrows infinite={false}>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                            </Carousel>
                          </Col>
                          <Col span={12}>
                            <div className="profile_details status">
                              <div className="profile_head">
                                <div className="top">
                                  <div className="left">
                                    <div className="title">Anitha G</div>
                                    <div className="ids">(12345678)</div>
                                    <VerifyIcon />
                                  </div>
                                  <div className="right">
                                    <div>
                                      <Dropdown overlay={menu}>
                                        <Button
                                          onClick={(e) => e.preventDefault()}
                                          className="more_btn"
                                        >
                                          <Space>
                                            <MoreOutlined className="icon" />
                                          </Space>
                                        </Button>
                                      </Dropdown>
                                    </div>
                                  </div>
                                </div>
                                <div className="bottom">
                                  <div className="online_text">
                                    Online 2h ago
                                  </div>
                                  <Link to="/auth/home" className="chat_text">
                                    Chat now
                                  </Link>
                                </div>
                              </div>

                              <Row gutter={10} className="list_text">
                                <Col span={12}>
                                  <p className="text">23 Years</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">BBA</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">5 Ft 5 In</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">UI/UX Designer</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Hindu, Nadar</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Never Married</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Tamil, English</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">
                                    Chennai, Tamilnadu, India
                                  </p>
                                </Col>
                              </Row>

                              <Row>
                                <Col span={24}>
                                  <div className="profile_note mt-3">
                                    You requested her to add Photo on 30 Apr
                                    2024
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col span={6}>
                            <div className="action_view">
                              <div className="action_btn">
                                <div className="outer_btn">
                                  <Button
                                    className="btn_icon"
                                    shape="circle"
                                    icon={<RiUserAddLine className="icon" />}
                                  ></Button>
                                </div>
                                <span className="text">
                                  Upgrade to connect
                                </span>
                              </div>
                              <div className="match_score">
                                Match Score <span>70%</span>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    </Link>
                    <Link to="/auth/home" className="desktop_profile_list">
                      <Card>
                        <Row gutter={[16, 16]} className="justify-content-between">
                          <Col span={6}>
                            <Carousel arrows infinite={false}>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                            </Carousel>
                          </Col>
                          <Col span={12}>
                            <div className="profile_details status">
                              <div className="profile_head">
                                <div className="top">
                                  <div className="left">
                                    <div className="title">Anitha G</div>
                                    <div className="ids">(12345678)</div>
                                    <VerifyIcon />
                                  </div>
                                  <div className="right">
                                    <div>
                                      <Dropdown overlay={menu}>
                                        <Button
                                          onClick={(e) => e.preventDefault()}
                                          className="more_btn"
                                        >
                                          <Space>
                                            <MoreOutlined className="icon" />
                                          </Space>
                                        </Button>
                                      </Dropdown>
                                    </div>
                                  </div>
                                </div>
                                <div className="bottom">
                                  <div className="online_text">
                                    Online 2h ago
                                  </div>
                                  <Link to="/auth/home" className="chat_text">
                                    Chat now
                                  </Link>
                                </div>
                              </div>

                              <Row gutter={10} className="list_text">
                                <Col span={12}>
                                  <p className="text">23 Years</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">BBA</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">5 Ft 5 In</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">UI/UX Designer</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Hindu, Nadar</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Never Married</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Tamil, English</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">
                                    Chennai, Tamilnadu, India
                                  </p>
                                </Col>
                              </Row>

                              <Row>
                                <Col span={24}>
                                  <div className="profile_note mt-3">
                                    You requested her to add Photo on 30 Apr
                                    2024
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col span={6}>
                            <div className="action_view">
                              <div className="action_btn">
                                <div className="outer_btn">
                                  <Button
                                    className="btn_icon"
                                    shape="circle"
                                    icon={<FaRegHeart className="icon" />}
                                  ></Button>
                                </div>
                                <span className="text">Add to shotlist</span>
                              </div>
                              <div className="action_btn">
                                <div className="outer_btn">
                                  <Button
                                    className="btn_icon"
                                    shape="circle"
                                    icon={<RiUserAddLine className="icon" />}
                                  ></Button>
                                </div>
                                <span className="text">
                                  Upgrade to connect
                                </span>
                              </div>
                              <div className="match_score">
                                Match Score <span>70%</span>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    </Link>
                  </>
                ),
              },
              {
                label: <div className="custom-label">Filtered Out<div className="indicator"></div></div>,
                key: "22",
                children: (
                  <>
                    <Row justify="center">
                      <Col span={24}>
                        <div className="empty_card">
                          <img
                            src={EmptyImg}
                            alt="Empty"
                            className="img-fluid"
                          />
                          <div className="title">
                            There are no Pending Invitations to Connect
                          </div>
                          <Link to="/auth/home" className="underline_link">
                            View My Matches
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </>
                ),
              },
            ]}
          />
        </div>
      ),
    },
    {
      key: "3",
      label: "Received",
      children: (
        <div className="custom_profile_tab_inner">
          <Tabs
            indicator={{ size: 0 }}
            items={[
              {
                label: <div className="custom-label">Accepted Invitations<div className="indicator"></div></div>,
                key: "11",
                children: (
                  <>
                    <Link to="/auth/home" className="desktop_profile_list">
                      <Card>
                        <Row gutter={[16, 16]} className="justify-content-between">
                          <Col span={6}>
                            <Carousel arrows infinite={false}>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                            </Carousel>
                          </Col>
                          <Col span={12}>
                            <div className="profile_details status">
                              <div className="profile_head">
                                <div className="top">
                                  <div className="left">
                                    <div className="title">Anitha G</div>
                                    <div className="ids">(12345678)</div>
                                    <VerifyIcon />
                                  </div>
                                  <div className="right">
                                    <div>
                                      <Dropdown overlay={menu}>
                                        <Button
                                          onClick={(e) => e.preventDefault()}
                                          className="more_btn"
                                        >
                                          <Space>
                                            <MoreOutlined className="icon" />
                                          </Space>
                                        </Button>
                                      </Dropdown>
                                    </div>
                                  </div>
                                </div>
                                <div className="bottom">
                                  <div className="online_text">
                                    Online 2h ago
                                  </div>
                                  <Link to="/auth/home" className="chat_text">
                                    Chat now
                                  </Link>
                                </div>
                              </div>

                              <Row gutter={10} className="list_text">
                                <Col span={12}>
                                  <p className="text">23 Years</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">BBA</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">5 Ft 5 In</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">UI/UX Designer</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Hindu, Nadar</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Never Married</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Tamil, English</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">
                                    Chennai, Tamilnadu, India
                                  </p>
                                </Col>
                              </Row>

                              <Row>
                                <Col span={24}>
                                  <div className="profile_note mt-3">
                                    You requested her to add Photo on 30 Apr
                                    2024
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col span={6}>
                            <div className="action_view">
                              <div className="action_btn">
                                <div className="outer_btn">
                                  <Button
                                    className="btn_icon"
                                    shape="circle"
                                    icon={<RiUserAddLine className="icon" />}
                                  ></Button>
                                </div>
                                <span className="text">
                                  Upgrade to connect
                                </span>
                              </div>
                              <div className="match_score">
                                Match Score <span>70%</span>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    </Link>
                    <Link to="/auth/home" className="desktop_profile_list">
                      <Card>
                        <Row gutter={[16, 16]} className="justify-content-between">
                          <Col span={6}>
                            <Carousel arrows infinite={false}>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                              <div className="profile_pic">
                                <img
                                  src={ProfileCandidate}
                                  alt="profile"
                                  className="img-fluid-profile"
                                />
                              </div>
                            </Carousel>
                          </Col>
                          <Col span={12}>
                            <div className="profile_details status">
                              <div className="profile_head">
                                <div className="top">
                                  <div className="left">
                                    <div className="title">Anitha G</div>
                                    <div className="ids">(12345678)</div>
                                    <VerifyIcon />
                                  </div>
                                  <div className="right">
                                    <div>
                                      <Dropdown overlay={menu}>
                                        <Button
                                          onClick={(e) => e.preventDefault()}
                                          className="more_btn"
                                        >
                                          <Space>
                                            <MoreOutlined className="icon" />
                                          </Space>
                                        </Button>
                                      </Dropdown>
                                    </div>
                                  </div>
                                </div>
                                <div className="bottom">
                                  <div className="online_text">
                                    Online 2h ago
                                  </div>
                                  <Link to="/auth/home" className="chat_text">
                                    Chat now
                                  </Link>
                                </div>
                              </div>

                              <Row gutter={10} className="list_text">
                                <Col span={12}>
                                  <p className="text">23 Years</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">BBA</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">5 Ft 5 In</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">UI/UX Designer</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Hindu, Nadar</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Never Married</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">Tamil, English</p>
                                </Col>
                                <Col span={12}>
                                  <p className="text">
                                    Chennai, Tamilnadu, India
                                  </p>
                                </Col>
                              </Row>

                              <Row>
                                <Col span={24}>
                                  <div className="profile_note mt-3">
                                    You requested her to add Photo on 30 Apr
                                    2024
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col span={6}>
                            <div className="action_view">
                              <div className="action_btn">
                                <div className="outer_btn">
                                  <Button
                                    className="btn_icon"
                                    shape="circle"
                                    icon={<FaRegHeart className="icon" />}
                                  ></Button>
                                </div>
                                <span className="text">Add to shotlist</span>
                              </div>
                              <div className="action_btn">
                                <div className="outer_btn">
                                  <Button
                                    className="btn_icon"
                                    shape="circle"
                                    icon={<RiUserAddLine className="icon" />}
                                  ></Button>
                                </div>
                                <span className="text">
                                  Upgrade to connect
                                </span>
                              </div>
                              <div className="match_score">
                                Match Score <span>70%</span>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    </Link>
                  </>
                ),
              },
              {
                label: <div className="custom-label">Filtered Out<div className="indicator"></div></div>,
                key: "22",
                children: (
                  <>
                    <Row justify="center">
                      <Col span={24}>
                        <div className="empty_card">
                          <img
                            src={EmptyImg}
                            alt="Empty"
                            className="img-fluid"
                          />
                          <div className="title">
                            There are no Pending Invitations to Connect
                          </div>
                          <Link to="/auth/home" className="underline_link">
                            View My Matches
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </>
                ),
              },
            ]}
          />
        </div>
      ),
    },
    {
      key: "4",
      label: "Declined",
      children: (
        <div className="custom_profile_tab_inner">
          <Tabs
            defaultActiveKey="11"
            indicator={{ size: 0 }}
            items={[
              {
                label: <div className="custom-label">Sent invitations<div className="indicator"></div></div>,
                key: "11",
                children: (
                  <Link to="/auth/home" className="desktop_profile_list">
                    <Card>
                      <Row gutter={[16, 16]} className="justify-content-between">
                        <Col span={6}>
                          <Carousel arrows infinite={false}>
                            <div className="profile_pic">
                              <img
                                src={ProfileCandidate}
                                alt="profile"
                                className="img-fluid-profile"
                              />
                            </div>
                            <div className="profile_pic">
                              <img
                                src={ProfileCandidate}
                                alt="profile"
                                className="img-fluid-profile"
                              />
                            </div>
                            <div className="profile_pic">
                              <img
                                src={ProfileCandidate}
                                alt="profile"
                                className="img-fluid-profile"
                              />
                            </div>
                          </Carousel>
                        </Col>
                        <Col span={12}>
                          <div className="profile_details status">
                            <div className="profile_head">
                              <div className="top">
                                <div className="left">
                                  <div className="title">Anitha G</div>
                                  <div className="ids">(12345678)</div>
                                  <VerifyIcon />
                                </div>
                                <div className="right">
                                  <div>
                                    <Dropdown overlay={menu}>
                                      <Button
                                        onClick={(e) => e.preventDefault()}
                                        className="more_btn"
                                      >
                                        <Space>
                                          <MoreOutlined className="icon" />
                                        </Space>
                                      </Button>
                                    </Dropdown>
                                  </div>
                                </div>
                              </div>
                              <div className="bottom">
                                <div className="online_text">
                                  Online 2h ago
                                </div>
                                <Link to="/auth/home" className="chat_text">
                                  Chat now
                                </Link>
                              </div>
                            </div>

                            <Row gutter={10} className="list_text">
                              <Col span={12}>
                                <p className="text">23 Years</p>
                              </Col>
                              <Col span={12}>
                                <p className="text">BBA</p>
                              </Col>
                              <Col span={12}>
                                <p className="text">5 Ft 5 In</p>
                              </Col>
                              <Col span={12}>
                                <p className="text">UI/UX Designer</p>
                              </Col>
                              <Col span={12}>
                                <p className="text">Hindu, Nadar</p>
                              </Col>
                              <Col span={12}>
                                <p className="text">Never Married</p>
                              </Col>
                              <Col span={12}>
                                <p className="text">Tamil, English</p>
                              </Col>
                              <Col span={12}>
                                <p className="text">
                                  Chennai, Tamilnadu, India
                                </p>
                              </Col>
                            </Row>

                            <Row>
                              <Col span={24}>
                                <div className="profile_note mt-3">
                                  You requested her to add Photo on 30 Apr
                                  2024
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col span={6}>
                          <div className="action_view">
                            <div className="action_btn">
                              <div className="outer_btn">
                                <Button
                                  className="btn_icon"
                                  shape="circle"
                                  icon={<RiUserAddLine className="icon" />}
                                ></Button>
                              </div>
                              <span className="text">
                                Upgrade to connect
                              </span>
                            </div>
                            <div className="match_score">
                              Match Score <span>70%</span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </Link>
                ),
              },
            ]}
          />
        </div>
      ),
    },
  ];
  return (
    <>
      {/* Profile List */}
      <section className="section pt-5">
        <div className="container">
          <Row justify="end" gutter={16}>
            <Col span={24} md={6} lg={6}>
              <div className="filter_title">Refine Search</div>
              <Collapse
                defaultActiveKey={["1", "2"]}
                expandIconPosition="end"
                expandIcon={({ isActive }) =>
                  isActive ? (
                    <MinusSquareOutlined className="expand_icon" />
                  ) : (
                    <PlusSquareOutlined className="expand_icon" />
                  )
                }
                className="profile_filter"
              >
                <Panel header="Sort" key="1">
                  <div className="custom_radio">
                    <Radio.Group defaultValue={1}>
                      <Radio className="radio_item" value={1}>
                        Most relevant
                      </Radio>
                      <Radio className="radio_item" value={2}>
                        Newest <span>(355)</span>
                      </Radio>
                      <Radio className="radio_item" value={3}>
                        Oldest first
                      </Radio>
                    </Radio.Group>
                  </div>
                </Panel>
                <Panel header="Filter" key="2">
                  <div className="custom_radio">
                    <Radio.Group defaultValue={1}>
                      <Radio className="radio_item" value={1}>
                        All Requests
                      </Radio>
                      <Radio className="radio_item" value={2}>
                        Photo Requests
                      </Radio>
                      <Radio className="radio_item" value={3}>
                        Phone Requests
                      </Radio>
                    </Radio.Group>
                  </div>
                </Panel>
              </Collapse>
            </Col>
            <Col span={24} md={18} lg={18}>
              <div className="custom_profile_tab">
                <Tabs defaultActiveKey="1" type="card" items={items} />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default StatusList;
