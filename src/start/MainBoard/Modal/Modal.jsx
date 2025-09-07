import { useState, useEffect } from "react";
import styles from "../../../css/style.module.css";

const modalTexts = (
  <p>
    <div className={styles.textInfo}>Инструкция по активации:</div><br/>

    1. Скачайте и установите клиент Steam.<br/>
    2. Зарегистрируйте аккаунт, если его нет.<br/>
    3. Запустите Steam и авторизуйтесь.<br/>
    4. В нижнем левом углу нажмите "Добавить игру" → "Активировать в Steam".<br/>
    5. Введите ключ активации, полученный после оплаты.<br/><br/>

    Важная информация:<br/>
    Ключ будет доступен в личном кабинете в течение 30 минут после оплаты.<br/>
    Возврат или замена ключа невозможны.<br/><br/>

    Если возникли проблемы с активацией:<br/>
    Проверьте правильность введенного ключа<br/>
    Убедитесь, что ключ соответствует вашему региону<br/>
    Если проблема не решена — обратитесь в поддержку
  </p>
);

const Modal = ({ visible, onClose, selectedKey }) => {
  const [shouldRender, setShouldRender] = useState(visible);
  const [showClass, setShowClass] = useState(false);

useEffect(() => {
  if (visible) {
    setShouldRender(true);
    // Первый кадр: ставим hide
    setShowClass(false);

    // Второй кадр: включаем show
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setShowClass(true);
      });
    });
  } else {
    setShowClass(false);
    const timeoutId = setTimeout(() => setShouldRender(false), 800);
    return () => clearTimeout(timeoutId);
  }
}, [visible]);


  if (!shouldRender) return null;

  return (
    <div
      className={`${styles.modalOverlay} ${showClass ? styles.show : styles.hide}`}
      onClick={onClose}
    >
      <div
        className={`${styles.modalContent} ${showClass ? styles.show : styles.hide}`}
        onClick={e => e.stopPropagation()}
      >
        <h2 className={styles.text}>{modalTexts || "Выбери ключ"}</h2>
        тут будет кнопка
      </div>
    </div>
  );
};

export default Modal;
