import { useState,useEffect } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import {v4} from 'uuid'

import Modal from '../../../shared/components/Modal'
import UserCardModal from '../../Cards/components/UserCardModal'
import CardItem from '../../Cards/components/CardItem'
import { fetchAllTasks } from '../../../redux/users/users-operations'

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
    }, [dispatch])

    
    
    const userCards = useSelector(state => state.users.cards, shallowEqual)

    const [boards, setBoards] = useState([
        {id:1, title: 'cards', items: userCards},
        {id:2, title: 'cards-auth', items: []}
    ]);

    console.log(boards);

    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    // console.log(currentItem);
    console.log(currentBoard);

    const dragOverHandler = (e) => {
        e.preventDefault()
        
    }
    
    const dragLeaveHandler = (e) => {
        
    }

    function dragStartHandler(e, board, item) {
        // console.log(item);
        // console.log(board);
        // console.log(e);
        setCurrentBoard(board)
        setCurrentItem(item)
        
    }

    const dragEndHandler = (e) => {
        
    }

    function dropHandler(e, board, item) {
        console.log(e);
        console.log(item);
        console.log(board.items.indexOf(item));
        e.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        console.log(currentBoard);
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
        // e.preventDefault()
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
    }

    useEffect(() => {
        setBoards(prev => {
            const newItems = [...prev]
            newItems[0].items = userCards
            return newItems
    })
    }, [userCards])
    
    
    return (
        <>
            <section className={`${styles.container} ${styles.cardPageContainer}`}>
                <div className={styles.wrapper} >
                    {boards.map(board => <div key={v4()} className={styles.wrapperCard}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropCardHandler(e, board)}>
                        <h3>{board.title}</h3>
                        <ul >
                            {board.items.map(item =>
                                <CardItem key={v4()} onClick={toggleModal} {...item}
                                    onDragOver={(e) => dragOverHandler(e)}
                                    onDragLeave={(e) => dragLeaveHandler(e)}
                                    onDragStart={(e) => dragStartHandler(e, board, item)}
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
