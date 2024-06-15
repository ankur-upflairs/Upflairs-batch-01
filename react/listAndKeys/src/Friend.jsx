import CheckIcon from '@mui/icons-material/Check';

export function Team({name,age}) {
    return <li className="inteam">{name} 
    <p>eligible for team <CheckIcon/></p>
    </li>
}

export function NotInTeam({name,age}) {
    return <li className="notinteam">{name} 
    <p>not eligible for team</p>
    </li>
}