import { css } from '@emotion/react';
import { color } from '../../commons/styles/constant';

const toastStyle = type => {
  let styles = {};
  if (type === 'primary') {
    styles['backgroundColor'] = color.primary;
    styles['color'] = 'white';
  }

  if (type === 'danger') {
    styles['backgroundColor'] = color.danger;
    styles['color'] = 'white';
  }

  return styles;
};

const Toast = ({ children, visible = false, type = 'primary', close = {} }) => {
  return visible ? (
    <div
      css={css`
        background-color: ${toastStyle(type).backgroundColor};
        color: ${toastStyle(type).color};
        z-index: 999;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        bottom: 10px;
        padding: 10px 20px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      {children}{' '}
      <button
        css={css`
          width: 15px;
          height: 15px;
          margin-left: 20px;
          border: none;
          background-color: rgba(255, 255, 255, 0);
          font-family: font-bold;
          cursor: pointer;
        `}
        onClick={close}
      >
        &times;
      </button>
    </div>
  ) : null;
};

export default Toast;
