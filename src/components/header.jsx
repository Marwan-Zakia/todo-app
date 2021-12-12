import React from "react";
import { Navbar,Alignment,Button } from "@blueprintjs/core";

export default function Header({incomplete}) {
  return (
    <>

<Navbar>
    <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>   To Do List: {incomplete} items pending</Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="home" text="Home" />
        <Button className="bp3-minimal" icon="document" text="Files" />
    </Navbar.Group>
</Navbar>
    </>
  );
}





