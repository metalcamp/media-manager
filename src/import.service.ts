import { Injectable } from '@nestjs/common';
import { MediaCsvRow } from './interfaces/CsvImport';
import * as fs from 'fs';
import * as path from 'path';
import * as csv from '@fast-csv/parse';

interface ImportStrategy {
  import(filename: string);
}

class CSVFileImportStrategy implements ImportStrategy {
  async import(filename: string): Promise<Array<MediaCsvRow>> {
    return new Promise((resolve, reject) => {
      const results = [];

      const stream = fs.createReadStream(
        path.resolve(__dirname, '../public', filename),
      );

      stream
        .pipe(
          csv.parse({
            headers: (headers) => headers.map((h) => h?.toLowerCase()),
          }),
        )
        .on('error', (error) => console.log(error))
        .on('data', (row) => {
          results.push(row);
        })
        .on('end', () => {
          // console.log(results);
          resolve(results);
        });
    });
  }
}

@Injectable()
export class ImportService {
  private strategy: ImportStrategy;

  public constructor(strategy: ImportStrategy = null) {
    this.strategy = strategy ? strategy : new CSVFileImportStrategy();
  }

  async importFromFile(filename = 'import.csv'): Promise<Array<MediaCsvRow>> {
    return this.strategy.import(filename);
  }
}
