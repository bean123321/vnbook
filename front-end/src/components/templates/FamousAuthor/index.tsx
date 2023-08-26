import styles from './style.module.css';
import AuthorMore from '../../collections/AuthorMore';
import AuthorBook from '../../collections/AuthorBook';
import pic7 from '../../images/pic7.jpg';
import pic8 from '../../images/pic8.jpg';
import pic9 from '../../images/pic9.jpg';
import pic10 from '../../images/pic10.jpg';
function FamousAuthor() {
  return (
    <div className={styles.famousAuthor}>
        <div className="container">
            <AuthorMore/>
            <AuthorBook/>
        </div>
    </div>

  )
}

export default FamousAuthor;