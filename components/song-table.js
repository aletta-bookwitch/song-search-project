import SongTableRow from './song-table-row.js';
import fetchSongs from '../fetch-songs.js';

class SongTable {
  constructor() {
    document.addEventListener('app@song-search', (event) => {
      fetchSongs(event.detail.term)
        .then(this.handleResults)
        .catch((error) => {
          console.log(error);
          this.handleResults([]);
        });
    });
  }

  handleResults(results) {
    const songTableBody = document.querySelector('#song-table-body');

    while (songTableBody.firstChild) {
      songTableBody.removeChild(songTableBody.lastChild);
    }

    results.forEach((result) => {
      const songTableRow = new SongTableRow(
        result.artistName,
        result.trackName,
      );

      songTableBody.append(songTableRow.render());
    });
  }

  render() {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableHeadRow = document.createElement('tr');
    const tableHeadRowArtist = document.createElement('th');
    tableHeadRowArtist.innerHTML = 'Artist';
    const tableHeadRowSongTitle = document.createElement('th');
    tableHeadRowSongTitle.innerHTML = 'Song Title';
    tableHeadRow.append(tableHeadRowArtist, tableHeadRowSongTitle);
    tableHead.append(tableHeadRow);

    const tableBody = document.createElement('tbody');
    tableBody.setAttribute('id', 'song-table-body');

    table.append(tableHead, tableBody);

    const songTable = document.createElement('div');
    songTable.setAttribute('id', 'song-table');
    songTable.append(table);

    return songTable;
  }
}

export default SongTable;
