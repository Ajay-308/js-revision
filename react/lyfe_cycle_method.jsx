class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null; // usually return an updated state or null
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("Render");
    return <h1>Hello</h1>;
  }
}

//output 
// Constructor
// getDerivedStateFromProps
// Render
// componentDidMount


shouldComponentUpdate(nextProps, nextState) {
  console.log("shouldComponentUpdate");
  return true; // or false to prevent update
}

getSnapshotBeforeUpdate(prevProps, prevState) {
  console.log("getSnapshotBeforeUpdate");
  return null; // or some value
}

componentDidUpdate(prevProps, prevState, snapshot) {
  console.log("componentDidUpdate");
}



/ouput
getDerivedStateFromProps
shouldComponentUpdate
Render
getSnapshotBeforeUpdate
componentDidUpdate


componentWillUnmount() {
  console.log("componentWillUnmount");
}

