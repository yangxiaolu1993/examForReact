import React,{ useState, useEffect } from 'react';
import dayjs from 'dayjs'
import * as dayjsparsedate from "../utils/dayParsedate";

// @ts-ignore: Unreachable code error
dayjs.extend(dayjsparsedate.default);


function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  
  const parseTime = (str, format = "HH:mm:ss")=>{
    return dayjs.advancedparse.parse(str, format);
  }
  const formatTime = (d, format = "HH:mm:ss")=>{
    // @ts-ignore: Unreachable code error
    return dayjs.advancedparse.format(d, format);
  }
  console.log(formatTime(new Date(),'HH:mm'))
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Home;