import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';
import { Component } from 'react';
import { counterActions } from '../store/index'

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // {type: UNIQUE_IDENTIFIER, payload: 10}
  }

  const decrementhandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
         <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementhandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//     toggleCounterHandler() {

//     }

//     incrementHandler() {
//       this.props.increment();
//     }

//     decrementhandler() {
//       this.props.decrement();
//     }

//     render() {
//       return (
//         <main className={classes.counter}>
//           <h1>Redux Counter</h1>
//           <div className={classes.value}>{this.props.counter}</div>
//           <div>
//             <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//             <button onClick={this.decrementhandler.bind(this)}>Decrement</button>
//           </div>
//           <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//         </main>
//       );
//     }
    
// }

// const mapStateToProp = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProp = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// }

// export default connect(mapStateToProp, mapDispatchToProp)(Counter);
