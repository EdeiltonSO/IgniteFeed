import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string,
    onDeleteComment: (comment: string) => void
}

export function Comment({content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }
    
    function handleLikeComment() {
        setLikeCount(like => like+1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/38273608?v=4" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Edeilton Oliveira</strong>
                            <time 
                                title='23 de novembro de 2022 às 03:14'
                                dateTime='2022-11-23 03:14:15'
                            >
                                Cerca de 3h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}