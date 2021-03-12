export interface MediaCsvImportRow {
  filepath: string;
  title: string;
  artist: string;
  album: string;
  year: string;
  genre: string;
  rating?: string;
  grouping: string;
  mood?: string;
}

export interface MediaFileEntity {
  filepath: string;
  title: string;
  artist: string;
  album: string;
  year: number;
  genre: string;
  rating?: string;
  grouping: string;
  mood?: string;
}
