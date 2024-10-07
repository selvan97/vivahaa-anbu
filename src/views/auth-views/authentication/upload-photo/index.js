import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";

const UploadPhoto = () => {
  return (
    <>
      {/* Upload Photo */}
      <section className="section pt-5">
        <div className="container">
          <Row justify="end">
            <Col span={2}>
              <Link to="/auth/partners-preference">
                <Button
                  type="primary"
                  className="btn_outline_primary"
                  ghost
                  block
                >
                  Skip
                </Button>
              </Link>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={24} lg={12}>
              <div className="card_head_center">
                <div className="title">Upload photos!</div>
                <p className="para">
                  You can upload 20 photos to your profile. Each photos must be
                  less than 15 MB and in jpg, jpeg, png or webp format. All
                  photos uploaded are screened as per Photo Guidelines  and 98%
                  of those get activated within 2 hours.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default UploadPhoto;
