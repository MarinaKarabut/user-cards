import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { v4 } from 'uuid'
// import PropTypes from 'prop-types';

import { getPosts } from '../../../../redux/cards/cards-operations';

import styles from './UserCardModal.module.scss'

function UserCardModal({ id }) {
    const posts = useSelector(state => state.cards.posts, shallowEqual)
    const oneUserPosts = posts.filter(post => id === post.userId)

    const postEl = oneUserPosts.map(post => <li className={styles.userModalCardItem} key={v4()}>
        <h3 className={styles.userModalCardTitle}>{post.title}</h3>
        <p>{ post.body}</p>
    </li>)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    
    return (
        <ul className={ styles.userModalCard}>
            {postEl} 
        </ul>
    )
};

export default UserCardModal;

