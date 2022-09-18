import styles from '../css/index.module.css';

const Scoped = () => {
  return (
    <div>
      <h1>My Page</h1>
      <div className={styles.block}>block</div>
    </div>
  );
};

export default Scoped;
