import React from 'react';
import {BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ButtonPage from './pages/ButtonPage';
import CSSPage from './pages/CSSPage';
import TablePage from './pages/TablePage';
import BadgePage from './pages/BadgePage';
import BreadcrumbPage from './pages/BreadcrumbPage';
import FaPage from './pages/FaPage';
import ComponentsPage from './pages/ComponentsPage';
import ModalPage from './pages/ModalPage';
import JavaScriptPage from './pages/JavaScriptPage';
import ProgressPage from './pages/ProgressPage';
import InputPage from './pages/InputPage';
import MediaPage from './pages/MediaPage';
import JumbotronPage from './pages/JumbotronPage';
import AlertPage from './pages/AlertPage';
import CardsPage from './pages/CardsPage';
import PaginationPage from './pages/PaginationPage';
import PopoverPage from './pages/PopoverPage';
import ListGroupPage from './pages/ListGroupPage';
import CarouselPage from './pages/CarouselPage';
import TabsPage from './pages/TabsPage';
import TooltipsPage from './pages/TooltipsPage';
import FooterPage from './pages/FooterPage';

class Routes extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/css' component={CSSPage} />
                    <Route exact path='/css/table' component={TablePage} />
                    <Route exact path='/components' component={ComponentsPage} />
                    <Route path='/components/badge' component={BadgePage} />
                    <Route path='/components/breadcrumb' component={BreadcrumbPage} />
                    <Route path='/components/media' component={MediaPage} />
                    <Route path='/components/input' component={InputPage} />
                    <Route path='/components/alert' component={AlertPage} />
                    <Route path='/css/icons' component={FaPage} />
                    <Route path='/css/jumbotron' component={JumbotronPage} />
                    <Route path='/components/cards' component={CardsPage} />
                    <Route path='/components/buttons' component={ButtonPage} />
                    <Route path='/components/progress' component={ProgressPage} />
                    <Route path='/components/popover' component={PopoverPage} />
                    <Route path='/components/pagination' component={PaginationPage} />
                    <Route path='/components/list-group' component={ListGroupPage} />
                    <Route path='/components/tabs' component={TabsPage} />
                    <Route path='/components/tooltips' component={TooltipsPage} />
                    <Route path='/components/footer' component={FooterPage} />
                    <Route exact path='/javascript' component={JavaScriptPage} />
                    <Route path='/javascript/modal' component={ModalPage} />
                    <Route path='/javascript/carousel' component={CarouselPage} />
                    <Route render = { function() {
                        return <h1>Not Found</h1>
                    }} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;
