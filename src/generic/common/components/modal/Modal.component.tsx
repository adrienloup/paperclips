import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '@/src/generic/utils/classNames.ts';
import { ButtonComponent } from '@/src/generic/common/components/button/Button.component.tsx';
import { Modal } from '@/src/generic/common/components/modal/Modal.type.tsx';
import styles from '@/src/generic/common/components/modal/Modal.module.scss';

export const ModalComponent = ({ children, className, labelledby, modal, onClick }: Modal) => {
  const [height, setHeight] = useState(document.body.offsetHeight);

  useLayoutEffect(() => {
    const onResize = () => {
      setHeight(document.body.offsetHeight);
    };
    onResize();

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      {modal &&
        createPortal(
          <div
            className={classNames([styles.modal, className])}
            style={{ height }}
            role="dialog"
            aria-labelledby={labelledby}
            aria-modal={modal}
          >
            <div className={styles.inner}>
              <div className={styles.content}>
                {children}
                <ButtonComponent
                  className={styles.button}
                  aria-label="Close modal"
                  onClick={onClick}
                >
                  x
                </ButtonComponent>
              </div>
            </div>
            <div
              className={styles.backdrop}
              onClick={onClick}
            ></div>
          </div>,
          document.body
        )}
    </>
  );
};
