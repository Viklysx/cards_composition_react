import './App.css';
import Card from './components/Card';

function App() {
  return (
    <Card img='https://avatars.mds.yandex.net/get-zen_doc/176438/pub_5f9d216149505f68117bafc9_5f9d249949505f6811808c0a/scale_1200'>        
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </Card>
  );
}

export default App;
