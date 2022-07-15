import { Avatar } from "../Avatar/Avatar";
import { Comment } from "./Comment/Comment";
import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/94808375?v=4" />
          <div className={styles.authorInfo}>
            <strong>Beatriz Mesquita</strong>
            <span>Front-end Developer</span>
          </div>
        </div>
        <time title="13 de Julho as 08:03" dateTime="2022-05-11 08:03:33">
          Publicado a 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href=""> jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw </a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentario" />

        <footer>
          <button type="submit" className={styles.button}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.CommentList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
