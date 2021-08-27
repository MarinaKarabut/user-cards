import { useDispatch} from 'react-redux';

import { ReactComponent as LogOut } from '../../../../images/logout.svg';
import {logOut} from '../../../../redux/auth/auth-operations'

import styles from './UserInfo.module.scss'

function UserInfo() {

    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(logOut())
    }

    return (
         <div className={ styles.userInfoWrapper}>
            {/* <img src='' alt="" width="32" className={ styles.avatar}/> */}
            <span className={styles.name}>Welcome, Marina</span>
            <LogOut className={styles.btnLogOut} onClick={onLogout}/>
        </div>
    )
};

export default UserInfo;
