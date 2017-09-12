import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'mdbreact';

const ButtonPage = (props) => {
  return(
    <div className="container-fluid text-center">
      <div className="">
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
        <Button color="success " outline>
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