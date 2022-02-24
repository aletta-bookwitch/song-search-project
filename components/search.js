class Search {
  render() {
    const textInputElement = document.createElement('input');
    textInputElement.setAttribute('id', 'searchTerm');
    textInputElement.setAttribute('type', 'text');

    const buttonElement = document.createElement('button');
    buttonElement.innerHTML = 'Search';
    buttonElement.addEventListener('click', () => {
      const messageEvent = new CustomEvent('app@song-search-message', {
        detail: {
          clear: false,
          message: 'Loading...',
          color: 'white',
        },
      });
      document.dispatchEvent(messageEvent);

      const searchEvent = new CustomEvent('app@song-search', { detail: { term: textInputElement.value } });
      document.dispatchEvent(searchEvent);
    });

    const searchElement = document.createElement('div');
    searchElement.setAttribute('id', 'search');
    searchElement.append(textInputElement, buttonElement);

    return searchElement;
  }
}

export default Search;
