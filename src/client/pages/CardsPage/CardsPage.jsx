import { useState,useEffect } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import {v4} from 'uuid'

import Modal from '../../../shared/components/Modal'
import UserCardModal from '../../Cards/components/UserCardModal'
import CardItem from '../../Cards/components/CardItem'
import { fetchAllTasks, getCards, add } from '../../../redux/cards/cards-operations'

import styles from './CardsPage.module.scss'

function CardsPage() {
    const [openModal, setOpenModal] = useState(false);
    const [id, setId] = useState()

    const toggleModal = (id) => {
        setOpenModal(!openModal);
        setId(id)
    };

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAllTasks())
        dispatch(getCards());
    }, [dispatch])

    const userCards = useSelector(state => state.cards.cards, shallowEqual)

    const newUserCards = useSelector(state => state.cards.userCards, shallowEqual)

    const cards = userCards.filter(card => newUserCards.findIndex(item => item.name === card.name) === -1)
     
    const [boards, setBoards] = useState([
        {id:1, title: "cards", items: [...cards]},
        {id:2, title: "registered user's cards", items: [...newUserCards]}
    ]);

    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);


    const dragOverHandler = (e) => {
        e.preventDefault()
    }
    
    const dragLeaveHandler = (e) => {
        
    }

    function dragStartHandler(e, board, item,id) {
        setCurrentBoard(board)
        setCurrentItem(item)
        setId(id)
    }

    const dragEndHandler = (e) => {
        
    }

    function dropHandler(e, board, item) {
        e.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        const dropIndex = board.items.indexOf(item)
        board.items.splice(dropIndex + 1, 0, currentItem)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }


    function dropCardHandler(e, board) {
        const currentId = board.items.map(item => item.id)
        if (!currentId.includes(currentItem.id)) {
            board.items.push(currentItem)
            const currentIndex = currentBoard.items.indexOf(currentItem)
            currentBoard.items.splice(currentIndex, 1)
            setBoards(boards.map(b => {
                if (b.id === board.id) {
                    return board
            }
            if (b.id === currentBoard.id) {
               return currentBoard
            }
            return b
            }))
            dispatch(add(currentItem))
      }
    }

    return (
        <>
            <section className={`${styles.container} ${styles.cardPageContainer}`}>
                <div className={styles.wrapper} >
                    {boards.map(board => <div key={v4()} className={styles.wrapperCard}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropCardHandler(e, board)}>
                        <h3 className={styles.title}>{board.title}</h3>
                        <ul >
                            {board.items.map(item =>
                                <CardItem key={v4()} onClick={toggleModal} {...item}
                                    onDragOver={(e) => dragOverHandler(e)}
                                    onDragLeave={(e) => dragLeaveHandler(e)}
                                    onDragStart={(e) => dragStartHandler(e, board, item, item._id)}
                                    onDragEnd={(e) => dragEndHandler(e)}
                                    onDrop={(e) => dropHandler(e, board, item)}
                                    draggable={true}
                                />)}
                        </ul>
                    </div>)}
                    {openModal && (<Modal onClose={toggleModal}>< UserCardModal id={id} /></Modal>)}
                </div>
            </section>
        </>
    )
};

export default CardsPage;
