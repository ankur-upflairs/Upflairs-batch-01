import React, { memo, useMemo } from 'react'

function UseMemo() {
    let n=10

    let memo=useMemo( function() {
        let fact =1
        for (let i = 1; i <= n; i++) {
            fact*=i
            
        }
        return fact
    },[n])
    // function cal(n) {
    //     let fact =1
    //     for (let i = 1; i <= n; i++) {
    //         fact*=i
            
    //     }
    //     return fact
    // }
  return (
    <div>
      {memo}
    </div>
  )
}

export default memo(UseMemo)
//memo checks for change in props if props changes then it rerenders other wise it doesn't re-render
