import React from 'react';
import { connect } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

import { tickets } from './data/tickets.json';
import courses from './data/courses.json';

import { setTickets, setCourses } from './redux/actions';

import Header from './components/Header';
import Footer from './components/Footer';
import GoTopButton from './components/GoTopButton';
import SearchBar from './components/SearchBar';
import Tickets from './components/Tickets';

import Fonts from './assets/fonts/index.js';
import cursor from './assets/images/cursor/arrow.png';

import { getFilteredTickets } from './redux/selectors';

class App extends React.Component {

  state = {
    isButtonVisible: false
  };

  componentDidMount(){
    window.addEventListener('scroll', this.showButton);

    this.props.InitTickets(tickets);

    this.props.InitCourses({lastUpdate: new Date(), valuta: Object.values(courses.Valute)});
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.showButton);
  }

  showButton = () => {
    if (window.pageYOffset > 20) {
      if (!this.state.isButtonVisible)
        this.setState({ isButtonVisible: true });
    }
    else {
      if (this.state.isButtonVisible)
        this.setState({ isButtonVisible: false });
    }
  }

   handleClick = () => {
    window.scrollTo(0, 0);
   }

  render() {
    console.log('FILTERED TICKETS *******************************************************************');
    console.log(this.props.filteredTickets);
    console.log('************************************************************************************');

    return (
      <Container>
        <Fonts/>
        <BodyStyle/>
        
        <Header/>
        <Content>
         <Main>
            <SearchBar/>
            <Tickets items={this.props.filteredTickets}/>
            <GoTopButton visible={this.state.isButtonVisible} click={this.handleClick}/> {/**/}
          </Main> 
        </Content>
        <Footer/>
        
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    filteredTickets: getFilteredTickets(state)
  };
};

const mapDispatchToProps = dispatch => ({
  InitTickets: items => dispatch(setTickets(items)),
  InitCourses: items => dispatch(setCourses(items))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

const BodyStyle = createGlobalStyle`
  body {
    margin: 0;

    font-family: 'Open Sans';
    cursor: url(${cursor}), default;
    background-color: #f3f7fa;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-areas:
  "header"
  "content"
  "footer";
  grid-template-rows: 150px 1fr 60px;
  grid-template-columns: 1fr;

  height: 100vh;

  @media screen and (max-width: 1024px) {
    & {
      grid-template-rows: 100px 1fr 60px; // Уменьшаем размер header (первая строка)
    }
  }
`;

const Content = styled.div`
  grid-area: content;
`;

const Main = styled.main`
  display: grid;
  grid-template-areas:
    "sidebar tickets";
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr;
  grid-gap: 5px 5px;

  height: 100%;
  max-width: 1024px;
    
  margin: 0 auto;

  @media screen and (max-width: 1024px) {

    // Меняем расположение панели фильтрации и списка билетов с вертикального на горизонтальное
    & {
      grid-template-areas:
      "sidebar"
      "tickets";
      grid-template-rows: auto 1fr; // Высота панели фильтрации устанавливается в зависимости от содержимого
      grid-template-columns: 1fr;
      grid-gap: 5px 5px;
    }
  }
`;