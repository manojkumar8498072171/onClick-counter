import React, { useState } from 'react';

const Counter = () => {
    let[state,setState]=useState({
        count:0
    });
    let incrcounter=()=>{
        setState((state)=>({
            count:state.count+1
        })); 
        
        };
        let decrcounter=()=>{
            setState((state)=>({
             count:state.count-1
            }));
    };
  return (
    <React.Fragment>
      <div className='container mt-3'>
          <h1>Counter Increment and decrment</h1>
          <div className='row'>
              <div className='col-md-3'>
                  <div className='card'>
                     <div className='card-header bg-info text-center text-light'>
                         <h2>Counter</h2>
                     </div>
                     <div className='card-body'>
                         <h4 >{state.count}</h4>
                        <button onClick={incrcounter} className='btn btn-success btn-sm'>increment</button>
                        <button onClick={decrcounter} className=' btn btn-danger btn-sm'>decrement</button>
                     </div>
                 </div> 
              </div>
          </div>
      </div>
    </React.Fragment>
  );
};

export default Counter
