import { AiFillHome } from "react-icons/ai";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";

export const navigation = [
    {
      label: "TV Shows",
      href: "/tv",
      icon: <PiTelevisionSimpleFill />,
    },
    {
      label: "Movies",
      href: "/movie",
      icon: <BiSolidMoviePlay />,
    },
];

export const mobileNav = [
    {
        label: "Home",
        href: "/",
        icon: <AiFillHome/>
    },
    ...navigation
]