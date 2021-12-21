import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Random = () => {
    return (
        <div className="mx-0">
        <Button  variant="primary">Button #1</Button>
        <Button  variant="secondary" className="mx-2">Button #2</Button>
        <Button  variant="success">Button #3</Button>
      </div>
    )
}


export default Random;