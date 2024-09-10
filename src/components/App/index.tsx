import Home from '../Home';
import Header from '../Header';
import './../../styles/app.css';

function App() {

  return (
    <>
      <Header />
      <div style={{flex: 1, justifyItems: 'center'}}>
        <div style={{
          margin: 'auto',
          backgroundColor: "#197a7f",
          width: '400px',
          height: '400px',
          display: 'inline-block'
        }}></div>
        <div style={{
          margin: 'auto',
          backgroundColor: "#6b72f4",
          width: '400px',
          height: '400px',
          display: 'inline-block'
        }}></div>
      </div>
      <Home />
    </>
  );
}

export default App;
