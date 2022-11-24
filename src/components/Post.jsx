import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/72235359?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Ualace</strong>
                        <span>Desenvolvedor de software</span>
                    </div>
                </div>
                
                <time 
                    title='23 de novembro de 2022 às 03:14'
                    dateTime='2022-11-23 03:14:15'
                >
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Boa tarde, pessoal!</p>
                <p>Atualizei meu projeto, confere lá!</p>
                <p>O link é <a href="#">esse aqui</a>, beleza?</p>
                <p>
                    <a href="#">#code</a>{' '}
                    <a href="#">#react</a>{' '}
                    <a href="#">#github</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                />
                <footer>
                <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}