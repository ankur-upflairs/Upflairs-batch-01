import React from 'react'
import { friendsData } from './friendsData'
import './friends.css'
import { NotInTeam, Team } from './Friend'

// function Friends() {
//   return (
//     <div>
//         <ul>
//       {friendsData.map((friend,index)=>{
//         return <li key={friend.id} style={{backgroundColor: friend.age < 19 ?'green' : 'red'}}
//             className={friend.age < 19 ? 'inteam': 'notinteam'}
//             >
//             {friend.name} -{friend.age< 19 ? 'eligible for team' :'not eligible for team'}
//         </li>
//       })}
//       </ul>
//     </div>
//   )
// }

function Friends() {
    return (
      <div>
          <ul>
        {friendsData.map((friend,index)=>{
          return  < >
          {friend.age < 19 ? <Team {...friend} />: <NotInTeam {...friend} />}
          </>
        })}
        </ul>
      </div>
    )
  }

export default Friends
