import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App/index';
import './index.css';

function App(props) {
  return (
    <h1>¡{props.saludo} {props.nombre}!</h1>
  )
}

function withSaludo(WrappedComponent) {
  return function WrappedComponentWithSaludo(saludo) {
    return function ComponentDeverdad(props) {
      return (
        <>
        <WrappedComponent {...props} saludo={saludo}  />
        <p>Estamos acompañando al wrapp component</p>
        </>
      )
    } 
  }
}

const AppWithSaludo = withSaludo(App)("holis")

ReactDOM.render(
  <AppWithSaludo nombre="Andres Negro" />,
  document.getElementById('root')
);
