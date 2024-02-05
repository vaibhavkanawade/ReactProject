import './App.css'

import CurrentTime from './component/currentTime';
import ClockHead from './component/clockHead';
import ClockSlogan from './component/clockslogan';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return <center>
    <ClockHead></ClockHead>
    <ClockSlogan></ClockSlogan>
    <CurrentTime></CurrentTime>
  </center>
}

export default App
