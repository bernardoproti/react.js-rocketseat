import { useState } from 'react';
import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeCount() {
        setLikeCount(likeCount + 1);
    }

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/bernardoproti.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bernardo Proti</strong>
                            <time title="15 de Abril às 15:35h" dateTime="2025-15-04 15:35:00">Cerca de 1h atrás</time>
                        </div>

                        <button onMouseDown={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp size={20} />
                        Curtir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}