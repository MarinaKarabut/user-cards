
import { useSelector, shallowEqual } from 'react-redux';

import UserInfo from '../ Navbar/components/UserInfo'
import Logo from '../../shared/components/Logo'

import { getIsAuthenticated } from '../../redux/auth/auth-selectors';


import styles from './Header.module.scss'


function Header() {
    const info = useSelector(state => state.auth.user, shallowEqual)

    const isAuthorized = useSelector(state => getIsAuthenticated(state), shallowEqual);

    return (
        <header className={styles.header}>
            <div className={`${styles.container} ${styles.wrapper}`}>
                <div>
                    <Logo />
                </div>
                {isAuthorized && <UserInfo info={ info}/>}
            </div>        
        </header>)
};

export default Header;
