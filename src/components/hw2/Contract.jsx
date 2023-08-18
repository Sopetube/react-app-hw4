// import './contacts.module.css'
import styles from './contacts.module.css'

function Contract({contact: {
    firstName, lastName, phone, gender
}}) {
    const fullName = `${firstName} ${lastName}`;
    // const noGender = gender ? '' : 'anon';
    const icon = gender === 'male' ? 'Male': 'Female';

    return (
        <>
        <div className={styles.card}>
            <h2 className={styles.nickname}>{fullName}</h2>
            <h3 className={styles.number}>{phone}</h3>
            <span className={styles.gender}>Gender: {icon}</span>
        </div>
        </>
    );
  }

  
  export default Contract;