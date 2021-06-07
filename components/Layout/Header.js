import React from "react";
import classes from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <Link href="/">
      <h1 className={classes.header}>World Rank</h1>
    </Link>
  );
};

export default Header;
