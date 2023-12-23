"use client";
import { Navbar, NavbarBrand } from "@nextui-org/react";
export const Nav = () => {
  return (
    <>
      <Navbar isBlurred isBordered>
        <NavbarBrand className="justify-center text-xl font-extrabold sm:text-2xl">
          Tasks By{" "}
          <span className="text-2xl text-primary-600">&nbsp;Shaharyar</span>
        </NavbarBrand>
      </Navbar>
    </>
  );
};
