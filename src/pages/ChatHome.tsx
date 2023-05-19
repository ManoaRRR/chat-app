import { useRouter } from 'next/router';
import styles from '@/styles/Chat.module.css';

export default function ChatHome() {
  const router = useRouter();

  const deleteLocalStorage = () => {
    localStorage.removeItem('userInfo');
    router.push('/Form');
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <h1>Chat</h1>
      </div>
      <div className={styles.chatMessages}>
        <div className={styles.message}>
          <div className={styles.messageHeader}>
            <span className={styles.messageSender}>User </span>
            <span className={styles.messageTimestamp}>10:30am</span>
          </div>
          <div className={styles.messageBody}>
            <p>Hello,</p>
          </div>
        </div>
        <div className={styles.messageSelf}>
          <div className={styles.messageHeader}>
            <span className={styles.messageSender}>Me</span>
            <span className={styles.messageTimestamp}>10:35am</span>
          </div>
          <div className={styles.messageBody}>
            <p></p>
          </div>
        </div>
      </div>
      <div className={styles.chatInput}>
        <input type="text" placeholder="Type your message here" />
        <button>Send</button>
      </div>
      <button className={styles.button} type="submit" onClick={deleteLocalStorage}>
        Logout
      </button>
    </div>
  );
}