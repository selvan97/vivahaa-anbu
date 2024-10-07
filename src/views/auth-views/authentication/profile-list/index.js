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
const ProfileList = () => {
  const { Panel } = Collapse;
  const items = [
    {
      key: "1",
      label: "My Matches (1005)",
      children: (
        <>
          <Link to="/auth/home" className="desktop_profile_list">
            <Card>
              <Row gutter={[16, 16]}>
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
                  <div className="profile_details">
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
                        <div className="online_text">Online 2h ago</div>
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
                        <p className="text">Chennai, Tamilnadu, India</p>
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
                          icon={<FaRegHeart className="icon" size={20} />}
                        ></Button>
                      </div>
                      <span className="text">Add to shotlist</span>
                    </div>
                    <div className="action_btn">
                      <div className="outer_btn">
                        <Button
                          className="btn_icon"
                          shape="circle"
                          icon={<RiUserAddLine className="icon" size={20} />}
                        ></Button>
                      </div>
                      <span className="text">Upgrade to connect</span>
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
              <Row gutter={[16, 16]}>
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
                  <div className="profile_details">
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
                        <div className="online_text">Online 2h ago</div>
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
                        <p className="text">Chennai, Tamilnadu, India</p>
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
                          icon={<FaRegHeart className="icon" size={20} />}
                        ></Button>
                      </div>
                      <span className="text">Add to shotlist</span>
                    </div>
                    <div className="action_btn">
                      <div className="outer_btn">
                        <Button
                          className="btn_icon"
                          shape="circle"
                          icon={<RiUserAddLine className="icon" size={20} />}
                        ></Button>
                      </div>
                      <span className="text">Upgrade to connect</span>
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
      key: "2",
      label: "Near Me (500)",
      children: (
        <>
          <Link to="/auth/home" className="desktop_profile_list">
            <Card>
              <Row gutter={[16, 16]}>
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
                  <div className="profile_details">
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
                        <div className="online_text">Online 2h ago</div>
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
                        <p className="text">Chennai, Tamilnadu, India</p>
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
                          icon={<FaRegHeart className="icon" size={20} />}
                        ></Button>
                      </div>
                      <span className="text">Add to shotlist</span>
                    </div>
                    <div className="action_btn">
                      <div className="outer_btn">
                        <Button
                          className="btn_icon"
                          shape="circle"
                          icon={<RiUserAddLine className="icon" size={20} />}
                        ></Button>
                      </div>
                      <span className="text">Upgrade to connect</span>
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
      key: "3",
      label: "Recently View (105)",
      children: (
        <>
          <Link to="/auth/home" className="desktop_profile_list">
            <Card>
              <Row gutter={[16, 16]}>
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
                  <div className="profile_details">
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
                        <div className="online_text">Online 2h ago</div>
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
                        <p className="text">Chennai, Tamilnadu, India</p>
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
                          icon={<FaRegHeart className="icon" size={20} />}
                        ></Button>
                      </div>
                      <span className="text">Add to shotlist</span>
                    </div>
                    <div className="action_btn">
                      <div className="outer_btn">
                        <Button
                          className="btn_icon"
                          shape="circle"
                          icon={<RiUserAddLine className="icon" size={20} />}
                        ></Button>
                      </div>
                      <span className="text">Upgrade to connect</span>
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
              <Row gutter={[16, 16]}>
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
                  <div className="profile_details">
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
                        <div className="online_text">Online 2h ago</div>
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
                        <p className="text">Chennai, Tamilnadu, India</p>
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
                          icon={<FaRegHeart className="icon" size={20} />}
                        ></Button>
                      </div>
                      <span className="text">Add to shotlist</span>
                    </div>
                    <div className="action_btn">
                      <div className="outer_btn">
                        <Button
                          className="btn_icon"
                          shape="circle"
                          icon={<RiUserAddLine className="icon" size={20} />}
                        ></Button>
                      </div>
                      <span className="text">Upgrade to connect</span>
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
      key: "4",
      label: "Shortlisted (12)",
      children: (
        <>
          <Link to="/auth/home" className="desktop_profile_list">
            <Card>
              <Row gutter={[16, 16]}>
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
                  <div className="profile_details">
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
                        <div className="online_text">Online 2h ago</div>
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
                        <p className="text">Chennai, Tamilnadu, India</p>
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
                          icon={<FaRegHeart className="icon" size={20} />}
                        ></Button>
                      </div>
                      <span className="text">Add to shotlist</span>
                    </div>
                    <div className="action_btn">
                      <div className="outer_btn">
                        <Button
                          className="btn_icon"
                          shape="circle"
                          icon={<RiUserAddLine className="icon" size={20} />}
                        ></Button>
                      </div>
                      <span className="text">Upgrade to connect</span>
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
                defaultActiveKey={[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                ]}
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
                <Panel header="Photo Settings" key="1">
                  <div className="custom_radio">
                    <Radio.Group defaultValue={1}>
                      <Radio className="radio_item" value={1}>
                        All
                      </Radio>
                      <Radio className="radio_item" value={2}>
                        Visible to all <span>(355)</span>
                      </Radio>
                      <Radio className="radio_item" value={3}>
                        Only for prime member <span>(155)</span>
                      </Radio>
                    </Radio.Group>
                  </div>
                </Panel>
                <Panel header="Recently Joined" key="2">
                  <div className="custom_radio">
                    <Radio.Group defaultValue={1}>
                      <Radio className="radio_item" value={1}>
                        All
                      </Radio>
                      <Radio className="radio_item" value={2}>
                        Within a day <span>(355)</span>
                      </Radio>
                      <Radio className="radio_item" value={3}>
                        Within a week <span>(1000+)</span>
                      </Radio>
                      <Radio className="radio_item" value={4}>
                        Within a month <span>(1500+)</span>
                      </Radio>
                    </Radio.Group>
                  </div>
                </Panel>
                <Panel header="Active Members" key="3">
                  <div className="custom_radio">
                    <Radio.Group defaultValue={1}>
                      <Radio className="radio_item" value={1}>
                        All
                      </Radio>
                      <Radio className="radio_item" value={2}>
                        Within a day <span>(355)</span>
                      </Radio>
                      <Radio className="radio_item" value={3}>
                        Within a week <span>(1000+)</span>
                      </Radio>
                      <Radio className="radio_item" value={4}>
                        Within a month <span>(1500+)</span>
                      </Radio>
                    </Radio.Group>
                  </div>
                </Panel>
                <Panel header="Annual Income" key="4">
                  <div className="custom_radio">
                    <Radio.Group defaultValue={1}>
                      <Radio className="radio_item" value={1}>
                        All
                      </Radio>
                      <Radio className="radio_item" value={2}>
                        Upto INR 1 Lakhs <span>(355)</span>
                      </Radio>
                      <Radio className="radio_item" value={3}>
                        INR 2 Lakh to 4 Lakh <span>(1000+)</span>
                      </Radio>
                      <Radio className="radio_item" value={4}>
                        INR 4 Lakh to 7 Lakh <span>(1000+)</span>
                      </Radio>
                      <Radio className="radio_item" value={5}>
                        INR 7 Lakh to 10 Lakh <span>(1000+)</span>
                      </Radio>
                      <Radio className="radio_item" value={6}>
                        INR 10 Lakh to 15 Lakh <span>(1000+)</span>
                      </Radio>
                      <Radio className="radio_item" value={7}>
                        INR 15 Lakh to 20 Lakh <span>(1000+)</span>
                      </Radio>
                      <Radio className="radio_item" value={8}>
                        INR 20 Lakh to 30 Lakh <span>(1000+)</span>
                      </Radio>
                      <Radio className="radio_item" value={9}>
                        INR 30 Lakh to 50 Lakh <span>(1000+)</span>
                      </Radio>
                    </Radio.Group>
                  </div>
                </Panel>
                <Panel header="Marital Status" key="5">
                  <div className="custom_radio">
                    <Radio.Group defaultValue={1}>
                      <Radio className="radio_item" value={1}>
                        All
                      </Radio>
                      <Radio className="radio_item" value={2}>
                        Never Married <span>(355)</span>
                      </Radio>
                      <Radio className="radio_item" value={3}>
                        Divorced <span>(1000+)</span>
                      </Radio>
                      <Radio className="radio_item" value={4}>
                        Annulled <span>(1500+)</span>
                      </Radio>
                      <Radio className="radio_item" value={5}>
                        Awaiting Divorced <span>(1500+)</span>
                      </Radio>
                      <Radio className="radio_item" value={6}>
                        Widowed <span>(1500+)</span>
                      </Radio>
                    </Radio.Group>
                  </div>
                </Panel>
                <Panel header="Religion" key="6">
                  <div className="custom_radio">
                    <Radio.Group defaultValue={1}>
                      <Radio className="radio_item" value={1}>
                        All
                      </Radio>
                      <Radio className="radio_item" value={2}>
                        Muslim <span>(355)</span>
                      </Radio>
                      <Radio className="radio_item" value={3}>
                        Hindu <span>(1000+)</span>
                      </Radio>
                      <Radio className="radio_item" value={4}>
                        No Religion <span>(1500+)</span>
                      </Radio>
                      <Radio className="radio_item" value={5}>
                        Christian <span>(1500+)</span>
                      </Radio>
                      <Radio className="radio_item" value={6}>
                        Others <span>(1500+)</span>
                      </Radio>
                    </Radio.Group>
                  </div>
                </Panel>
                <Panel header="Mother Tongue" key="7">
                  <div className="custom_radio">
                    <Radio.Group defaultValue={1}>
                      <Radio className="radio_item" value={1}>
                        All
                      </Radio>
                      <Radio className="radio_item" value={2}>
                        Urdu <span>(355)</span>
                      </Radio>
                      <Radio className="radio_item" value={3}>
                        Hindi <span>(1000+)</span>
                      </Radio>
                      <Radio className="radio_item" value={4}>
                        Bengali <span>(1500+)</span>
                      </Radio>
                      <Radio className="radio_item" value={5}>
                        Tamil <span>(1500+)</span>
                      </Radio>
                      <Radio className="radio_item" value={6}>
                        Malayalam <span>(1500+)</span>
                      </Radio>
                    </Radio.Group>
                  </div>
                </Panel>
                <Panel header="Country Living in" key="8">
                  <div className="custom_radio">
                    <Radio.Group defaultValue={1}>
                      <Radio className="radio_item" value={1}>
                        All
                      </Radio>
                      <Radio className="radio_item" value={2}>
                        India <span>(355)</span>
                      </Radio>
                      <Radio className="radio_item" value={3}>
                        Pakistan <span>(1000+)</span>
                      </Radio>
                      <Radio className="radio_item" value={4}>
                        United Arab Emirates <span>(1500+)</span>
                      </Radio>
                      <Radio className="radio_item" value={5}>
                        United Kingdom <span>(1500+)</span>
                      </Radio>
                      <Radio className="radio_item" value={6}>
                        Malayalam <span>(1500+)</span>
                      </Radio>
                    </Radio.Group>
                  </div>
                </Panel>
                <Panel header="Working With" key="9">
                  <div className="custom_radio">
                    <Radio.Group defaultValue={1}>
                      <Radio className="radio_item" value={1}>
                        All
                      </Radio>
                      <Radio className="radio_item" value={2}>
                        Non Working <span>(355)</span>
                      </Radio>
                      <Radio className="radio_item" value={3}>
                        Private Company <span>(1000+)</span>
                      </Radio>
                      <Radio className="radio_item" value={4}>
                        Business <span>(1500+)</span>
                      </Radio>
                      <Radio className="radio_item" value={5}>
                        Government <span>(1500+)</span>
                      </Radio>
                      <Radio className="radio_item" value={6}>
                        Defense / Civil <span>(1500+)</span>
                      </Radio>
                    </Radio.Group>
                  </div>
                </Panel>
                <Panel header="Profile Created by" key="10">
                  <div className="custom_radio">
                    <Radio.Group defaultValue={1}>
                      <Radio className="radio_item" value={1}>
                        All
                      </Radio>
                      <Radio className="radio_item" value={2}>
                        Self <span>(355)</span>
                      </Radio>
                      <Radio className="radio_item" value={3}>
                        Parent / Guardian <span>(1000+)</span>
                      </Radio>
                      <Radio className="radio_item" value={4}>
                        Sibling <span>(1500+)</span>
                      </Radio>
                      <Radio className="radio_item" value={5}>
                        Other <span>(1500+)</span>
                      </Radio>
                      <Radio className="radio_item" value={6}>
                        Friend <span>(1500+)</span>
                      </Radio>
                    </Radio.Group>
                  </div>
                </Panel>
                <Panel header="Eating habits" key="11">
                  <div className="custom_radio">
                    <Radio.Group defaultValue={1}>
                      <Radio className="radio_item" value={1}>
                        All
                      </Radio>
                      <Radio className="radio_item" value={2}>
                        Non-Veg <span>(355)</span>
                      </Radio>
                      <Radio className="radio_item" value={3}>
                        Veg <span>(1000+)</span>
                      </Radio>
                      <Radio className="radio_item" value={4}>
                        Eggetarian <span>(1500+)</span>
                      </Radio>
                      <Radio className="radio_item" value={5}>
                        Vegan <span>(1500+)</span>
                      </Radio>
                      <Radio className="radio_item" value={6}>
                        Jain <span>(1500+)</span>
                      </Radio>
                    </Radio.Group>
                  </div>
                </Panel>
                <Panel header="Education Level" key="12">
                  <div className="custom_radio">
                    <Radio.Group defaultValue={1}>
                      <Radio className="radio_item" value={1}>
                        All
                      </Radio>
                      <Radio className="radio_item" value={2}>
                        Bachelor <span>(355)</span>
                      </Radio>
                      <Radio className="radio_item" value={3}>
                        Master <span>(1000+)</span>
                      </Radio>
                      <Radio className="radio_item" value={4}>
                        High school <span>(1500+)</span>
                      </Radio>
                      <Radio className="radio_item" value={5}>
                        Honours <span>(1500+)</span>
                      </Radio>
                      <Radio className="radio_item" value={6}>
                        Diploma <span>(1500+)</span>
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

export default ProfileList;
