import styles from './AppHeading.module.css'

const Heading = () => {
  return <>
    <div className={styles.Heading_container}>
      <h1 className={styles.Heading}>Todo App</h1>
    </div>
  </>
}

export default Heading;