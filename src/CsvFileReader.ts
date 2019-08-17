import fs from "fs";
import { MatchResult } from "./MatchResult";

//define a tuple
type MatchData = [ Date, string, string, number, number, MatchResult, string ]; 

export abstract class CsvFileReader {
  data: MatchData[] = [];
  
  constructor(public filename: string) {}

  //get rid of curly braces for abstract method to be used by child class
  abstract mapRow(row: string[]): MatchData

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