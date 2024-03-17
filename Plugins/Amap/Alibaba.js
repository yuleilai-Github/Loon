/*
https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/amdc.js
*/

const url = $request.url;
const header = $request.headers;
const isQuanX = typeof $task !== "undefined";
let ua = header["User-Agent"] || header["user-agent"];

if (url.includes("/amdc/mobileDispatch")) {
  if (
    ua.includes("AMapiPhone") ||
    ua.includes("Alibaba") ||
    ua.includes("Cainiao4iPhone") ||
    ua.includes("%E9%A3%9E%E7%8C%AA%E6%97%85%E8%A1%8C")
  ) {
    if (isQuanX) {
      $done({ status: "HTTP/1.1 404 Not Found" });
    } else {
      $done();
    }
  } else {
    $done({});
  }
} else {
  $done({});
}
