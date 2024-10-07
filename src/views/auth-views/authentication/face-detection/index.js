import { Button, Col, Row } from "antd";
import CameraImg from "../../../../assets/vivaahaa/camera.svg";
import { Link } from "react-router-dom";

const FaceDetection = () => {
  return (
    <>
      {/* Face Detection */}
      <section className="section pt-5">
        <div className="container">
          <Row justify="center">
            <Col span={24} lg={12}>
              <div className="card_head_center">
                <div className="title">Face Detection!</div>
                <p className="para">
                  Application is trying to find your face. Please sit infornt of
                  your webcam in a way such that your face must be clearly
                  visible
                </p>
                <img src={CameraImg} alt="CameraImg" className="img-fluid" />
                <p className="please_wait_text">Please Wait Face Detected</p>
              </div>
            </Col>
          </Row>
          <Row justify="center" className="mt-4">
            <Col span={24} lg={5}>
              <Link to="/auth/upload-photo">
                <Button type="primary" className="btn_primary" block>
                  Continue
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default FaceDetection;
