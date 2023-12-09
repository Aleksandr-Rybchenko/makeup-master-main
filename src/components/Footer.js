import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={[styles.footer_container]}>
        <div className={[styles.footer_title]}>
          <h3 className={[styles.footer_name]}>NESTERENKO YULIA</h3>
          <h4 className={[styles.name_about]}>Cтиліст по зачіскам</h4>
        </div>
        <div className={styles.social}>
          <div className={[styles.social_name]}>
            <a href='https://n602808.alteg.io/company:569584/idx:0/master'>
              Онлайн запис:
            </a>
            <a href='https://www.instagram.com/nesterenko.yuliia/'>
              Instagram:
            </a>
            <a href='#'>Telegram</a>
          </div>
          <div className={[styles.social_url]}>
            <a href='https://n602808.alteg.io/company:569584/idx:0/master'>
              n602808.alteg.io
            </a>
            <a href='https://www.instagram.com/nesterenko.yuliia/'>
              nesterenko.yuliia
            </a>
            <a href='#'>Yulia Nesterenko </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
