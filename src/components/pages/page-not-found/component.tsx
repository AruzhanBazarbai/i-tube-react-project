import { FC } from "react";
import { Button, Img, NavLink, P } from "../../atoms";

export const PageNotFound: FC = () => (
  <div className="d-flex flex-column justify-content-center align-items-center gap-4 h-100">
    <Img
      width="500px"
      height="373px"
      src={require("../../../assets/images/404.png")}
      alt="404"
      className="rounded-5"
    />
    <P fontSize="32px" fontWeight={500} lineHeight="45px">
      Page Not Found
    </P>
    <NavLink href="/">
      <Button backgroundColor="white" border="1px solid black" color="black" borderRadius="10px">
        To the main page
      </Button>
    </NavLink>
  </div>
);
