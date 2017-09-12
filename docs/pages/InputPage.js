import React from 'react';
import { Input, FormInline, Button } from 'mdbreact';


class InputPage extends React.Component {

  render () {
    return (
    <div className="container-fluid" style={{textAlign: "initial"}}>
      <div>
        <Input />
        <Input label="test" />
        <Input hint="placeholder" label="text with placeholder" />
        <Input defaultValue="defaultValue" label="text with defaultValue" />
        <Input label="text with placeholder" size="sm" />
        <Input label="text with placeholder" icon="envelope"/>
        <Input label="Disabled input" disabled/>
        <Input hint="placeholder" label="text with placeholder" icon="envelope"/>
        <Input type="textarea"  label="textarea" icon="pencil"/>
        <Input type="textarea" hint="placeholder" label="text with placeholder"/>

        <FormInline>
          <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
          <Input label="Type your password" icon="lock" group type="password" validate/>
          <Button>Login</Button>
        </FormInline>
      </div>
    </div>
  )
  }
};

export default InputPage;
