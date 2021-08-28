import { useDispatch} from 'react-redux';

import { ReactComponent as LogOut } from '../../../../images/logout.svg';
import { logOut } from '../../../../redux/auth/auth-operations'
import defaultAvatar from '../../../../images/avatar.jpg'

import styles from './UserInfo.module.scss'

function UserInfo() {

    const name = 'guest'
    const avatar = defaultAvatar

    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(logOut())
    }

    return (
         <div className={ styles.userInfoWrapper}>
            <img src={avatar} alt=""  className={ styles.avatar}/>
            <span className={styles.name}>Welcome, {name}</span>
            <LogOut className={styles.btnLogOut} onClick={onLogout}/>
        </div>
    )
};

export default UserInfo;
