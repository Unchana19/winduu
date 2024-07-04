import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Navbar,
} from "@nextui-org/react";
import Link from "next/link";
import { FC } from "react";

interface Props {}

const NavbarComponent: FC<Props> = (props): JSX.Element => {
  return (
    <Navbar className="absolute top-0">
      <NavbarBrand>
        <Link href={"/"}>
          <h1 className="font-bold text-inherit">Winduu</h1>
        </Link>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/sign-up">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/sign-up" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
