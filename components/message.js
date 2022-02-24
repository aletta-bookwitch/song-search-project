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

  render() {
    const message = document.createElement('p');
    message.setAttribute('id', 'message');
    message.innerHTML = 'test';
    message.style.display = 'none';

    return message;
  }
}

export default Message;
