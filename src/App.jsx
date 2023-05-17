// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import SubscriptionForm from './components/SubscriptionForm';

import styled from 'styled-components';

import svg1 from './svgs/svg-1.svg';
import svg2 from './svgs/svg-2.svg';
import svg3 from './svgs/svg-3.svg';
import svg4 from './svgs/svg-4.svg';
import svg5 from './svgs/svg-5.svg';


const data = [
  { id: 1, text: "100+ Job relevant courses", icon: svg1 },
  { id: 2, text: "20,000+ Hours of content", icon: svg2 },
  { id: 3, text: "Exclusive webinar access", icon: svg3 },
  { id: 4, text: "Scholarship worth Rs94,500", icon: svg4 },
  { id: 5, text: "Ad Free learning experience", icon: svg5 },
];

const ListItem = ({ item }) => {
  return (
    <li className="listItem">
      <img src={item.icon} alt="icon" className='icon'  />
      <span className="text">{item.text}</span>
    </li>
  );
}


function App() {
  return (
    <Container >
      <NavBar />
      <div className="contentContainer">
        <div className="mainLockup">
          <h1 className="mainTitle">
            Access curated course worth <span>
              <div
                className="strike"
                style={{
                  position: 'absolute',
                  width: '140px',
                  height: '6px',
                  left: '110px',
                  top: '200px',
                  backgroundColor: '#FF0000',
                }}
                
              ></div>Rs 18,500 at just <span style={{ fontSize: '1em', color: '#0096ff' }}>Rs 99</span> per year!</span>
          </h1>
          <ul>
            {data.map(item => <ListItem key={item.id} item={item} />)}
          </ul>

        </div>

        <div>
        <SubscriptionForm />
        </div>
        
      </div>
      
    </Container>
  );
}


const Container = styled.div`
.contentContainer{
    // width: 100vw;
    // margin-top: 48px;
    // display: flex;
    // flex-direction: row;
    // justify-content: space-between;
    // gap: -3em;
    // align-items: flex-start;
    // padding: 0;
}
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    justify-content: center;
    align-items: flex-start;
  }

  .mainLockup {
    margin-left: 48px;
    margin-right: 48px;
    width: 799px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 48px;
  }
  .mainTitle{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0;
    gap: 8px;

    width: 799px;
    height: 148px;

    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 70px;
    text-align: left;
    letter-spacing: -0.01em;

    color: #FFFFFF;
  }

  `



export default App;
