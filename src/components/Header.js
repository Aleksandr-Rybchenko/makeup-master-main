import styles from "./Header.module.css"
import avaYulia from "./../img/ava.png"
const Header = () => {
  return (
    <>
      <header>
        <div className={[styles.header_img]}>
          <img src={avaYulia} alt='Nesterenko Yulia' />
        </div>
        <div className={styles.text}>
          <h2 className={[styles.header_title_name]}>Nesterenko Yulia</h2>
          <div className={styles.blur}>
            <h1>“easy perfect hairstyle”</h1>
            <p className={[styles.header_text]}>
              Актуально для майстрів, які працюють з волоссям
            </p>
            <a
              className={[styles.header_buttom]}
              href='https://www.img2go.com/ru/result#j=c020ceda-ef15-431f-a98c-c36b1747a716'
            >
              Придбати курс
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header
