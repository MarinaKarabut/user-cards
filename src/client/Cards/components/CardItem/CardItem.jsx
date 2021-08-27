import PropTypes from 'prop-types';

import styles from './CardItem.module.scss'

function CardItem({ id, name, username, onClick, phone, website, email, address, company, onDragLeave, onDrop, onDragStart,onDragEnd, onDragOver, draggable }) {
    return (
        <li className={styles.card} onClick={() => onClick(id)}
            draggable={draggable}
            onDragOver={(e) => onDragOver(e)}
            onDragLeave={(e) => onDragLeave(e)}
            onDragStart={(e) => onDragStart(e)}
            onDragEnd={(e) => onDragEnd(e)} 
            onDrop={(e) => onDrop(e)}
            >
            <h3 className={styles.cardName}>{ name}</h3>
            <p className={styles.cardUserName}> username: {username}</p>
            <p>phone: {phone}</p>
            <p>email: { email }</p>
            <p>website: {website}</p>
            <address> address
                <p>street: {address.street}</p>
                <p>suite: {address.suite}</p>
                <p>city: {address.city}</p>
                <p>zipcode: {address.zipcode }</p>
            </address>
            <div>company:
                <p>name: {company.name}</p>
                <p>catchPhrase: {company.catchPhrase}</p>
                <p>bs: { company.bs}</p>
            </div>
            
        </li>
    )
};

export default CardItem;

CardItem.defaultProps = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    company:{},
    onClick: () => {},
}

CardItem.propTypes = {
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    company: PropTypes.objectOf(PropTypes.string),
    onClick: PropTypes.func,
}
