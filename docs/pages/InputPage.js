import React from 'react';
import { Input, FormInline, Button } from 'mdbreact';


class InputPage extends React.Component {

  render () {
    return (
      <div className="container-fluid" style={{textAlign: 'initial'}}>
        <div>
          <Input label="Example label" />

          <Input label="Example label" size="sm" />
          <Input label="Example label" size="sm" icon="envelope"/>

          <Input label="Example label" icon="envelope"/>
          <Input label="Example label" icon="user"/>

          <Input hint="placeholder" label="Example label" />

          <Input defaultValue="John Doe" label="Example label" />

          <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
          <Input label="Type your password" icon="lock" group type="password" validate/>

          <Input label="Example label" disabled/>

          <FormInline>
            <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
            <Input label="Type your password" icon="lock" group type="password" validate/>
            <Button>Login</Button>
          </FormInline>

          <Input type="textarea" label="Icon Prefix" icon="pencil"/>
          <Input type="textarea" label="Basic textarea"/>

        </div>
      </div>
    );
  }
}

export default InputPage;
