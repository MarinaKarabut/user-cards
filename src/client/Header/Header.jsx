
import { useSelector, shallowEqual } from 'react-redux';

import UserInfo from '../ Navbar/components/UserInfo'
import Logo from '../../shared/components/Logo'

import { getIsAuthenticated } from '../../redux/auth/auth-selectors';


import styles from './Header.module.scss'

function Header() {
    const isAuthorized = useSelector(state => getIsAuthenticated(state), shallowEqual);

    return (
        <header className={styles.header}>
            <div className={`${styles.container} ${styles.wrapper}`}>
                <div>
                    <Logo />
                </div>
                {isAuthorized && <UserInfo />}
            </div>        
        </header>)
};

export default Header;
