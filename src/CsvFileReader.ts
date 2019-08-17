import fs from "fs";



//refer to generic type with T by convention
export abstract class CsvFileReader<T> {
  data: T[] = [];
  
  constructor(public filename: string) {}

  //get rid of curly braces for abstract method to be used by child class
  abstract mapRow(row: string[]): T

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: "utf-8"
    })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}