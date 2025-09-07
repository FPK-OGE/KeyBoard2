import React, { useState } from "react";
import key1 from "../../../img/Древо.png";
import key2 from "../../../img/Серебро.svg";
import key3 from "../../../img/Золото.png";
import styles from "../../../css/style.module.css";
import Modal from "../Modal/Modal";

const Keys = () => {
  const [keysState, setKeysState] = useState([0, 0, 1]);
  const [modalVisible, setModalVisible] = useState(false);
  const [lastClickedKey, setLastClickedKey] = useState(null);
  const [clickCount, setClickCount] = useState(0);
  const [animationState, setAnimationState] = useState(null);
  const [activeAnimationKey, setActiveAnimationKey] = useState(null);

  const classes1 = [styles.key1_0, styles.key1_1, styles.key1_2];
  const classes2 = [styles.key2_0, styles.key2_1, styles.key2_2];
  const classes3 = [styles.key3_0, styles.key3_1, styles.key3_2];

  const moveKeys = (newStates, clickedKey) => {
    if (lastClickedKey === clickedKey) {
      if (clickCount === 1) {
        // Открываем модалку с анимацией ключа
        setAnimationState("open");
        setActiveAnimationKey(clickedKey);
        setModalVisible(true);
        setClickCount(2);
      } else if (clickCount === 2) {
        // Запускаем анимацию закрытия ключа
        setAnimationState("close");
        setActiveAnimationKey(clickedKey);
        setClickCount(0);

        // Модалку закрываем сразу без задержек
        setModalVisible(false);

        // Очищаем состояние анимации после длительности анимации (0.8с)
        setTimeout(() => {
          setActiveAnimationKey(null);
          setAnimationState(null);
        }, 800);
      }
    } else {
      // При клике на другой ключ — обновляем состояния и скрываем модалку
      setKeysState(newStates);
      setLastClickedKey(clickedKey);
      setClickCount(1);
      setModalVisible(false);
      setActiveAnimationKey(null);
      setAnimationState(null);
    }
  };

  const getClassForKey = (keyNum) => {
    let baseClass;
    if (keyNum === 1) baseClass = classes1[keysState[0]];
    else if (keyNum === 2) baseClass = classes2[keysState[1]];
    else if (keyNum === 3) baseClass = classes3[keysState[2]];

    if (activeAnimationKey === keyNum) {
      if (animationState === "open") return `${baseClass} ${styles.keyAnimationOpen}`;
      if (animationState === "close") return `${baseClass} ${styles.keyAnimationClose}`;
    }
    return baseClass;
  };

  return (
    <div className={styles.Keys}>
      <img
        src={key1}
        alt=""
        className={getClassForKey(1)}
        onClick={() => moveKeys([1, 2, 2], 1)}
      />
      <img
        src={key2}
        alt=""
        className={getClassForKey(2)}
        onClick={() => moveKeys([0, 0, 1], 2)}
      />
      <img
        src={key3}
        alt=""
        className={getClassForKey(3)}
        onClick={() => moveKeys([2, 1, 0], 3)}
      />

      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        selectedKey={lastClickedKey}
      />
    </div>
  );
};

export default Keys;
