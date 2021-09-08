import React from "react";
import logo from "../images/BBS-Logo.svg";
import "twin.macro";
import { Link } from "gatsby";

export default function Logo() {
  return (
    <div tw='w-full flex justify-center sm:relative sm:justify-start sm:m-2'>
      <Link to='/'>
        <img id='logo' src={logo} alt='BBS-Logo' tw='w-36' />
      </Link>
    </div>
  );
}
