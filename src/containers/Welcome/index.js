import React, { Component } from 'react';
import Permission from '../../components/permission';

// Import Bootstrap Components
import { Button } from 'reactstrap';

class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <Permission />

        <Button 
          color="danger"
          className="col"
          href="/emojistory"
        >
          Start
        </Button>

      </div>
    );
  }
}

export default Welcome;
