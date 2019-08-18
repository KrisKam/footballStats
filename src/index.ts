import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";


// const csvFileReader = new CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv("football.csv");

// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new HtmlReport()  //in terminal type "open report.html" to view in browser
// );
const summary = Summary.winsAnalysisWithHtmlReport("Man United");


matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

