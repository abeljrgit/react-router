import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StyleNavbar from "../components/StyledNavbar";

const SharedProductLayout = () => {
  return (
    <Fragment>
      <h2>products</h2>
      <Outlet />
    </Fragment>
  );
};
export default SharedProductLayout;
