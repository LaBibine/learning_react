import { div } from 'prelude-ls';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function WelcomeFunk ({name, children}) {
  return <div>
  <h1>Hello {name}</h1>
  <p>{children}</p>
  </div>
}

class Welcome extends React.Component {
  render() {
    return <div>
    <h1>Bonjour {this.props.name}</h1>
    <p>{this.props.children}</p>
    </div>
  }
}

class Clock extends React.Component {

  constructor (props) {
    super(props)
    this.state = {date: new Date()}
    this.timer = null
  }

  componentDidMount () {
    this.timer = window.setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount () {
    window.clearInterval(this.timer)
  }

  tick () {
    this.setState({date: new Date()})
  }

  render() {
  return <div>
    Today is: {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
  </div>
  }
}

class Incrementer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {n: props.start}
    this.timer = null
  }

  componentDidMount () {
    window.setInterval(this.increment.bind(this), 1000)
  }

  componentDidUpdate () {
    window.clearInterval(this.timer)
  }

  increment () {
    this.setState((state, props) => ({n: state.n + props.step}))
  }

  render () {
    return <div>Valeur : {this.state.n}</div>
  }

}

Incrementer.defaultProps = {
start: 0,
step: 1,
}

function Home () {
  return <div>
    <Welcome name="Pierre"/>
    <Welcome name="Paul"/>
    <Welcome name="Jean"/>
    <Clock/>
    <Incrementer start={0}/>
    <Incrementer start={100} step={10} />
  </div>
}

ReactDOM.render(<Home/>, document.querySelector("#root"))