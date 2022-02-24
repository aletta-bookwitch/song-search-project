import Message from './message.js';
import Search from './search.js';
import SongTable from './song-table.js';

class App {
  render() {
    const app = document.querySelector('#app');
    app.append(
      (new Message()).render(),
      (new Search()).render(),
      (new SongTable()).render(),
    );

    return app;
  }
}

export default App;
