import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

//Create an object that satisfies "DataReader" in interface
const csvFileReader = new CsvFileReader("football.csv");

//Create an instance of MatchReader and pass in something
//that satisfies the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
//can reference matchReader.matches now

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);


summary.buildAndPrintReport(matchReader.matches);