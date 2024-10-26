import './App.css';
import Headerservice from './componenteservice/Headerservice';
import Wedo from './componenteservice/Wedo';
import Ropage from './componenteservice/Ropage';
import Featureservice from './componenteservice/Featureservice';
import Formget from './componenteservice/Formget';
import Footerservice  from './componenteservice/Footerservice';
function Services01() {
  return (
    <div className="Services01">
      <Headerservice />
      <Wedo />
      <Ropage />
      <Featureservice />
      <Formget />
      <Footerservice />
      

    </div>
  );
} 
export default Services01;