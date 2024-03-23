import ProgressBar from 'react-bootstrap/ProgressBar';


function Progress({x}) {
 
  return <ProgressBar animated triped variant="info" now={x} />;
}

export default Progress;