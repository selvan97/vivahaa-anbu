import { Button, Card, Carousel, Col, Dropdown, Menu, Row, Space } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import ProfileCandidate from "../../../../assets/vivaahaa/profilecandidate.png";
import { VerifyIcon } from "assets/svg/icon";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { RiUserAddLine } from "react-icons/ri";
import BioIcon from "../../../../assets/icons/bio.svg";
import ContactIcon from "../../../../assets/icons/contact.svg";
import BasicIcon from "../../../../assets/icons/basic.svg";
import ReligiousIcon from "../../../../assets/icons/religious.svg";
import FamilyIcon from "../../../../assets/icons/family.svg";
import ProfessionalIcon from "../../../../assets/icons/professional.svg";
import HoroscopeIcon from "../../../../assets/icons/horoscope.svg";
import LocationIcon from "../../../../assets/icons/location.svg";
import LifestyleIcon from "../../../../assets/icons/lifestyle.svg";
import Callcon from "../../../../assets/icons/call.svg";
import Mailcon from "../../../../assets/icons/mail.svg";
import CheckIcon from "../../../../assets/icons/small_check.svg";

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
const ProfileDetails = () => {
  return (
    <>
      {/* Profile List */}
      <section className="section pt-5">
        <div className="container">
          <Row justify="center" gutter={[8, 8]}>
            <Col span={24} lg={20}>
              <div className="desktop_profile_list">
                <Card>
                  <Row gutter={[16, 16]}>
                    <Col span={5}>
                      <div className="custom-carousel">
                        <Carousel arrows infinite={false}>
                          <div className="profile_pic">
                            <img
                              src={ProfileCandidate}
                              alt="profile"
                              className="img-fluid w-100"
                            />
                          </div>
                          <div className="profile_pic">
                            <img
                              src={ProfileCandidate}
                              alt="profile"
                              className="img-fluid w-100"
                            />
                          </div>
                          <div className="profile_pic">
                            <img
                              src={ProfileCandidate}
                              alt="profile"
                              className="img-fluid w-100"
                            />
                          </div>
                        </Carousel>
                      </div>
                    </Col>
                    <Col span={14}>
                      <div className="profile_details">
                        <div className="profile_head">
                          <div className="top">
                            <div className="left">
                              <div className="title">Anitha G</div>
                              <div className="ids">(12345678)</div>
                              <VerifyIcon />
                            </div>
                            <div className="right">
                              <Link to="/auth/home" className="mb-1">
                                Report this profile
                              </Link>
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
                            <p className="text">UI/UX Designer</p>
                          </Col>
                          <Col span={12}>
                            <p className="text">5 Ft 5 In</p>
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
                    <Col span={5}>
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
                        <div className="action_btn score">
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
              </div>
            </Col>

            <Col span={24} lg={20}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <img src={BioIcon} alt="bio" className="icon" />
                    <div className="title">Bio</div>
                  </div>
                </div>

                <div className="card_body">
                  <p className="text mb-0">
                    I am Anitha G, I have a Bachelor's degree and I am employed
                    in private Sector as an UI/UX designer currently based in
                    Chennai. I belong to a middle class, joint family with
                    moderate values.
                  </p>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={20}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <img src={ContactIcon} alt="bio" className="icon" />
                    <div className="title">Contact Details</div>
                  </div>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={12}>
                      <div className="d-flex">
                        <img src={Callcon} alt="call" className="img-fluid" />
                        <div className=" text fw-600 ml-1 mr-2">
                          +91 88888 XXXXX
                        </div>
                        <img
                          src={CheckIcon}
                          alt="check"
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col span={24} lg={12}>
                      <div className="d-flex">
                        <img src={Mailcon} alt="call" className="img-fluid" />
                        <div className=" text fw-600 ml-1 mr-2">
                          XXXXX@gmail.com
                        </div>
                        <img
                          src={CheckIcon}
                          alt="check"
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col span={24}>
                      <p className="mt-3">
                        <Link to="/auth/home" className="text_link">
                          Upgrade now
                        </Link>{" "}
                        to view details
                      </p>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={20}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <img src={BasicIcon} alt="bio" className="icon" />
                    <div className="title">Basic Details</div>
                  </div>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Profile Created for
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Parents</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">Date of Birth</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">20 May 2001</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">Age</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">25 Years</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">Marital Status</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Never Married</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">Eye Color</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Black</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">Hair Colour</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Black</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={2}>
                    </Col>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Hair Style
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Long hair</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Tattoos or Piercings
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">No</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Body Type
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Slim</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Weight
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">55 Kg</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Height
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">5 Ft 1 In</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Any Disability
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">None</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={20}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <img src={ReligiousIcon} alt="bio" className="icon" />
                    <div className="title">Religious Information</div>
                  </div>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Religion
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Hindu</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Caste
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Nadar</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={2}></Col>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Sub-Caste
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Not Specified</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Mother Tongue
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Tamil</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={20}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <img src={FamilyIcon} alt="bio" className="icon" />
                    <div className="title">Family Details</div>
                  </div>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Family Value
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Traditional</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Family Type
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Joint</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Family Status
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Middle Class</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Family Location
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Chennai, Tamilnadu</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={2}></Col>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            No. of Brothers
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">02</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            No. of Sister
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">00</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Father Occupation
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Business Man</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Mother Occupation
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Housemaker</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={20}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <img src={ProfessionalIcon} alt="bio" className="icon" />
                    <div className="title">Professional Details</div>
                  </div>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Education
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">BCA</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            College / University
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">SRM University</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Occupation
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">UI UX Designer</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Company Name
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">TCS</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={2} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Employed In
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Private Sector</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Year of Experience
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">02 Years</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Annual Income
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">02 - 03 Lakhs (Year)</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Work Location
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Chennai, Tamandu</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={20}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <img src={HoroscopeIcon} alt="bio" className="icon" />
                    <div className="title">Horoscope Details</div>
                  </div>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Date of Birth
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">20 May 2001</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Time of Birth
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">18:05 Hrs</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Astrological Sign
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Gemini</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={2} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Manglik Status
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">None</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Birth Place
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Chennai, Tamilnadu</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Sun Sign Compatibility
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Gemini and Aquarius</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={20}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <img src={LocationIcon} alt="bio" className="icon" />
                    <div className="title">Location</div>
                  </div>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            City
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Chennai</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            State
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Tamil Nadu</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={2} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Pin code
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">600113</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Country
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">India</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={20}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <img src={LifestyleIcon} alt="bio" className="icon" />
                    <div className="title">Lifestyle</div>
                  </div>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Hobbies
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Drawing, Cooking</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Interests
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Singing, Dance</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Eating Habit
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Non-Veg</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={2} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Smoking Habit
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">No</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Drinking Habit
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">No</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Spoken Languages
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Tamil, English</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>

          <Row justify="center" gutter={[16, 16]}>
            <Col span={20}>
              <div className="profile_main_title py-4">Partners Preference</div>
            </Col>
          </Row>

          <Row justify="center" gutter={[8, 8]}>
            <Col span={24} lg={20}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <img src={BasicIcon} alt="bio" className="icon" />
                    <div className="title">Basic & Religious Preference</div>
                  </div>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Age
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">18 - 24 Years</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Height
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">4 ft - 5 ft</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Marital Status
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Never Married</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Eating Habit
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Non-Veg</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Mother Tongue
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Tamil</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Weight
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">55 - 70 kg</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={2} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Religion
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Hindu</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Caste
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Not Specified</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Any Disability
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">No</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Body Type
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Average</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Smoking Habit
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">No</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Drinking Habit
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">No</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={20}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <img src={ProfessionalIcon} alt="bio" className="icon" />
                    <div className="title">Professional Preference</div>
                  </div>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Education
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Not Specified</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Occupation
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Not Specified</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Work Location
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Chennai</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={2} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Employed In
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Not Specified</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Annual Income
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">02 - 03 Lakhs (Year)</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={20}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <img src={LocationIcon} alt="bio" className="icon" />
                    <div className="title">Location Preference</div>
                  </div>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            City
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Chennai</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            State
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Tamil Nadu</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={2} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Country
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">India</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={20}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <img src={HoroscopeIcon} alt="bio" className="icon" />
                    <div className="title">Horoscope Preference</div>
                  </div>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Time of Birth
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">18:05 Hrs</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Astrological Sign
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Gemini</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={2} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Manglik Status
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">None</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Sun Sign Compatibility
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Gemini and Aquarius</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={20}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <img src={FamilyIcon} alt="bio" className="icon" />
                    <div className="title">Family Preference</div>
                  </div>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Family Value
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Traditional</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Family Type
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Joint</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Family Status
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Middle Class</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={2} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Brothers
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">01</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Sister
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">01</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2">
                            Father Occupation
                          </p>
                        </Col>
                        <Col lg={4} md={4} xs={4}><p className="text mb-2 text-center"> : </p></Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Business Man</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default ProfileDetails;
