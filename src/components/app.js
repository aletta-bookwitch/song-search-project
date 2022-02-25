import Message from './message';
import Search from './search';
import SongTable from './song-table';

class App {
  render = () => {
    const app = document.querySelector('#app');
    app.append(
      (new Message()).render(),
      (new Search()).render(),
      (new SongTable()).render(),
    );

    return app;
  };
}

export default App;
