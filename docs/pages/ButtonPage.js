import React from 'react';
import { Button, ButtonGroup, ButtonToolbar, Fa } from 'mdbreact';

const ButtonPage = (props) => {
  return(
    <div className="container-fluid text-center">
      <div className="">

<Button disabled color="primary">Primary disabled</Button>
<Button disabled href="#" color="primary">Primary href</Button>
<Button active href="#" color="primary">Primary haref</Button>
<Button active color="primary">Primary active</Button>
<Button color="primary">Primary</Button>

<Button>Default</Button>

<Button color="secondary">Secondary</Button>

<Button color="success">Success</Button>

<Button color="info">Info</Button>

<Button color="warning">Warning</Button>

<Button color="danger">Danger</Button>
<br/>

<Button color="elegant">Elegant</Button>

<Button color="unique">Unique</Button>

<Button color="pink">Pink</Button>

<Button color="purple">Purple</Button>

<Button color="deep-purple">Deep-purple</Button>

<Button color="indigo">Indigo</Button>

<Button color="light-blue">Light blue</Button>

<Button color="cyan">Cyan</Button>

<Button color="dark-green">Dark-green</Button>

<Button color="light-green">Light-green</Button>

<Button color="yellow">Yellow</Button>

<Button color="amber">Amber</Button>

<Button color="deep-orange">Deep-orange</Button>

<Button color="brown">Brown</Button>

<Button color="blue-grey">Blue-grey</Button>

<Button color="mdb-color">MDB</Button>
<br/>

<Button outline color="primary">Primary</Button>
<Button outline >Default</Button>
<Button outline color="secondary">Secondary</Button>
<Button outline color="success">Success</Button>
<Button outline color="info">Info</Button>
<Button outline color="warning">Warning</Button>
<Button outline color="danger">Danger</Button>
<br/>
<Button color="primary"><Fa icon="magic" className="mr-1"/> Left</Button>
<Button color="default">Right <Fa icon="magic" className="ml-1"/></Button>
<br/>
<Button color="primary" href="#">Link</Button>
<Button color="primary" type="submit">Button</Button>

<br/>

<Button block >Block level button</Button>
<Button block color="primary">Block level button</Button>
<br/>
        <Button color="light-green">
          light-green
        </Button>
        <Button color="mdb">
          MDB
        </Button>
        <Button gradient="peach" rounded>
          peach
        </Button>
        <Button gradient="aqua">
          aqua
        </Button>
        <Button color="success" outline>
          aqua
        </Button> 
        <Button color="danger" outline>
          aqua
        </Button>
        <Button color="warning" outline>
          aqua
        </Button>
        <Button rounded outline>
          aqua
        </Button>
        <Button gradient="purple" floating size="lg">
          aqua
        </Button>
        <Button gradient="blue" floating size="sm">
          aqua
        </Button>
        <Button color="" flat size="lg">
          aqua
        </Button>
        <Button color="default" block size="lg">
          aqua
        </Button>
      </div>
      <div className="">
        <ButtonGroup vertical>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <br />
        <br />
        <ButtonGroup size="lg">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <br />
        <br />
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <br />
        <br />
        <ButtonGroup size="sm">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
    </div>
  )
};

export default ButtonPage;