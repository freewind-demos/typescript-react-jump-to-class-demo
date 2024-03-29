//import * as React from 'react'
import React from 'react'

export default function Hello() {
  function jumpToClass(targetClass: string): void {
    const target = document.querySelector(targetClass)
    if (target) {
      // 'scrollIntoView' doesn't work well without scrollIntoView in some cases
      setTimeout(() => {
        target.scrollIntoView();
      })
    }
  }

  return <div>
    <h1>Jump to class</h1>
    <div>
      Jump to:
      <button onClick={() => jumpToClass('.section1')}>to section1</button>
      <button onClick={() => jumpToClass('.section2')}>to section2</button>
      <button onClick={() => jumpToClass('.section3')}>to section3</button>
    </div>
    <div className='section1'>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
      <p>11111111111</p>
    </div>
    <div className='section2'>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
      <p>22222222222</p>
    </div>
    <div className='section3'>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
      <p>33333333333</p>
    </div>
  </div>
};
