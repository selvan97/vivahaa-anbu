import styled from "@emotion/styled";

const NavEdge = styled.div(({ left, right }) => {
  if (left) {
    return {
      display: "flex",
    };
  }

  if (right) {
    return {
      marginLeft: "auto",
      padding: "0 1rem",
      display: "flex",
      justifyContent: "flex-end",
    };
  }

  return {};
});

export default NavEdge;
