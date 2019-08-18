"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// const csvFileReader = new CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new HtmlReport()  //in terminal type "open report.html" to view in browser
// );
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
