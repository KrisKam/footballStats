import { Analyzer } from "../Summary"; //this an interface
import { MatchData } from "../MatchData"; //this is a tuple
import { MatchResult } from "../MatchResult"; //this is an enum

export class WinsAnalysis implements Analyzer{
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if(match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}