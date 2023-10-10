import React, { useState } from "react";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Button,
  P,
  Span,
  TextArea,
  Input,
  Anchor,
  NavLink,
  Img,
  Li,
  Ul,
  RadioButton,
  Checkbox,
} from "../..";

export const Home: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onCLick = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };
  return (
    <>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H2>Hello world</H2>
      <H3>Hello world</H3>
      <H4>Hello world</H4>
      <H5>Hello world</H5>
      <H6>Hello world</H6>
      <P fontSize="14px" lineHeight="17px" className="pb-5">
        Confirm a{" "}
        <Span
          fontSize="25px"
          lineHeight="20px"
          color="#bbbbbb"
          fontWeight={700}
          className="text-uppercase"
        >
          password
        </Span>
      </P>
      <Button
        size="lg"
        fontSize="16px"
        lineHeight="20px"
        fontWeight={600}
        borderRadius="10px"
        hoverBackgroundColor="#222222"
      >
        Sign Up
      </Button>
      <TextArea className="mt-3" placeholder="password" />
      <Input className="mt-3" placeholder="Full name" />
      <P fontSize="14px" lineHeight="17px">
        Already have an account?{" "}
        <Anchor fontWeight={600} fontSize="14px" lineHeight="17px" blank href="/clicked">
          Log in
        </Anchor>
      </P>
      <P fontSize="14px" lineHeight="17px">
        Already have an account?{" "}
        <NavLink showUnderline fontWeight={600} fontSize="14px" lineHeight="17px" href="/clicked">
          Log in
        </NavLink>
      </P>
      <Img src="/images/favicon.ico" alt="logo" width="100px" height="100px" />

      <Ul>
        <Li>text1</Li>
        <Li>text2</Li>
        <Li>text3</Li>
      </Ul>

      <RadioButton value="name" name="name" checked={isChecked} onChange={() => onCLick()}>
        Name
      </RadioButton>
      <br />
      <Checkbox checked={isChecked} onChange={onCLick}>
        SUrname
      </Checkbox>
    </>
  );
};
