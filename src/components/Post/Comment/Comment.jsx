import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../../Avatar/Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        comment
        src="https://avatars.githubusercontent.com/u/12973109?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTimer}>
              <strong>Caio Victor Sarmento</strong>
              <time title="13 de Julho as 08:17" dateTime="2022-05-11 08:03:33">
                Carca de 7min atras
              </time>
            </div>
            <button title="Deletar Comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, nota 2.</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>216k</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
