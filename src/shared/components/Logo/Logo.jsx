import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Logo.module.scss'

const Logo = ({className}) => {
    return (
            <Link to='/' className={styles.logo}>
                <span className={`${styles.text} ${className}`}>LOGO</span>
            </Link>
    )
}

export default Logo

Logo.defaultProps = {
    className: '',
}

 Logo.propTypes = {
    className: PropTypes.string,
}
