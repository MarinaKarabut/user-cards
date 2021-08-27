import PropTypes from 'prop-types';
import { v4 } from 'uuid'

import CardItem from '../CardItem'

function CardsList({ item, onClick }) {
    const cardEl = item.map(({ id, ...card }) => <CardItem key={v4()}{...card} onClick={() => onClick(id)} />)
    
    return (
        <ul>
            
            {cardEl}
        </ul>
    )
};

export default CardsList;

CardsList.defaultProps = {
    onClick: () => {},
}

CardsList.propTypes = {
    onClick: PropTypes.func,
}
