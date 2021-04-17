import './toast.css';

const body = document.querySelector('body');

const Toast = (message) => {
  const toastBox = document.createElement('div');
  toastBox.className = 'toast-box';
  toastBox.innerText = message;
  body.append(toastBox);

  // Удалить Toast
  setTimeout(() => {
    toastBox.remove();
  }, 3500);
};

export default Toast;
