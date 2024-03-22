/*

[rewrite_local]
^https:\/\/www\.instapaper\.com\/api\/subscription_status url script-response-body Instapaper.js

[mitm] 
hostname = www.instapaper.com

*/

body = $response.body.replace(/.+/,"ipsubnow=1596845288&ipsubexp=3742762088&ipsub=1")

$done({body});
