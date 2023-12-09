import styles from "./Infoblock.module.css"

const Infoblock = () => {
  return (
    <div className={[styles.container_info]}>
      <h2 className={styles.title}>Для кого цей курс?</h2>
      <h3 className={styles.subtitle}>
        Підійде всім майстрам, які працюють із волоссям
      </h3>
      <div className={styles.frame}>
        <div className={[styles.fmame_left]}>
          <h2 className={[styles.frame_title]}>ПЕРУКАРЯМ</h2>
          <h3 className={[styles.frame_subtitle]}>
            Навчіться стилізувати стрижки <br /> за допомогою укладання та
            стайлінгових продуктів. І за рахунок цього збільшіть цінність своїх
            послуг.
          </h3>
        </div>
        <div className={[styles.fmame_right]}>
          <h2 className={[styles.frame_title]}>СТИЛІСТАМ ТА ВІЗАЖИСТАМ</h2>
          <h3 className={[styles.frame_subtitle]}>
            Доведіть свої навички до ідеалу та навчитеся робити стійкі та
            об'ємні укладання на будь-якому волоссю.
          </h3>
        </div>
      </div>
    </div>
  )
}
export default Infoblock
