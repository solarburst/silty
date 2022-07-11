import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import styles from "./index.module.css";

const HomePage = () => {
  return (
    <DefaultLayout>
      <section>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.text}>
              <h4 className={styles.title}>
                Студент, помоги <span>родному городу</span> в решении социальных
                вопросов
              </h4>
              <p className={styles.paragraph}>
                Современное решение проблемы высокой травматизации населения
                города Барнаула
              </p>
            </div>
            <img
              src={require("../../assets/img/section.png")}
              className={styles.image}
              alt=""
            />
          </div>
        </div>
      </section>
      <main>
        <div className="container">
          <div className={styles.wrapper}>
            <img
              src={require("../../assets/img/main.png")}
              className={styles.imageMain}
              alt=""
            />
            <div className={styles.text}>
              <h4 className={styles.title}>Технология</h4>
              <p className={styles.paragraph}>
                Предача информации непосредственно в контролирующие органы и
                ответственным за уборку, где произошла травма вследствии
                гололёда (городская администрация)
              </p>
            </div>
          </div>
          <div className={styles.benefits}>
            <div className={styles.card}>
              <img
                src={require("../../assets/img/first.png")}
                className={styles.imageCard}
                alt=""
              />
              <p className={styles.info}>
                Базируется на основе использования новых цифровых технологий
              </p>
            </div>
            <div className={styles.card}>
              <img
                src={require("../../assets/img/second.png")}
                className={styles.imageCard}
                alt=""
              />
              <p className={styles.info}>
                Возможность пользователям указывать опасные участки города
              </p>
            </div>
            <div className={styles.card}>
              <img
                src={require("../../assets/img/third.png")}
                className={styles.imageCard}
                alt=""
              />
              <p className={styles.info}>
                Обратная связь с мед. учреждениями (скорая помощь, медицинские
                учреждения)
              </p>
            </div>
            <div className={styles.card}>
              <img
                src={require("../../assets/img/fourth.png")}
                className={styles.imageCard}
                alt=""
              />
              <p className={styles.info}>
                Прогнозирование опасных участков с использованием ИИ
              </p>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};

export default HomePage;
