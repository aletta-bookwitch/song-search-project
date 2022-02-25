const dispatchMessage = (message, color = 'black', clear = false) => {
  const messageEvent = new CustomEvent('app@song-search-message', {
    detail: {
      message,
      color,
      clear,
    },
  });
  document.dispatchEvent(messageEvent);
};

const dispatchError = (message) => {
  dispatchMessage(message, 'red');
};

const dispatchMessageClear = () => {
  dispatchMessage('', '', true);
};

class Message {
  constructor() {
    document.addEventListener('app@song-search-message', (event) => {
      const message = document.querySelector('#message');

      if (event.detail.clear) {
        message.style.display = 'none';

        return;
      }

      message.innerHTML = event.detail.message;
      message.style.color = event.detail.color;
      message.style.display = 'block';
    });
  }

  render = () => {
    const message = document.createElement('p');
    message.setAttribute('id', 'message');
    message.innerHTML = 'test';
    message.style.display = 'none';

    return message;
  };
}
export { dispatchMessage, dispatchError, dispatchMessageClear };
export default Message;
