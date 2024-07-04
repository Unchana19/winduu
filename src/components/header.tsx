import { Image } from "@nextui-org/react";
import { FC } from "react";

interface Props {}

const Header: FC<Props> = (props): JSX.Element => {
  return (
    <Image src={"/window.png"} alt="window11" className="object-cover w-full" />
  );
};

export default Header;
