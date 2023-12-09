import styles from "./Main.module.css"
import firstGif from "./../video/IMG_6865.gif"
import secondGif from "./../video/IMG_6866.gif"
const Main = () => {
  return (
    <main className={styles.main}>
      <div className={[styles.container_about]}>
        <p className={[styles.main_text_about]}>
          “Я обожнюю свою роботу. Я люблю гарне та стійке укладання волосся і
          отримую багато позитивних емоцій в роботі з клієнтом.
        </p>
        <p className={[styles.main_text_about]}>
          {" "}
          Хочу поділитися з вами своіми знаннями та техніками напрацьованими
          роками. За посиланням нижче знаходиться мій повний курс
        </p>
        <p className={[styles.main_text_about]}> "Easy perfect hairstyle"</p>
        <p className={[styles.main_text_about]}>
          {" "}
          Курс розрахований на різні типи волосся і враховує всі нюанси роботи,
          тому ви зможете впоратися навіть у найскладніших ситуаціях.
        </p>
        <p className={[styles.main_text_about]}>
          {" "}
          Стань майстром, який робить впевнено та швидко стійкі та об'ємні
          укладання без начісів та гофре. І даруйте емоції своїм клієнтам щодня”
        </p>
        <div className={[styles.main_two_button]}>
          <a href='#programm' className={[styles.main_btn1]}>
            Переглянути програму
          </a>
          <a href='#' className={[styles.main_btn2]}>
            Придбати курс{" "}
          </a>
        </div>
      </div>
      <div className={[styles.container_about_two_first]}>
        <div className={[styles.container_about_two]}>
          <div className={[styles.section_about_one]}>
            <h3 className={[styles.title_about_one]}>
              Ці проблеми знайомі 90% майстрам
            </h3>
            <p className={[styles.about_text]}>
              Укладання не тримаються довше 30 хвилин, і об’єм падає, як тільки
              клієнт встає з крісла.
            </p>
            <p className={[styles.about_text]}>
              Не знаю як підбирати стайлінгові засоби і наносити їх так, щоб
              укладання залишалося рухливим і чистим.
            </p>
            <p className={[styles.about_text]}>
              Не знаю, як правильно працювати гарячими інструментами: через це
              укладання виходить нестійким.
            </p>
            <p className={[styles.about_text]}>
              Доводиться наносити багато лаку, щоб зберегти стійкість укладання.
              Через це волосся виглядає штучно.
            </p>
            <p className={[styles.about_text]}>
              Не знаю, як правильно стилізувати укладання та зробити його
              модним, щоб не відставати від трендів.
            </p>
          </div>
          <div className={[styles.about_img]}>
            <img src={firstGif} alt='Ваш GIF' />
          </div>
        </div>
        {/* revers */}
        <h3 className={[styles.title_about_one1]}>
          Навчитися ідеальним укладанням можна за 5 простих кроків:
        </h3>

        <div className={[styles.container_about_two2]}>
          <div className={[styles.about_img]}>
            <img src={secondGif} alt='Ваш GIF' />
          </div>

          <div className={[styles.section_about_one]}>
            <p className={[styles.about_text2]}>
              Вчимося створювати правильну форму укладання, що підходить під
              форму голови та анатомію обличчя.
            </p>
            <p className={[styles.about_text2]}>
              Вивчаємо техніки досягнення стійкості укладання.
            </p>
            <p className={[styles.about_text2]}>
              Заглиблюємося в стайлінгові продукти та вчимося їх правильно
              наносити, щоб укладання виходило об'ємним.
            </p>
            <p className={[styles.about_text2]}>
              Вчимося правильно сушити волосся, нагрівати пасма і працювати з
              чубчиком.
            </p>
            <p className={[styles.about_text2]}>
              Стилізуємо і фінішуємо укладання, а також фіксуємо її і робимо
              волосся рухливим.
            </p>
            <a href='#' className={[styles.main_btn3]}>
              Придбати курс{" "}
            </a>
          </div>
        </div>
        <a className={[styles.main_btn4]} href='#'>
          Придбати курс
        </a>
      </div>
    </main>
  )
}
export default Main
