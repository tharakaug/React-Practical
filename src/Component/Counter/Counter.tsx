// import {Component} from "react";
// import "./Counter.css";
//
//
// interface Counterprops {
//     data ? : any;
// }
//
// interface CounterAppState {
//     count: number;
// }
//
// export class Counter extends Component<Counterprops , CounterAppState> {
//
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//         alert("Constructor: Component is initializing")
//     }
//
//     componentDidMount() {
//         alert("componentDidMount: Component has been mounted! Props :" + this.props.data);
//     }
//
//     componentWillUnmount() {
//         alert("componentWillUnmount: Component is being removed!")
//     }
//
//     componentDidUpdate(prevProps: Readonly<Counterprops>, prevState: Readonly<CounterAppState>, snapshot?: any) {
//         if (prevState.count !== this.state.count) {
//             alert("componentDidUpdate: Count has been updated! Props :");
//         }
//     }
//
//     increment = () =>{
//         // alert("Increment Button Clicked")
//         this.setState((previousState) => ({
//             count: previousState.count + 1
//
//         }));
//     }
//     decrement = () => {
//         // alert("Decrement Button Clicked")
//         this.setState((previousState) => ({
//             count: previousState.count - 1
//         }))
//     }
//
//     render() {
//         return (
//             <div className= "counter">
//                 <h1>React Counter (Class Component) </h1>
//                 <h2>Count: {this.state.count}</h2>
//             <div>
//                 <button className="button"
//                 onClick={this.increment}>+</button>
//                 <button className="button"
//                 onClick={this.decrement}>-</button>
//             </div>
//             </div>
//
//         );
//     }
// }

import './Counter.css';
import {Message} from "../Message/Message";
import {useDispatch, useSelector} from "react-redux";
import {CounterState, decrement, increment, incrementAsync} from "../../slices/counterSlice";
import {AppDispatch, RootState} from "../../store/store";

export function Counter() {

    // const [state, dispatch] = useReducer(
    //     CounterSlice, {
    //         count: 0,
    //         error: null
    //     },
    // )

   const dispatch = useDispatch<AppDispatch>();

   const {count, error} = (useSelector((state: RootState) => state.counter));

   /*const count = useSelector(
        (state: CounterState) => state.count
    );

   const error = useSelector(
        (state: CounterState) => state.error
    );*/

    return (
        <div className="counter">
            <h1>React Counter (Using useReducer() )</h1>
            <h2>Count: {count}</h2>
            {error && <span className= "error">{error}</span>}
            <div>
                <button className="button" onClick={() => dispatch(increment())}>+</button>
                <button className="button" onClick={() => dispatch(decrement())}>-</button>
                <button className="button" onClick={() => dispatch(incrementAsync(1))}>Async add</button>
            </div>
            <Message/>
        </div>
    );
}
