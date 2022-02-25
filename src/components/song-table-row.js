class SongTableRow {
  constructor(artistName, trackName) {
    this.artistName = artistName;
    this.trackName = trackName;
  }

  render = () => {
    const tableBodyRow = document.createElement('tr');
    const tableBodyRowArtist = document.createElement('td');
    tableBodyRowArtist.innerHTML = this.artistName;
    const tableBodyRowSongTitle = document.createElement('td');
    tableBodyRowSongTitle.innerHTML = this.trackName;
    tableBodyRow.append(tableBodyRowArtist, tableBodyRowSongTitle);

    return tableBodyRow;
  };
}

export default SongTableRow;
