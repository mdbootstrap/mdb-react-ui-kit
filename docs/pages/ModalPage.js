import React, { Component } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader,
  MDBTooltip,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class ModalPage extends Component {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
    modal12: false,
    modal13: false,
    modal14: false,
    modal15: false,
    modal16: false,
    modal17: false,
    modal18: false,
    modal19: false,
    modal20: false,
    backdrop: false,
    mailAddress: '@mdo'
  };

  toggle = nr => () => {
    const modalNumber = `modal${nr}`;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  showFunction = () => {
    alert('This event is fired just before the modal is open.');
  };

  hideFunction = () => {
    alert('This event is fired just before the modal is hidden.');
  };

  hiddenFunction = () => {
    alert('This event is fired after the modal is closed.');
  };

  render() {
    const {
      mailAddress,
      modal1,
      modal10,
      modal11,
      modal12,
      modal13,
      modal14,
      modal15,
      modal16,
      modal17,
      modal18,
      modal19,
      modal2,
      modal20,
      modal3,
      modal4,
      modal5,
      modal6,
      modal7,
      modal8,
      modal9
    } = this.state;
    return (
      <MDBContainer>
        <DocsLink title='Modal' href='https://mdbootstrap.com/docs/react/modals/basic/' />
        <SectionContainer header='Basic example' flexCenter>
          <MDBBtn color='danger' onClick={this.toggle(1)}>
            Modal
          </MDBBtn>
          <MDBModal backdrop={false} isOpen={modal1} toggle={this.toggle(1)}>
            <MDBModalHeader toggle={this.toggle(1)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(1)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Central modal' flexCenter className='flex-wrap'>
          <MDBBtn color='primary' onClick={this.toggle(2)}>
            Medium modal
          </MDBBtn>
          <MDBModal isOpen={modal2} toggle={this.toggle(2)}>
            <MDBModalHeader toggle={this.toggle(2)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(2)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>

          <MDBBtn color='primary' onClick={this.toggle(3)}>
            Small modal
          </MDBBtn>
          <MDBModal isOpen={modal3} toggle={this.toggle(3)} size='sm'>
            <MDBModalHeader toggle={this.toggle(3)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' size='sm' onClick={this.toggle(3)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary' size='sm'>
                Save changes
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>

          <MDBBtn color='primary' onClick={this.toggle(4)}>
            Large modal
          </MDBBtn>
          <MDBModal isOpen={modal4} toggle={this.toggle(4)} size='lg'>
            <MDBModalHeader toggle={this.toggle(4)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(4)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>

          <MDBBtn color='primary' onClick={this.toggle(5)}>
            Fluid modal
          </MDBBtn>
          <MDBModal isOpen={modal5} toggle={this.toggle(5)} size='fluid'>
            <MDBModalHeader toggle={this.toggle(5)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(5)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Side modal' flexCenter>
          <MDBBtn color='secondary' onClick={this.toggle(6)}>
            Top right
          </MDBBtn>
          <MDBModal isOpen={modal6} toggle={this.toggle(6)} side position='top-right'>
            <MDBModalHeader toggle={this.toggle(6)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(6)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>

          <MDBBtn color='secondary' onClick={this.toggle(7)}>
            Bottom left
          </MDBBtn>
          <MDBModal isOpen={modal7} toggle={this.toggle(7)} side position='bottom-left'>
            <MDBModalHeader toggle={this.toggle(7)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(7)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Fluid modal' flexCenter>
          <MDBBtn color='info' onClick={this.toggle(8)}>
            Right
          </MDBBtn>
          <MDBModal isOpen={modal8} toggle={this.toggle(8)} fullHeight position='right'>
            <MDBModalHeader toggle={this.toggle(8)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(8)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>

          <MDBBtn color='info' onClick={this.toggle(9)}>
            Bottom
          </MDBBtn>
          <MDBModal isOpen={modal9} toggle={this.toggle(9)} fullHeight position='bottom'>
            <MDBModalHeader toggle={this.toggle(9)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(9)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Frame modal' flexCenter>
          <MDBBtn color='warning' onClick={this.toggle(10)}>
            Bottom
          </MDBBtn>
          <MDBModal isOpen={modal10} toggle={this.toggle(10)} frame position='bottom'>
            <MDBModalBody className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
              <MDBBtn color='secondary' onClick={this.toggle(10)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalBody>
          </MDBModal>
          <MDBBtn color='warning' onClick={this.toggle(11)}>
            Top
          </MDBBtn>
          <MDBModal isOpen={modal11} toggle={this.toggle(11)} frame position='top'>
            <MDBModalBody className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
              <MDBBtn color='secondary' onClick={this.toggle(11)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalBody>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Remove backdrop' flexCenter>
          <MDBBtn onClick={this.toggle(12)}>Modal</MDBBtn>
          <MDBModal
            isOpen={modal12}
            toggle={this.toggle(12)}
            backdrop={false}
          >
            <MDBModalHeader toggle={this.toggle(12)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(12)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Disable backdrop' flexCenter>
          <MDBBtn onClick={this.toggle(19)} color='danger'>
            Modal
          </MDBBtn>
          <MDBModal isOpen={modal19} toggle={this.toggle(19)} disableBackdrop>
            <MDBModalHeader toggle={this.toggle(19)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(19)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Focus Trap' flexCenter>
          <MDBBtn onClick={this.toggle(20)} color='success'>
            Modal
          </MDBBtn>
          <MDBModal isOpen={modal20} toggle={this.toggle(20)} disableFocusTrap={false}>
            <MDBModalHeader toggle={this.toggle(20)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(20)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Scrolling long content' flexCenter>
          <MDBBtn color='primary' onClick={this.toggle(13)}>
            Modal
          </MDBBtn>
          <MDBModal isOpen={modal13} toggle={this.toggle(13)}>
            <MDBModalHeader toggle={this.toggle(13)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(13)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Vertically centered' flexCenter>
          <MDBBtn color='primary' onClick={this.toggle(14)}>
            Modal
          </MDBBtn>
          <MDBModal isOpen={modal14} toggle={this.toggle(14)} centered>
            <MDBModalHeader toggle={this.toggle(14)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(14)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Tooltips and popovers' flexCenter>
          <MDBBtn color='primary' onClick={this.toggle(15)}>
            Modal
          </MDBBtn>
          <MDBModal isOpen={modal15} toggle={this.toggle(15)}>
            <MDBModalHeader toggle={this.toggle(15)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              This
              <MDBPopover popover clickable id='popper1' placement='right'>
                <MDBBtn color='secondary'>button</MDBBtn>
                <div>
                  <MDBPopoverHeader>MDBPopover title</MDBPopoverHeader>
                  <MDBPopoverBody>MDBPopover body content is set in this attribute.</MDBPopoverBody>
                </div>
              </MDBPopover>
              triggers a popover on click.
              <hr />
              <MDBTooltip id='popper4' tag='span' domElement>
                <a href='!#'>This link</a>
                <span>Tooltip</span>
              </MDBTooltip>{' '}
              and{' '}
              <MDBTooltip id='popper3' tag='span' domElement>
                <a href='!#'>that link</a>
                <span>Tooltip</span>
              </MDBTooltip>{' '}
              have tooltips on hover.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(15)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Using the grid' flexCenter>
          <MDBBtn onClick={this.toggle(16)}>Modal</MDBBtn>
          <MDBModal isOpen={modal16} toggle={this.toggle(16)}>
            <MDBModalHeader toggle={this.toggle(16)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              <MDBContainer fluid className='text-white'>
                <MDBRow>
                  <MDBCol md='4' className='bg-info'>
                    .col-md-4
                  </MDBCol>
                  <MDBCol md='4' className='ml-auto bg-info'>
                    .col-md-4 .ml-auto
                  </MDBCol>
                </MDBRow>
                <br />
                <MDBRow>
                  <MDBCol md='3' className='ml-auto bg-info'>
                    .col-md-3 .ml-auto
                  </MDBCol>
                  <MDBCol md='2' className='ml-auto bg-info'>
                    .col-md-2 .ml-auto
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md='6' className='ml-5 bg-info'>
                    .col-md-6 .ml-5
                  </MDBCol>
                </MDBRow>
                <br />
                <MDBRow>
                  <MDBCol sm='9' className='bg-info'>
                    Level 1: .col-sm-9
                    <MDBRow>
                      <MDBCol sm='6' className='bg-info'>
                        Level 2: .col-8 .col-sm-6
                      </MDBCol>
                      <MDBCol sm='6' className='bg-info'>
                        Level 2: .col-4 .col-sm-6
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(16)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Varying modal content' flexCenter>
          <MDBBtn color='primary' onClick={this.toggle(17)}>
            Open modal for {mailAddress}
          </MDBBtn>
          <MDBModal isOpen={modal17} toggle={this.toggle(17)}>
            <MDBModalHeader toggle={this.toggle(17)}>New message to {mailAddress}</MDBModalHeader>
            <MDBModalBody>
              <div className='md-form'>
                <MDBInput value={mailAddress} />
                <MDBInput type='textarea' label='Message' rows='2' />
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(17)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Send message</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Modal Events' flexCenter>
          <MDBBtn color='warning' onClick={this.toggle(18)}>
            Modal events
          </MDBBtn>
          <MDBModal
            isOpen={modal18}
            toggle={this.toggle(18)}
            hideModal={this.hideFunction}
            hiddenModal={this.hiddenFunction}
            showModal={this.showFunction}
          >
            <MDBModalHeader toggle={this.toggle(18)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(18)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default ModalPage;
