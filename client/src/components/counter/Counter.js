import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../../redux/counter"

function Counter() {
//  const { count } = useSelector((state) => state.counter)
 const count = useSelector((state) => state.counter.count)
 const dispatch = useDispatch();
  return (
    <div>
      <button id="clicker" onClick={() => dispatch(increment())}>{count}</button>
      {/* <button id="clicker" onClick={() => dispatch(decrement())}>{count}</button>
      <button id="clicker" onClick={() => dispatch(incrementByAmount(5))}>{count}</button> */}
    </div>
  )
}

export default Counter
