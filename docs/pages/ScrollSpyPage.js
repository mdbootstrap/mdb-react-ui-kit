import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import { Container, Row, Col } from 'mdbreact';
import ScrollSpyBox from '../../src/components/ScrollSpyBox';
import ScrollSpyList from '../../src/components/ScrollSpyList';
import ScrollSpyListItem from '../../src/components/ScrollSpyListItem';
import ScrollSpyText from '../../src/components/ScrollSpyText';

const scrollSpySectionsOffset = [];

class ScrollSpyPage extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      active: 1
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.scrollSpyText.addEventListener('scroll', this.handleScroll);
    let scrollSpySections = this.scrollSpyText.getElementsByTagName('h4');
    for (let i = 0; i < scrollSpySections.length; i++) {
      let currentOffsetTop = scrollSpySections[i].offsetTop - 16;
      if (!scrollSpySectionsOffset.includes(currentOffsetTop)) {
        scrollSpySectionsOffset.push(currentOffsetTop);
      }
    }
  }

  componentWillUnmount() {
    this.scrollSpyText.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    for (let i = 0; i < scrollSpySectionsOffset.length; i++) {
      if (this.scrollSpyText.scrollTop > scrollSpySectionsOffset[i]) {
        if (this.scrollSpyText.scrollTop > scrollSpySectionsOffset[i+1]) {
        } else {
          this.setState({active: i+1});
        }
      }
    }

  }

  render() {
    return(
      <Container className="mt-5">
        <h2 className="mb-5">ScrollSpy</h2>
        <ScrollSpyBox>
          <ScrollSpyList color="red">
            <ScrollSpyListItem href="#section1" active={this.state.active === 1 ? true : false}>section1</ScrollSpyListItem>
            <ScrollSpyListItem href="#section2" active={this.state.active === 2 ? true : false}>section2</ScrollSpyListItem>
            <ScrollSpyListItem href="#section3" active={this.state.active === 3 ? true : false}>section3</ScrollSpyListItem>
          </ScrollSpyList>
          <div style={{height: '60px'}}></div>
          <h4>Scroll down to see the effect</h4>
          <hr className="mb-5" />
          <ScrollSpyText scrollSpyRef={el => this.scrollSpyText = el}>
            <h4 id="section1">section1</h4>
            <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo
                booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus,
                cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
            <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo
                booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus,
                cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
            <h4 id="section2">section2</h4>
            <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck,
                mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
            <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo
                booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus,
                cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
            <h4 id="section3">section3</h4>
            <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo
                park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.</p>
            <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo
                booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus,
                cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
          </ScrollSpyText>
        </ScrollSpyBox>
      </Container>
    );
  }
};

export default ScrollSpyPage;
