import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StyleNavbar from "../components/StyledNavbar";

const SharedLayout = () => {
  return (
    <Fragment>
      <StyleNavbar />
      <Outlet />
    </Fragment>
  );
};
export default SharedLayout;
