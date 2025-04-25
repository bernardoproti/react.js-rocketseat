import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
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
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>01</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}