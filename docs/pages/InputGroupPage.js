import React from 'react';
import {
  MDBContainer,
  MDBInputGroup,
  MDBBtn,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBIcon,
  MDBCol,
  MDBInput,
  MDBRow
} from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class InputGroupPage extends React.Component {
  componentDidMount() {
    this.Styles();
  }

  Styles = () => {
    const style = document.createElement('style');
    style.innerHTML = `
      .inpGroup .dropdown .dropdown-menu .dropdown-item:hover{
        background-color: #f8f9fa ;
        color: #16181b !important;
        box-shadow: 0 0 0 rgba(0,0,0,0) ;
      }


      .custom-input-group.input-group input {
        border: 1px solid #bdbdbd;
      }
      .custom-input-group.input-group input[type=text]:focus:not([readonly]).lime-border  {
        border: 1px solid #cddc39;
        box-shadow: none;
      }
      .custom-input-group.input-group input {
        border: 1px solid #bdbdbd;
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
      }
      .custom-input-group.input-group input[type=text]:focus:not([readonly]).red-border  {
        border: 1px solid #ef9a9a;
        box-shadow: none;
      }
      .custom-input-group.input-group input[type=text]:focus:not([readonly]).amber-border  {
        border: 1px solid #ffca28;
        box-shadow: none;
      }
      .custom-input-group.input-group input[type=text]:focus:not([readonly]).blue-border  {
        border: 1px solid #64b5f6;
        box-shadow: none;
      }
      .custom-input-group.input-group input {
        border: 1px solid #bdbdbd;
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
      }
      .custom-input-group.input-group input[type=text]:focus:not([readonly]).purple-border  {
        border: 1px solid #ce93d8;
        box-shadow: none;
      }
      
      `;
    const firstScriptTag = document.querySelector('script');
    firstScriptTag.parentNode.insertBefore(style, firstScriptTag);
  };

  render() {
    return (
      <MDBContainer className='inpGroup mb-5'>
        <DocsLink
          header='Inputs Group'
          href='https://mdbootstrap.com/docs/react/forms/input-group/'
        />
        <SectionContainer noBorder>
          <MDBRow>
            <MDBCol md='6'>
              <SectionContainer
                header='Default input groups'
                description='Default styling for Bootstrap Input Group component'
              >
                <MDBInputGroup
                  containerClassName='mb-3'
                  prepend='@'
                  hint='Username'
                />
                <MDBInputGroup
                  containerClassName='mb-3'
                  append='@example.com'
                  hint="Recipient's username"
                />
                <MDBInputGroup
                  label='Your vanity URL'
                  containerClassName='mb-3'
                  prepend='https://example.com/users/'
                  id='basic-url'
                />
                <MDBInputGroup
                  containerClassName='mb-3'
                  prepend='$'
                  append='.00'
                />
                <MDBInputGroup prepend='With textarea' type='textarea' />
              </SectionContainer>
            </MDBCol>
            <MDBCol md='6'>
              <SectionContainer
                header='Material input groups'
                description='Material Design styling for Bootstrap Input Group component'
              >
                <MDBInputGroup
                  material
                  containerClassName='mb-3 mt-0'
                  prepend='@'
                  hint='Username'
                />
                <MDBInputGroup
                  material
                  hint="Recipient's username"
                  containerClassName='mb-3 mt-0'
                  append='@example.com'
                />
                <MDBInputGroup
                  material
                  label='Your vanity URL'
                  labelClassName='mb-0 ml-2'
                  containerClassName='mb-3 mt-0'
                  prepend='https://example.com/users/'
                  id='basic-url-material'
                />
                <MDBInputGroup
                  material
                  containerClassName='mb-3'
                  prepend='$'
                  append='.00'
                />
                <MDBInputGroup
                  material
                  className='mb-0'
                  prepend='With textarea'
                  type='textarea'
                />
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer
          header='Wrapping'
          description='Input groups wrap by default via flex-wrap: wrap in order to accommodate custom form field validation within an input group. You may disable this with containerClassName="flex-nowrap".'
        >
          <MDBInputGroup
            containerClassName='flex-nowrap mb-3'
            prepend='@'
            hint='Username'
          />
        </SectionContainer>

        <SectionContainer header='Sizing' noBottom noBorder>
          <MDBRow>
            <MDBCol md='6'>
              <SectionContainer>
                <MDBInputGroup
                  containerClassName='mb-3'
                  prepend='Small'
                  size='sm'
                />
                <MDBInputGroup containerClassName='mb-3' prepend='Default' />
                <MDBInputGroup
                  containerClassName='mb-3'
                  prepend='Large'
                  size='lg'
                />
              </SectionContainer>
            </MDBCol>

            <MDBCol md='6'>
              <SectionContainer>
                <MDBInputGroup
                  material
                  containerClassName='mb-2 mt-0'
                  prepend='Small'
                  size='sm'
                />
                <MDBInputGroup
                  material
                  containerClassName='mb-2 mt-0'
                  prepend='Default'
                />
                <MDBInputGroup
                  material
                  containerClassName='mb-2 mt-0'
                  prepend='Large'
                  size='lg'
                />
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='Multiple inputs' noBottom noBorder>
          <MDBRow>
            <MDBCol md='6'>
              <SectionContainer>
                <MDBInputGroup
                  prepend='First and last name'
                  inputs={
                    <>
                      <MDBInput noTag type='text' />
                      <MDBInput noTag type='text' />
                    </>
                  }
                />
              </SectionContainer>
            </MDBCol>

            <MDBCol md='6'>
              <SectionContainer>
                <MDBInputGroup
                  material
                  containerClassName='m-0'
                  prepend='First and last name'
                  inputs={
                    <>
                      <MDBInput noTag type='text' hint='Type sth' />
                      <MDBInput noTag type='text' hint='Type sth' />
                    </>
                  }
                />
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='Multiple addons' noBottom noBorder>
          <MDBRow>
            <MDBCol md='6'>
              <SectionContainer>
                <MDBInputGroup
                  containerClassName='mb-3'
                  prepend={
                    <>
                      <span className='input-group-text'>$</span>
                      <span className='input-group-text'>0.00</span>
                    </>
                  }
                />
                <MDBInputGroup
                  append={
                    <>
                      <span className='input-group-text'>$</span>
                      <span className='input-group-text'>0.00</span>
                    </>
                  }
                />
              </SectionContainer>
            </MDBCol>

            <MDBCol md='6'>
              <SectionContainer>
                <MDBInputGroup
                  containerClassName='mt-0 mb-3'
                  material
                  prepend={
                    <>
                      <span className='input-group-text md-addon'>$</span>
                      <span className='input-group-text md-addon'>0.00</span>
                    </>
                  }
                />
                <MDBInputGroup
                  containerClassName='my-0'
                  material
                  append={
                    <>
                      <span className='input-group-text md-addon'>$</span>
                      <span className='input-group-text md-addon'>0.00</span>
                    </>
                  }
                />
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='Button addons' noBottom noBorder>
          <MDBRow>
            <MDBCol md='6'>
              <SectionContainer>
                <MDBInputGroup
                  containerClassName='mb-3'
                  prepend={
                    <MDBBtn
                      color='primary'
                      outline
                      size='md'
                      className='m-0 px-3 py-2 z-depth-0'
                    >
                      BUTTON
                    </MDBBtn>
                  }
                />

                <MDBInputGroup
                  hint="Recipient's username"
                  containerClassName='mb-3'
                  append={
                    <MDBBtn
                      outline
                      size='md'
                      className='m-0 px-3 py-2 z-depth-0'
                    >
                      BUTTON
                    </MDBBtn>
                  }
                />

                <MDBInputGroup
                  containerClassName='mb-3'
                  prepend={
                    <>
                      <MDBBtn
                        color='secondary'
                        outline
                        size='md'
                        className='m-0 px-3 py-2 z-depth-0'
                      >
                        BUTTON
                      </MDBBtn>
                      <MDBBtn
                        color='secondary'
                        outline
                        size='md'
                        className='m-0 px-3 py-2 z-depth-0'
                      >
                        BUTTON
                      </MDBBtn>
                    </>
                  }
                />

                <MDBInputGroup
                  hint="Recipient's username"
                  containerClassName='mb-3'
                  append={
                    <>
                      <MDBBtn
                        color='info'
                        outline
                        size='md'
                        className='m-0 px-3 py-2 z-depth-0'
                      >
                        BUTTON
                      </MDBBtn>
                      <MDBBtn
                        color='info'
                        outline
                        size='md'
                        className='m-0 px-3 py-2 z-depth-0'
                      >
                        BUTTON
                      </MDBBtn>
                    </>
                  }
                />
              </SectionContainer>
            </MDBCol>

            <MDBCol md='6'>
              <SectionContainer>
                <MDBInputGroup
                  material
                  containerClassName='mb-3 mt-0'
                  prepend={
                    <MDBBtn size='md' className='m-0 px-3 py-2 z-depth-0'>
                      BUTTON
                    </MDBBtn>
                  }
                />

                <MDBInputGroup
                  material
                  containerClassName='mb-3 mt-0'
                  hint="Recipient's username"
                  append={
                    <MDBBtn
                      color='secondary'
                      size='md'
                      className='m-0 px-3 py-2 z-depth-0'
                    >
                      BUTTON
                    </MDBBtn>
                  }
                />

                <MDBInputGroup
                  material
                  containerClassName='mb-3 mt-0'
                  prepend={
                    <>
                      <MDBBtn
                        color='info'
                        size='md'
                        className='m-0 px-3 py-2 z-depth-1'
                      >
                        BUTTON
                      </MDBBtn>
                      <MDBBtn
                        color='info'
                        size='md'
                        className='m-0 px-3 py-2 z-depth-1'
                      >
                        BUTTON
                      </MDBBtn>
                    </>
                  }
                />

                <MDBInputGroup
                  material
                  hint="Recipient's username"
                  containerClassName='mb-4 mt-0'
                  append={
                    <>
                      <MDBBtn
                        color='primary'
                        size='md'
                        className='m-0 px-3 py-2 z-depth-1'
                      >
                        BUTTON
                      </MDBBtn>
                      <MDBBtn
                        color='primary'
                        size='md'
                        className='m-0 px-3 py-2 z-depth-1'
                      >
                        BUTTON
                      </MDBBtn>
                    </>
                  }
                />
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='Buttons with dropdowns'>
          <MDBInputGroup
            containerClassName='mb-3'
            prepend={
              <MDBDropdown>
                <MDBDropdownToggle
                  color='primary'
                  size='md'
                  className='m-0 px-3 z-depth-0'
                >
                  Dropdown <MDBIcon icon='caret-down' className='ml-1' />
                </MDBDropdownToggle>
                <MDBDropdownMenu color='white'>
                  <MDBDropdownItem>Action</MDBDropdownItem>
                  <MDBDropdownItem>Another Action</MDBDropdownItem>
                  <MDBDropdownItem>Something else here</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem>Separated link</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            }
          />

          <MDBInputGroup
            containerClassName='mb-3'
            append={
              <MDBDropdown>
                <MDBDropdownToggle
                  color='default'
                  size='md'
                  className='m-0 px-3 z-depth-0'
                >
                  Dropdown <MDBIcon icon='caret-down' className='ml-1' />
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>Action</MDBDropdownItem>
                  <MDBDropdownItem>Another Action</MDBDropdownItem>
                  <MDBDropdownItem>Something else here</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem>Separated link</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            }
          />
        </SectionContainer>

        <SectionContainer header='Segmented buttons'>
          <MDBInputGroup
            containerClassName='mb-3'
            prepend={
              <>
                <MDBBtn
                  outline
                  color='primary'
                  size='md'
                  className='m-0 px-3 py-2 z-depth-0 rounded-0'
                >
                  ACTION
                </MDBBtn>
                <MDBDropdown>
                  <MDBDropdownToggle
                    outline
                    color='primary'
                    size='md'
                    className='m-0 px-2 z-depth-0 rounded-0'
                  >
                    <MDBIcon icon='caret-down' />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                    <MDBDropdownItem divider />
                    <MDBDropdownItem>Separated link</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </>
            }
          />

          <MDBInputGroup
            containerClassName='mb-3'
            append={
              <>
                <MDBBtn
                  outline
                  color='info'
                  size='md'
                  className='m-0 px-3 py-2 z-depth-0 rounded-0'
                >
                  ACTION
                </MDBBtn>
                <MDBDropdown>
                  <MDBDropdownToggle
                    outline
                    color='info'
                    size='md'
                    className='m-0 px-2 z-depth-0 rounded-0'
                  >
                    <MDBIcon icon='caret-down' />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                    <MDBDropdownItem divider />
                    <MDBDropdownItem>Separated link</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </>
            }
          />
        </SectionContainer>

        <SectionContainer header='Custom select'>
          <MDBInputGroup
            containerClassName='mb-3'
            prepend='Options'
            inputs={
              <select className='browser-default custom-select'>
                <option value='0'>Choose...</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            }
          />

          <MDBInputGroup
            containerClassName='mb-3'
            append='Options'
            inputs={
              <select className='browser-default custom-select'>
                <option value='0'>Choose...</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            }
          />

          <MDBInputGroup
            containerClassName='mb-3'
            prepend={
              <MDBBtn
                color='mdb-color'
                outline
                size='md'
                className='m-0 px-3 py-2 z-depth-0'
              >
                BUTTON
              </MDBBtn>
            }
            inputs={
              <select className='browser-default custom-select'>
                <option value='0'>Choose...</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            }
          />

          <MDBInputGroup
            containerClassName='mb-3'
            append={
              <MDBBtn
                color='mdb-color'
                outline
                size='md'
                className='m-0 px-3 py-2 z-depth-0'
              >
                BUTTON
              </MDBBtn>
            }
            inputs={
              <select className='browser-default custom-select'>
                <option value='0'>Choose...</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            }
          />
        </SectionContainer>

        <SectionContainer header='Custom file input'>
          <MDBInputGroup
            prepend='Upload'
            inputs={
              <div className='custom-file'>
                <input
                  type='file'
                  className='custom-file-input'
                  id='inputGroupFile01'
                />
                <label className='custom-file-label' htmlFor='inputGroupFile01'>
                  Choose file
                </label>
              </div>
            }
            containerClassName='mb-3'
          />

          <MDBInputGroup
            append='Upload'
            inputs={
              <div className='custom-file'>
                <input
                  type='file'
                  className='custom-file-input'
                  id='inputGroupFile01'
                />
                <label className='custom-file-label' htmlFor='inputGroupFile01'>
                  Choose file
                </label>
              </div>
            }
            containerClassName='mb-3'
          />

          <MDBInputGroup
            prepend={
              <MDBBtn
                color='mdb-color'
                outline
                size='md'
                className='m-0 px-3 py-2 z-depth-0'
              >
                BUTTON
              </MDBBtn>
            }
            inputs={
              <div className='custom-file'>
                <input
                  type='file'
                  className='custom-file-input'
                  id='inputGroupFile01'
                />
                <label className='custom-file-label' htmlFor='inputGroupFile01'>
                  Choose file
                </label>
              </div>
            }
            containerClassName='mb-3'
          />

          <MDBInputGroup
            append={
              <MDBBtn
                color='mdb-color'
                outline
                size='md'
                className='m-0 px-3 py-2 z-depth-0'
              >
                BUTTON
              </MDBBtn>
            }
            inputs={
              <div className='custom-file'>
                <input
                  type='file'
                  className='custom-file-input'
                  id='inputGroupFile01'
                />
                <label className='custom-file-label' htmlFor='inputGroupFile01'>
                  Choose file
                </label>
              </div>
            }
            containerClassName='mb-3'
          />
        </SectionContainer>

        <SectionContainer
          title='Examples & customizations'
          header='Colorful input groups'
          description='Default styling for Bootstrap Input Group component'
        >
          <MDBInputGroup
            containerClassName='custom-input-group mb-3'
            prepend='@'
            textClassName='amber lighten-3'
            className='amber-border'
            hint='Username'
          />
          <MDBInputGroup
            containerClassName='custom-input-group mb-3'
            prepend='$'
            append='.00'
            textClassName='lime lighten-2'
            className='lime-border'
          />
          <MDBInputGroup
            containerClassName='custom-input-group mb-3'
            prepend={
              <>
                <span className='input-group-text red lighten-3'>$</span>
                <span className='input-group-text red lighten-3'>0.00</span>
              </>
            }
            className='red-border'
          />
          <MDBInputGroup
            containerClassName='custom-input-group mb-3'
            append='@example.com'
            textClassName='purple lighten-3'
            hint="Recipient's Username"
            className='purple-border'
          />
          <MDBInputGroup
            label='Your vanity URL'
            containerClassName='custom-input-group mb-3'
            prepend='https://example.com/users/'
            textClassName='blue lighten-3'
            id='basic-url2'
            className='blue-border'
          />
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default InputGroupPage;
