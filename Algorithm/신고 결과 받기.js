let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
// let id_list = ["con", "ryan"]
// let report = ["ryan con", "ryan con", "ryan con", "ryan con"]
let k = 2;
//result = [2,1,1,0]
// muzi frodo, neo
// apeach frodo muzi
// frodo neo

answer = new Array(id_list.length).fill(0);

const reportList = {};

id_list.map((user) => {
  return (reportList[user] = []);
});

console.log(report.map((user) => {
  const { user_id, report_id } = user.split(" ");
  if (!reportList[report_id].includes(user_id)) {
    reportList[report_id].push(user_id);
  }
}))
