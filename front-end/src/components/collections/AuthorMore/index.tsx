import styles from './style.module.css';
import AuthorImg from '../../elements/AuthorImg';
import AuthorInfo from '../../elements/AuthorInfo';
import pic7 from '../../images/pic7.jpg';
import pic8 from '../../images/pic8.jpg';
import pic9 from '../../images/pic9.jpg';
import pic10 from '../../images/pic10.jpg';
function AuthorMore() {
  return (
    <div className={styles.authorMore}>
        <AuthorImg />
        <AuthorInfo />
    </div>

  )
}

export default AuthorMore;