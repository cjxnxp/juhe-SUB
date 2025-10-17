
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'juhe';
let guestToken = ''; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken = ''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID = ''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

//节点链接 + 订阅链接
let MainData = `
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F45.207.158.29-2083#TW%2BAkile%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F210.61.97.241-81#TW%2BChunghwa%20Telecom%20CoLtd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F114.34.202.224-10004#TW%2BChunghwa%20Telecom%20CoLtd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F213.210.5.61-8443#TW%2BByteVirt%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F149.104.120.254-443#TW%2BKaopu%20Cloud%20HK%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F122.117.174.80-443#TW%2BChunghwa%20Telecom%20CoLtd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F45.207.158.29-8443#TW%2BAkile%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F60.249.114.181-10244#TW%2BChunghwa%20Telecom%20CoLtd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F213.210.4.49-443#TW%2BByteVirt%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F45.207.158.29-2053#TW%2BAkile%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F188.253.117.154-443#TW%2BAkari%20Networks%20Taipei
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F123.253.111.136-443#TW%2BTokyo
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F60.249.114.181-12281#TW%2BChunghwa%20Telecom%20CoLtd

vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F156.254.114.171-443#HK%2BStepGo%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F101.79.165.113-443#HK%2BCDNetworks
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F219.76.13.166-443#HK%2BHong%20Kong%20Telecommunications%20HKT%20Limited%20Mass%20Internet
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F221.125.10.8-57537#HK%2BHGC%20Global%20Communications%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F18.162.156.23-12355#HK%2B%E4%BA%9A%E9%A9%AC%E9%80%8A
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F223.16.138.113-12457#HK%2BHGC%20Global%20Communications%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F219.76.13.167-443#HK%2BHong%20Kong%20Telecommunications%20HKT%20Limited%20Mass%20Internet
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F38.180.189.154-8443#HK%2B3NT%20SOLUTIONS%20LLP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F47.240.15.210-4432#HK%2BAlibaba%20Cloud%20%20HK
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F31.58.220.246-8443#HK%2BCGI%20GLOBAL%20LIMITED
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F5.180.98.146-22827#HK%2BTEN
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F45.38.42.198-2053#HK%2BSTARK%20INDUSTRIES%20SOLUTIONS%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F156.255.90.175-8443#HK%2BStepGo%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F46.8.78.122-8443#HK%2BCGI%20GLOBAL%20LIMITED
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F47.76.83.30-443#HK%2BAlibaba%20Cloud%20%20HK
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F119.28.68.147-443#HK%2BTencent%20cloud%20computing%20Beijing%20Co%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F154.38.116.8-443#HK%2BSTARCLOUD%20GLOBAL%20PTE%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F163.53.246.113-443#HK%2BROUTE
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F38.180.94.171-443#HK%2B3NT%20SOLUTIONS%20LLP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F36.50.90.241-47790#HK%2BIoT%20Innovation%20Technologies%20Company%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F154.16.10.177-443#HK%2BNetStack%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F16.162.225.15-443#HK%2BAmazon%20Data%20Services%20Hong%20Kong
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F45.38.42.109-8443#HK%2BSTARK%20INDUSTRIES%20SOLUTIONS%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F219.76.13.180-443#HK%2BHong%20Kong%20Telecommunications%20HKT%20Limited%20Mass%20Internet
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F38.71.124.249-443#HK%2BCogent%20Communications%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F103.194.107.166-443#HK%2BAntbox%20Networks%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F219.76.13.183-443#HK%2BHong%20Kong%20Telecommunications%20HKT%20Limited%20Mass%20Internet
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F47.239.8.172-443#HK%2BALIBABA%20CLOUD%20%20HK
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F210.3.159.133-443#HK%2BHGC%20Global%20Communications%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F185.241.40.85-443#HK%2BBAGE%20CLOUD%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F91.229.132.157-443#HK%2BInternet%20Utilities%20Europe%20and%20Asia%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F43.132.244.52-21415#HK%2B6%20COLLYER%20QUAY
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F46.20.109.64-443#HK%2BNearoute%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F194.34.254.212-443#HK%2BAiyun%20HK%20Network%20Technology%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F47.240.13.101-8420#HK%2BAlibaba%20Cloud%20%20HK
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F31.59.136.248-2053#HK%2BCGI%20GLOBAL%20LIMITED
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F18.167.10.179-2053#HK%2BAmazon%20Data%20Services%20Hong%20Kong
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F223.16.138.113-10002#HK%2BHGC%20Global%20Communications%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F47.242.171.138-37021#HK%2BALIBABA%20CLOUD%20%20HK
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F36.50.90.241-35951#HK%2BIoT%20Innovation%20Technologies%20Company%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F43.198.204.35-443#HK%2BAmazoncom%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F163.53.246.130-443#HK%2BROUTE
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F154.21.201.83-443#HK%2BNetLab
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F31.56.113.71-8443#HK%2BCGI%20GLOBAL%20LIMITED
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F219.76.13.169-443#HK%2BHong%20Kong%20Telecommunications%20HKT%20Limited%20Mass%20Internet
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F38.180.94.97-443#HK%2B3NT%20SOLUTIONS%20LLP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F47.243.166.181-443#HK%2BALIBABA%20CLOUD%20%20HK
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F31.59.174.251-2053#HK%2BCGI%20GLOBAL%20LIMITED
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F31.56.113.71-2053#HK%2BCGI%20GLOBAL%20LIMITED
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F38.244.198.107-443#HK%2B3NT%20SOLUTIONS%20LLP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F31.56.113.68-443#HK%2BCGI%20GLOBAL%20LIMITED
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F219.76.13.177-443#HK%2BHong%20Kong%20Telecommunications%20HKT%20Limited%20Mass%20Internet
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F46.232.108.217-443#HK%2BDom%20Tehniki%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F31.57.108.19-2053#HK%2BCGI%20GLOBAL%20LIMITED
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F219.76.13.181-443#HK%2BHong%20Kong%20Telecommunications%20HKT%20Limited%20Mass%20Internet
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F156.254.114.120-30011#HK%2BStepGo%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F192.142.4.33-8443#HK%2BUltahost%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F194.156.99.182-8443#HK%2BFreeNet%20LLCFZ
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F103.49.61.252-443#HK%2BBEST%20WEBTECHNOLOGY%20LIMITED
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F223.16.138.113-10201#HK%2BHGC%20Global%20Communications%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F2.56.91.89-2053#HK%2Bihchk%20vps%20in%20Hong%20Kong
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F23.27.48.196-443#HK%2BEvoxt%20HK
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F85.208.104.34-8080#HK%2BInternet%20Utilities%20Europe%20and%20Asia%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F141.11.149.187-443#HK%2BAKILE%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F103.85.73.112-8443#HK%2BGAOFENG%20NETWORK%20LIMITED
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F16.163.216.195-443#HK%2BAmazon%20Data%20Services%20Hong%20Kong
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F31.59.136.248-2053#HK%2BCGI%20GLOBAL%20LIMITED
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F89.185.30.122-53346#HK%2BPrivate%20Customer
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F43.155.117.16-443#HK%2B6%20COLLYER%20QUAY
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F194.156.99.186-443#HK%2BFreeNet%20LLCFZ
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F47.239.183.154-443#HK%2BALIBABA%20CLOUD%20%20HK
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F31.59.138.88-8443#HK%2BCGI%20GLOBAL%20LIMITED
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F8.210.29.68-443#HK%2BAliyun%20Computing%20CoLTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F141.11.78.77-8080#HK%2BAKILE%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F141.11.148.60-8080#HK%2BAKILE%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F103.210.22.199-443#HK%2BUcloud%20Hong%20Kong
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F8.218.245.116-49701#HK%2BAlibaba%20Cloud%20Singapore%20Private%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F210.6.207.42-18622#HK%2BHong%20Kong%20Broadband%20Network%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F8.218.245.116-41528#HK%2BAlibaba%20Cloud%20Singapore%20Private%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F45.39.198.43-8080#HK%2BInternet%20Utilities%20NA%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F47.76.218.163-443#HK%2BAlibaba%20Cloud%20%20HK
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F192.252.182.52-7602#HK%2BIntegen%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F118.141.64.192-36619#HK%2BHGC%20Global%20Communications%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F185.74.222.252-8443#HK%2BWorkTitans%20BV
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F141.11.149.195-12082#HK%2BAKILE%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F141.11.91.67-8080#HK%2BTusker%20Technologies%20Pty%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F38.6.219.16-8080#HK%2BPEG%20TECH%20INC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F62.192.175.43-12009#HK%2BPrivate%20Customer
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F103.112.185.138-587#HK%2BRainbow%20Network%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F154.16.10.34-8080#HK%2BDigital%20Energy%20Technologies%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F45.39.198.40-8080#HK%2BInternet%20Utilities%20NA%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F202.85.53.74-443#HK%2BMazen%20Ind%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F47.79.20.64-443#HK%2BAlibaba%20Cloud%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F2.56.91.89-8443#HK%2Bihchk%20vps%20in%20Hong%20Kong
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F31.59.138.88-2053#HK%2BCGI%20GLOBAL%20LIMITED
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F219.76.13.164-443#HK%2BHong%20Kong%20Telecommunications%20HKT%20Limited%20Mass%20Internet
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F8.218.36.133-9010#HK%2BAlibaba%20Cloud%20Singapore%20Private%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F38.207.133.204-10002#HK%2BNearoute%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F46.232.122.240-8000#HK%2BDom%20Tehniki%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F8.218.245.116-42805#HK%2BAlibaba%20Cloud%20Singapore%20Private%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F141.11.77.248-8080#HK%2BAKILE%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F45.149.186.112-8080#HK%2BAKILE%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F192.142.4.76-2053#HK%2BUltahost%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F43.154.196.20-65121#HK%2B6%20COLLYER%20QUAY
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F124.244.92.109-25203#HK%2BHong%20Kong%20Broadband%20Network%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F192.131.142.161-46639#HK%2BLEASEWEB%20HONG%20KONG%20LIMITED
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F152.32.215.105-8443#HK%2BUCLOUD%20INFORMATION%20TECHNOLOGY%20HK%20LIMITED
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F156.255.90.175-2053#HK%2BStepGo%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F8.210.96.197-12902#HK%2BAliyun%20Computing%20CoLTD

vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F109.123.231.212-2053#JP%2BContabo%20GmbH
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F118.27.12.40-38443#JP%2BGMO%20Internet%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F108.160.139.154-8443#JP%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F103.106.228.126-2053#JP%2Boneprovidercom%20%20Tokyo%20Infrastructure
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F132.145.116.185-443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F18.183.158.211-443#JP%2BAmazon%20Data%20Services%20Japan
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F45.11.1.118-44004#JP%2BCEGRGODigitalVM%20LLC%20%20Tokyo
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F45.76.192.129-24434#JP%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F8.216.121.234-51922#JP%2BAlibaba%20Cloud%20Singapore%20Private%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F8.209.220.50-21273#JP%2BShiodome%20Sumitomo%20Blog%20192%20TOKYO
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F193.246.161.65-54310#JP%2BAKILE%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F103.75.118.144-2053#JP%2BOneprovidercom%20%20Japan%20Infrastructure
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F121.85.55.59-19842#JP%2BOPTAGE%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F185.18.222.208-2053#JP%2BJurgita%20Jurgaitiene%20trading%20as%20LOCOTORPI
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F113.37.149.36-12553#JP%2BARTERIA%20Networks%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F138.2.18.82-8880#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F84.247.152.46-10045#JP%2BContabo%20GmbH
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F140.238.62.82-1443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F138.2.10.149-45638#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F147.45.49.11-8443#JP%2BGLOBAL%20CONNECTIVITY%20SOLUTIONS%20LLP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F47.79.90.37-49153#JP%2BAlibaba%20Cloud%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F138.3.217.167-587#JP%2BOracle%20Network%20Information%20Services
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F138.3.222.33-443#JP%2BOracle%20Network%20Information%20Services
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F141.147.185.63-443#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F13.230.34.30-443#JP%2BAmazon%20Data%20Services%20Japan
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F172.104.127.132-443#JP%2BLinode
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F158.101.77.33-443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F153.121.45.101-443#JP%2BSAKURA%20Internet%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F168.138.213.1-50003#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F150.230.5.34-45681#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F141.147.147.180-443#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F158.101.89.113-50443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F49.212.133.94-443#JP%2BSAKURA%20Internet%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F140.83.57.86-54322#JP%2Bimported%20inetnum%20object%20for%20OCPL1
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F140.83.63.113-443#JP%2Bimported%20inetnum%20object%20for%20OCPL1
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F23.106.140.129-443#JP%2BIT7%20Networks%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F150.230.214.172-16957#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F158.101.80.84-443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F141.147.185.15-443#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F147.45.49.164-24443#JP%2BGLOBAL%20CONNECTIVITY%20SOLUTIONS%20LLP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F132.145.126.40-32498#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F140.83.56.110-56417#JP%2Bimported%20inetnum%20object%20for%20OCPL1
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F64.176.42.125-10001#JP%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F140.83.60.81-18443#JP%2Bimported%20inetnum%20object%20for%20OCPL1
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F3.112.21.102-443#JP%2BAmazon%20Data%20Services%20Japan
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F131.186.63.89-11655#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F219.117.2.190-57517#JP%2BJupiter%20Telecommunications%20Co%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F5.180.76.44-443#JP%2BCEGRGODigitalVM%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F149.28.21.106-443#JP%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F140.83.59.158-15805#JP%2Bimported%20inetnum%20object%20for%20OCPL1
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F147.45.49.11-2053#JP%2BGLOBAL%20CONNECTIVITY%20SOLUTIONS%20LLP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F38.180.28.163-2053#JP%2B3NT%20SOLUTIONS%20LLP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F103.238.129.215-42734#JP%2BByteVirt%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F82.163.16.69-8080#JP%2BAKILE%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F38.180.28.163-8443#JP%2B3NT%20SOLUTIONS%20LLP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F140.83.57.183-22735#JP%2Bimported%20inetnum%20object%20for%20OCPL1
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F45.76.198.248-443#JP%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F168.138.46.115-43138#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F139.162.84.132-18836#JP%2BAkamai%20Connected%20Cloud%20%20Linode
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F138.3.222.124-46209#JP%2BOracle%20Network%20Information%20Services
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F64.176.40.224-3533#JP%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F141.147.152.229-23333#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F140.238.37.103-14782#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F168.138.197.147-12345#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F138.2.10.217-27446#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F168.138.198.7-27560#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F141.147.144.15-13357#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F64.110.104.30-443#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F158.101.154.245-47001#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F152.69.192.40-57005#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F198.13.42.58-32954#JP%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F139.162.102.152-7002#JP%2BAkamai%20Connected%20Cloud%20%20Linode
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F138.2.32.76-15821#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F43.133.10.236-33405#JP%2B6%20COLLYER%20QUAY
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F152.70.82.101-18650#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F141.147.161.249-51037#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F152.69.199.70-8443#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F217.142.236.93-443#JP%2BOracle%20Svenska%20AB
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F138.2.12.103-14453#JP%2BCloudflare%20London%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F176.97.70.51-2053#JP%2B3nt%20solutions%20LLP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F217.142.230.253-587#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F140.83.57.114-25965#JP%2Bimported%20inetnum%20object%20for%20OCPL1
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F45.77.25.6-27854#JP%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F140.83.57.20-13118#JP%2Bimported%20inetnum%20object%20for%20OCPL1
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F138.2.48.109-26412#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F217.142.250.195-587#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F45.77.25.6-48828#JP%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F158.101.152.6-2919#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F168.138.192.16-54584#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F219.117.2.190-48401#JP%2BJupiter%20Telecommunications%20Co%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F138.2.59.96-10129#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F202.84.53.85-19999#JP%2BAzumino%20Network%20Community%20TV
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F212.52.0.61-1846#JP%2BPrinode%20AB
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F141.147.183.49-29876#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F64.176.39.147-16387#JP%2BThe%20Constant%20Company%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F168.138.46.67-443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F150.230.204.21-10243#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F207.148.105.247-443#JP%2BTYOVULTRCUST
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F176.97.70.166-443#JP%2B3nt%20solutions%20LLP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F155.248.181.189-443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F155.248.184.178-30011#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F158.101.146.3-44872#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F82.163.16.229-26803#JP%2BAKILE%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F158.101.76.55-21953#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F103.106.0.123-443#JP%2BWorkTitans%20BV
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F132.145.127.203-2053#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F38.180.29.40-2053#JP%2B3NT%20SOLUTIONS%20LLP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F108.160.141.198-443#JP%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F176.97.70.119-443#JP%2B3nt%20solutions%20LLP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F64.110.101.90-55007#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F23.106.132.54-443#JP%2BIT7%20Networks%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F45.32.55.253-443#JP%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F47.79.35.191-443#JP%2BAlibaba%20Cloud%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F176.97.70.154-443#JP%2B3nt%20solutions%20LLP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F158.101.131.94-2083#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F141.147.168.141-443#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F158.101.71.226-8443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F202.182.115.102-443#JP%2BTYOVULTRCUST
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F168.138.51.8-8443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F168.138.51.8-8443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F138.2.49.197-587#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F47.79.38.17-443#JP%2BAlibaba%20Cloud%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F168.138.212.80-443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F64.110.101.125-443#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F140.238.50.134-443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F141.98.197.101-11665#JP%2BxTom%20Japan%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F141.147.162.24-1235#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F150.230.59.15-8443#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F47.79.43.222-443#JP%2BAlibaba%20Cloud%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F132.145.127.203-8443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F15.168.175.167-2087#JP%2BAmazon%20Data%20Services%20Osaka
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F176.97.70.121-443#JP%2B3nt%20solutions%20LLP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F210.138.37.53-443#JP%2BCDNetworks%20co%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F38.207.137.217-443#JP%2BNearoute%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F217.142.226.168-443#JP%2BOracle%20Svenska%20AB
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F132.145.115.62-443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F35.78.229.176-443#JP%2BAmazon%20Data%20Services%20Japan
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F168.138.194.74-443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F160.251.142.232-443#JP%2BGMO%20Internet%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F52.194.236.221-8443#JP%2BAmazon%20Data%20Services%20Japan
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F154.31.114.136-443#JP%2BPrivate%20Customer
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F47.74.8.30-2443#JP%2BAlibaba%20Cloud%20%20JP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F158.101.146.3-54516#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F64.176.55.11-29999#JP%2BThe%20Constant%20Company%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F45.32.49.72-9443#JP%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F150.230.7.216-443#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F43.165.183.43-443#JP%2B16%20COLLYER%20QUAY%20%201829%20INCOME%20AT%20RAFFLES
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F158.51.111.105-443#JP%2BDDPS%20Networks%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F138.2.16.61-443#JP%2BCloudflare%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F139.162.79.151-587#JP%2BAkamai%20Connected%20Cloud%20%20Linode
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F141.147.188.120-443#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F152.70.97.53-443#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F103.125.216.22-8443#JP%2BVPSServercom%2024%20block%20for%20Tokyo%20location
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F27.83.68.142-8443#JP%2BJapan%20Internet%20Xing%20Co%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F167.179.86.6-8443#JP%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F109.123.231.212-443#JP%2BContabo%20GmbH
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F147.79.20.47-443#JP%2BByteVirt%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F150.230.196.248-443#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F103.125.216.22-443#JP%2BVPSServercom%2024%20block%20for%20Tokyo%20location
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F210.231.178.90-443#JP%2BServer%20Hosting%20ServiceNTTPCCommunicationsInc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F132.226.7.217-443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F18.177.83.181-443#JP%2BAmazon%20Data%20Services%20Japan
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F18.177.83.181-443#JP%2BAmazon%20Data%20Services%20Japan
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@free.mediafairy.web.id:443?encryption=none&security=tls&sni=free.mediafairy.web.id&type=ws&host=free.mediafairy.web.id&path=%2F109.61.109.42-443#JP%2BSecurebit%20AG


vless://89b3cbba-e6ac-485a-9481-976a0415eab9@www.shopify.com:443?encryption=none&security=tls&sni=saiwai6.pages.dev&type=ws&host=saiwai6.pages.dev&path=%3Fed%3D2560#saiwai6.pages.dev
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@www.shopify.com:443?encryption=none&security=tls&sni=mianban.918518.xyz&type=ws&host=mianban.918518.xyz&path=%3Fed%3D2560#mianban.918518.xyz
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@www.shopify.com:443?encryption=none&security=tls&sni=bpb.7571926.xyz&type=ws&host=bpb.7571926.xyz&path=%3Fed%3D2560#bpb.7571926.xyz
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@vpslook.com:443?encryption=none&security=tls&sni=bpb.ucvape.cc&type=ws&host=bpb.ucvape.cc&path=%3Fed%3D2560#bpb.ucvape.cc
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@vpslook.com:443?encryption=none&security=tls&sni=cf.koljs.asia&type=ws&host=cf.koljs.asia&path=%3Fed%3D2560#cf.koljs.asia
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@vpslook.com:443?encryption=none&security=tls&sni=bpb0713.515434.xyz&type=ws&host=bpb0713.515434.xyz&path=%3Fed%3D2560#bpb0713.515434.xyz
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@vpslook.com:443?encryption=none&security=tls&sni=eagmin.com&type=ws&host=eagmin.com&path=%3Fed%3D2560#eagmin.com
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@vpslook.com:443?encryption=none&security=tls&sni=alick2011.eu.org&type=ws&host=alick2011.eu.org&path=%3Fed%3D2560#alick2011.eu.org
`;

let urls = [];
let subConverter = "SUBAPI.cmliussss.net"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subConfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch(request, env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID;
		TG = env.TG || TG;
		subConverter = env.SUBAPI || subConverter;
		if (subConverter.includes("http://")) {
			subConverter = subConverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subConverter = subConverter.split("//")[1] || subConverter;
		}
		subConfig = env.SUBCONFIG || subConfig;
		FileName = env.SUBNAME || FileName;

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		guestToken = env.GUESTTOKEN || env.GUEST || guestToken;
		if (!guestToken) guestToken = await MD5MD5(mytoken);
		const 访客订阅 = guestToken;
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now()) / timestamp * total * 1099511627776) / 2);
		total = total * 1099511627776;
		let expire = Math.floor(timestamp / 1000);
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		if (!([mytoken, fakeToken, 访客订阅].includes(token) || url.pathname == ("/" + mytoken) || url.pathname.includes("/" + mytoken + "?"))) {
			if (TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico") await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			if (env.URL302) return Response.redirect(env.URL302, 302);
			else if (env.URL) return await proxyURL(env.URL, url);
			else return new Response(await nginx(), {
				status: 200,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			if (env.KV) {
				await 迁移地址列表(env, 'LINK.txt');
				if (userAgent.includes('mozilla') && !url.search) {
					await sendMessage(`#编辑订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
					return await KV(request, env, 'LINK.txt', 访客订阅);
				} else {
					MainData = await env.KV.get('LINK.txt') || MainData;
				}
			} else {
				MainData = env.LINK || MainData;
				if (env.LINKSUB) urls = await ADD(env.LINKSUB);
			}
			let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
			let 自建节点 = "";
			let 订阅链接 = "";
			for (let x of 重新汇总所有链接) {
				if (x.toLowerCase().startsWith('http')) {
					订阅链接 += x + '\n';
				} else {
					自建节点 += x + '\n';
				}
			}
			MainData = 自建节点;
			urls = await ADD(订阅链接);
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			const isSubConverterRequest = request.headers.get('subconverter-request') || request.headers.get('subconverter-version') || userAgent.includes('subconverter');
			let 订阅格式 = 'base64';
			if (!(userAgent.includes('null') || isSubConverterRequest || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase()))) {
				if (userAgent.includes('sing-box') || userAgent.includes('singbox') || url.searchParams.has('sb') || url.searchParams.has('singbox')) {
					订阅格式 = 'singbox';
				} else if (userAgent.includes('surge') || url.searchParams.has('surge')) {
					订阅格式 = 'surge';
				} else if (userAgent.includes('quantumult') || url.searchParams.has('quanx')) {
					订阅格式 = 'quanx';
				} else if (userAgent.includes('loon') || url.searchParams.has('loon')) {
					订阅格式 = 'loon';
				} else if (userAgent.includes('clash') || userAgent.includes('meta') || userAgent.includes('mihomo') || url.searchParams.has('clash')) {
					订阅格式 = 'clash';
				}
			}

			let subConverterUrl;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('b64') || url.searchParams.has('base64')) 订阅格式 = 'base64';
			else if (url.searchParams.has('clash')) 追加UA = 'clash';
			else if (url.searchParams.has('singbox')) 追加UA = 'singbox';
			else if (url.searchParams.has('surge')) 追加UA = 'surge';
			else if (url.searchParams.has('quanx')) 追加UA = 'Quantumult%20X';
			else if (url.searchParams.has('loon')) 追加UA = 'Loon';

			const 订阅链接数组 = [...new Set(urls)].filter(item => item?.trim?.()); // 去重
			if (订阅链接数组.length > 0) {
				const 请求订阅响应内容 = await getSUB(订阅链接数组, request, 追加UA, userAgentHeader);
				console.log(请求订阅响应内容);
				req_data += 请求订阅响应内容[0].join('\n');
				订阅转换URL += "|" + 请求订阅响应内容[1];
				if (订阅格式 == 'base64' && !isSubConverterRequest && 请求订阅响应内容[1].includes('://')) {
					subConverterUrl = `${subProtocol}://${subConverter}/sub?target=mixed&url=${encodeURIComponent(请求订阅响应内容[1])}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
					try {
						const subConverterResponse = await fetch(subConverterUrl, { headers: { 'User-Agent': 'v2rayN/CF-Workers-SUB  (https://github.com/cmliu/CF-Workers-SUB)' } });
						if (subConverterResponse.ok) {
							const subConverterContent = await subConverterResponse.text();
							req_data += '\n' + atob(subConverterContent);
						}
					} catch (error) {
						console.log('订阅转换请回base64失败，检查订阅转换后端是否正常运行');
					}
				}
			}

			if (env.WARP) 订阅转换URL += "|" + (await ADD(env.WARP)).join("|");
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			//const text = String.fromCharCode.apply(null, encodedData);
			const utf8Decoder = new TextDecoder();
			const text = utf8Decoder.decode(encodedData);

			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);

			let base64Data;
			try {
				base64Data = btoa(result);
			} catch (e) {
				function encodeBase64(data) {
					const binary = new TextEncoder().encode(data);
					let base64 = '';
					const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

					for (let i = 0; i < binary.length; i += 3) {
						const byte1 = binary[i];
						const byte2 = binary[i + 1] || 0;
						const byte3 = binary[i + 2] || 0;

						base64 += chars[byte1 >> 2];
						base64 += chars[((byte1 & 3) << 4) | (byte2 >> 4)];
						base64 += chars[((byte2 & 15) << 2) | (byte3 >> 6)];
						base64 += chars[byte3 & 63];
					}

					const padding = 3 - (binary.length % 3 || 3);
					return base64.slice(0, base64.length - padding) + '=='.slice(0, padding);
				}

				base64Data = encodeBase64(result)
			}

			// 构建响应头对象
			const responseHeaders = {
				"content-type": "text/plain; charset=utf-8",
				"Profile-Update-Interval": `${SUBUpdateTime}`,
				"Profile-web-page-url": request.url.includes('?') ? request.url.split('?')[0] : request.url,
				//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
			};

			if (订阅格式 == 'base64' || token == fakeToken) {
				return new Response(base64Data, { headers: responseHeaders });
			} else if (订阅格式 == 'clash') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=surge&ver=4&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'quanx') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=quanx&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&udp=true`;
			} else if (订阅格式 == 'loon') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=loon&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false`;
			}
			//console.log(订阅转换URL);
			try {
				const subConverterResponse = await fetch(subConverterUrl, { headers: { 'User-Agent': userAgentHeader } });//订阅转换
				if (!subConverterResponse.ok) return new Response(base64Data, { headers: responseHeaders });
				let subConverterContent = await subConverterResponse.text();
				if (订阅格式 == 'clash') subConverterContent = await clashFix(subConverterContent);
				// 只有非浏览器订阅才会返回SUBNAME
				if (!userAgent.includes('mozilla')) responseHeaders["Content-Disposition"] = `attachment; filename*=utf-8''${encodeURIComponent(FileName)}`;
				return new Response(subConverterContent, { headers: responseHeaders });
			} catch (error) {
				return new Response(base64Data, { headers: responseHeaders });
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, '\n').replace(/\n+/g, '\n');	// 替换为换行
	//console.log(addtext);
	if (addtext.charAt(0) == '\n') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length - 1) == '\n') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split('\n');
	//console.log(add);
	return add;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text;
}

async function sendMessage(type, ip, add_data = "") {
	if (BotToken !== '' && ChatID !== '') {
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}

		let url = "https://api.telegram.org/bot" + BotToken + "/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();

	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	return secondHex.toLowerCase();
}

function clashFix(content) {
	if (content.includes('wireguard') && !content.includes('remote-dns-resolve')) {
		let lines;
		if (content.includes('\r\n')) {
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}

		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}

async function proxyURL(proxyURL, url) {
	const URLs = await ADD(proxyURL);
	const fullURL = URLs[Math.floor(Math.random() * URLs.length)];

	// 解析目标 URL
	let parsedURL = new URL(fullURL);
	console.log(parsedURL);
	// 提取并可能修改 URL 组件
	let URLProtocol = parsedURL.protocol.slice(0, -1) || 'https';
	let URLHostname = parsedURL.hostname;
	let URLPathname = parsedURL.pathname;
	let URLSearch = parsedURL.search;

	// 处理 pathname
	if (URLPathname.charAt(URLPathname.length - 1) == '/') {
		URLPathname = URLPathname.slice(0, -1);
	}
	URLPathname += url.pathname;

	// 构建新的 URL
	let newURL = `${URLProtocol}://${URLHostname}${URLPathname}${URLSearch}`;

	// 反向代理请求
	let response = await fetch(newURL);

	// 创建新的响应
	let newResponse = new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers
	});

	// 添加自定义头部，包含 URL 信息
	//newResponse.headers.set('X-Proxied-By', 'Cloudflare Worker');
	//newResponse.headers.set('X-Original-URL', fullURL);
	newResponse.headers.set('X-New-URL', newURL);

	return newResponse;
}

async function getSUB(api, request, 追加UA, userAgentHeader) {
	if (!api || api.length === 0) {
		return [];
	} else api = [...new Set(api)]; // 去重
	let newapi = "";
	let 订阅转换URLs = "";
	let 异常订阅 = "";
	const controller = new AbortController(); // 创建一个AbortController实例，用于取消请求
	const timeout = setTimeout(() => {
		controller.abort(); // 2秒后取消所有请求
	}, 2000);

	try {
		// 使用Promise.allSettled等待所有API请求完成，无论成功或失败
		const responses = await Promise.allSettled(api.map(apiUrl => getUrl(request, apiUrl, 追加UA, userAgentHeader).then(response => response.ok ? response.text() : Promise.reject(response))));

		// 遍历所有响应
		const modifiedResponses = responses.map((response, index) => {
			// 检查是否请求成功
			if (response.status === 'rejected') {
				const reason = response.reason;
				if (reason && reason.name === 'AbortError') {
					return {
						status: '超时',
						value: null,
						apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
					};
				}
				console.error(`请求失败: ${api[index]}, 错误信息: ${reason.status} ${reason.statusText}`);
				return {
					status: '请求失败',
					value: null,
					apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
				};
			}
			return {
				status: response.status,
				value: response.value,
				apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
			};
		});

		console.log(modifiedResponses); // 输出修改后的响应数组

		for (const response of modifiedResponses) {
			// 检查响应状态是否为'fulfilled'
			if (response.status === 'fulfilled') {
				const content = await response.value || 'null'; // 获取响应的内容
				if (content.includes('proxies:')) {
					//console.log('Clash订阅: ' + response.apiUrl);
					订阅转换URLs += "|" + response.apiUrl; // Clash 配置
				} else if (content.includes('outbounds"') && content.includes('inbounds"')) {
					//console.log('Singbox订阅: ' + response.apiUrl);
					订阅转换URLs += "|" + response.apiUrl; // Singbox 配置
				} else if (content.includes('://')) {
					//console.log('明文订阅: ' + response.apiUrl);
					newapi += content + '\n'; // 追加内容
				} else if (isValidBase64(content)) {
					//console.log('Base64订阅: ' + response.apiUrl);
					newapi += base64Decode(content) + '\n'; // 解码并追加内容
				} else {
					const 异常订阅LINK = `trojan://CMLiussss@127.0.0.1:8888?security=tls&allowInsecure=1&type=tcp&headerType=none#%E5%BC%82%E5%B8%B8%E8%AE%A2%E9%98%85%20${response.apiUrl.split('://')[1].split('/')[0]}`;
					console.log('异常订阅: ' + 异常订阅LINK);
					异常订阅 += `${异常订阅LINK}\n`;
				}
			}
		}
	} catch (error) {
		console.error(error); // 捕获并输出错误信息
	} finally {
		clearTimeout(timeout); // 清除定时器
	}

	const 订阅内容 = await ADD(newapi + 异常订阅); // 将处理后的内容转换为数组
	// 返回处理后的结果
	return [订阅内容, 订阅转换URLs];
}

async function getUrl(request, targetUrl, 追加UA, userAgentHeader) {
	// 设置自定义 User-Agent
	const newHeaders = new Headers(request.headers);
	newHeaders.set("User-Agent", `${atob('djJyYXlOLzYuNDU=')} cmliu/CF-Workers-SUB ${追加UA}(${userAgentHeader})`);

	// 构建新的请求对象
	const modifiedRequest = new Request(targetUrl, {
		method: request.method,
		headers: newHeaders,
		body: request.method === "GET" ? null : request.body,
		redirect: "follow",
		cf: {
			// 忽略SSL证书验证
			insecureSkipVerify: true,
			// 允许自签名证书
			allowUntrusted: true,
			// 禁用证书验证
			validateCertificate: false
		}
	});

	// 输出请求的详细信息
	console.log(`请求URL: ${targetUrl}`);
	console.log(`请求头: ${JSON.stringify([...newHeaders])}`);
	console.log(`请求方法: ${request.method}`);
	console.log(`请求体: ${request.method === "GET" ? null : request.body}`);

	// 发送请求并返回响应
	return fetch(modifiedRequest);
}

function isValidBase64(str) {
	// 先移除所有空白字符(空格、换行、回车等)
	const cleanStr = str.replace(/\s/g, '');
	const base64Regex = /^[A-Za-z0-9+/=]+$/;
	return base64Regex.test(cleanStr);
}

async function 迁移地址列表(env, txt = 'ADD.txt') {
	const 旧数据 = await env.KV.get(`/${txt}`);
	const 新数据 = await env.KV.get(txt);

	if (旧数据 && !新数据) {
		// 写入新位置
		await env.KV.put(txt, 旧数据);
		// 删除旧数据
		await env.KV.delete(`/${txt}`);
		return true;
	}
	return false;
}

async function KV(request, env, txt = 'ADD.txt', guest) {
	const url = new URL(request.url);
	try {
		// POST请求处理
		if (request.method === "POST") {
			if (!env.KV) return new Response("未绑定KV空间", { status: 400 });
			try {
				const content = await request.text();
				await env.KV.put(txt, content);
				return new Response("保存成功");
			} catch (error) {
				console.error('保存KV时发生错误:', error);
				return new Response("保存失败: " + error.message, { status: 500 });
			}
		}

		// GET请求部分
		let content = '';
		let hasKV = !!env.KV;

		if (hasKV) {
			try {
				content = await env.KV.get(txt) || '';
			} catch (error) {
				console.error('读取KV时发生错误:', error);
				content = '读取数据时发生错误: ' + error.message;
			}
		}

		const html = `
			<!DOCTYPE html>
			<html>
				<head>
					<title>${FileName} 订阅编辑</title>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<style>
						body {
							margin: 0;
							padding: 15px; /* 调整padding */
							box-sizing: border-box;
							font-size: 13px; /* 设置全局字体大小 */
						}
						.editor-container {
							width: 100%;
							max-width: 100%;
							margin: 0 auto;
						}
						.editor {
							width: 100%;
							height: 300px; /* 调整高度 */
							margin: 15px 0; /* 调整margin */
							padding: 10px; /* 调整padding */
							box-sizing: border-box;
							border: 1px solid #ccc;
							border-radius: 4px;
							font-size: 13px;
							line-height: 1.5;
							overflow-y: auto;
							resize: none;
						}
						.save-container {
							margin-top: 8px; /* 调整margin */
							display: flex;
							align-items: center;
							gap: 10px; /* 调整gap */
						}
						.save-btn, .back-btn {
							padding: 6px 15px; /* 调整padding */
							color: white;
							border: none;
							border-radius: 4px;
							cursor: pointer;
						}
						.save-btn {
							background: #4CAF50;
						}
						.save-btn:hover {
							background: #45a049;
						}
						.back-btn {
							background: #666;
						}
						.back-btn:hover {
							background: #555;
						}
						.save-status {
							color: #666;
						}
					</style>
					<script src="https://cdn.jsdelivr.net/npm/@keeex/qrcodejs-kx@1.0.2/qrcode.min.js"></script>
				</head>
				<body>
					################################################################<br>
					Subscribe / sub 订阅地址, 点击链接自动 <strong>复制订阅链接</strong> 并 <strong>生成订阅二维码</strong> <br>
					---------------------------------------------------------------<br>
					自适应订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?sub','qrcode_0')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}</a><br>
					<div id="qrcode_0" style="margin: 10px 10px 10px 10px;"></div>
					Base64订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?b64','qrcode_1')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?b64</a><br>
					<div id="qrcode_1" style="margin: 10px 10px 10px 10px;"></div>
					clash订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?clash','qrcode_2')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?clash</a><br>
					<div id="qrcode_2" style="margin: 10px 10px 10px 10px;"></div>
					singbox订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?sb','qrcode_3')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?sb</a><br>
					<div id="qrcode_3" style="margin: 10px 10px 10px 10px;"></div>
					surge订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?surge','qrcode_4')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?surge</a><br>
					<div id="qrcode_4" style="margin: 10px 10px 10px 10px;"></div>
					loon订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?loon','qrcode_5')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?loon</a><br>
					<div id="qrcode_5" style="margin: 10px 10px 10px 10px;"></div>
					&nbsp;&nbsp;<strong><a href="javascript:void(0);" id="noticeToggle" onclick="toggleNotice()">查看访客订阅∨</a></strong><br>
					<div id="noticeContent" class="notice-content" style="display: none;">
						---------------------------------------------------------------<br>
						访客订阅只能使用订阅功能，无法查看配置页！<br>
						GUEST（访客订阅TOKEN）: <strong>${guest}</strong><br>
						---------------------------------------------------------------<br>
						自适应订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}','guest_0')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}</a><br>
						<div id="guest_0" style="margin: 10px 10px 10px 10px;"></div>
						Base64订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&b64','guest_1')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&b64</a><br>
						<div id="guest_1" style="margin: 10px 10px 10px 10px;"></div>
						clash订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&clash','guest_2')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&clash</a><br>
						<div id="guest_2" style="margin: 10px 10px 10px 10px;"></div>
						singbox订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&sb','guest_3')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&sb</a><br>
						<div id="guest_3" style="margin: 10px 10px 10px 10px;"></div>
						surge订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&surge','guest_4')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&surge</a><br>
						<div id="guest_4" style="margin: 10px 10px 10px 10px;"></div>
						loon订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&loon','guest_5')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&loon</a><br>
						<div id="guest_5" style="margin: 10px 10px 10px 10px;"></div>
					</div>
					---------------------------------------------------------------<br>
					################################################################<br>
					订阅转换配置<br>
					---------------------------------------------------------------<br>
					SUBAPI（订阅转换后端）: <strong>${subProtocol}://${subConverter}</strong><br>
					SUBCONFIG（订阅转换配置文件）: <strong>${subConfig}</strong><br>
					---------------------------------------------------------------<br>
					################################################################<br>
					${FileName} 汇聚订阅编辑: 
					<div class="editor-container">
						${hasKV ? `
						<textarea class="editor" 
							placeholder="${decodeURIComponent(atob('TElOSyVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNCVCOCVBQSVFOCU4QSU4MiVFNyU4MiVCOSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQp2bGVzcyUzQSUyRiUyRjI0NmFhNzk1LTA2MzctNGY0Yy04ZjY0LTJjOGZiMjRjMWJhZCU0MDEyNy4wLjAuMSUzQTEyMzQlM0ZlbmNyeXB0aW9uJTNEbm9uZSUyNnNlY3VyaXR5JTNEdGxzJTI2c25pJTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2YWxsb3dJbnNlY3VyZSUzRDElMjZ0eXBlJTNEd3MlMjZob3N0JTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2cGF0aCUzRCUyNTJGJTI1M0ZlZCUyNTNEMjU2MCUyM0NGbmF0CnRyb2phbiUzQSUyRiUyRmFhNmRkZDJmLWQxY2YtNGE1Mi1iYTFiLTI2NDBjNDFhNzg1NiU0MDIxOC4xOTAuMjMwLjIwNyUzQTQxMjg4JTNGc2VjdXJpdHklM0R0bHMlMjZzbmklM0RoazEyLmJpbGliaWxpLmNvbSUyNmFsbG93SW5zZWN1cmUlM0QxJTI2dHlwZSUzRHRjcCUyNmhlYWRlclR5cGUlM0Rub25lJTIzSEsKc3MlM0ElMkYlMkZZMmhoWTJoaE1qQXRhV1YwWmkxd2IyeDVNVE13TlRveVJYUlFjVzQyU0ZscVZVNWpTRzlvVEdaVmNFWlJkMjVtYWtORFVUVnRhREZ0U21SRlRVTkNkV04xVjFvNVVERjFaR3RTUzBodVZuaDFielUxYXpGTFdIb3lSbTgyYW5KbmRERTRWelkyYjNCMGVURmxOR0p0TVdwNlprTm1RbUklMjUzRCU0MDg0LjE5LjMxLjYzJTNBNTA4NDElMjNERQoKCiVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNiU5RCVBMSVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQpodHRwcyUzQSUyRiUyRnN1Yi54Zi5mcmVlLmhyJTJGYXV0bw=='))}"
							id="content">${content}</textarea>
						<div class="save-container">
							<button class="save-btn" onclick="saveContent(this)">保存</button>
							<span class="save-status" id="saveStatus"></span>
						</div>
						` : '<p>请绑定 <strong>变量名称</strong> 为 <strong>KV</strong> 的KV命名空间</p>'}
					</div>
					<br>
					################################################################<br>
					${decodeURIComponent(atob('dGVsZWdyYW0lMjAlRTQlQkElQTQlRTYlQjUlODElRTclQkUlQTQlMjAlRTYlOEElODAlRTYlOUMlQUYlRTUlQTQlQTclRTQlQkQlQUMlN0UlRTUlOUMlQTglRTclQkElQkYlRTUlOEYlOTElRTclODklOEMhJTNDYnIlM0UKJTNDYSUyMGhyZWYlM0QlMjdodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlMjclM0VodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlM0MlMkZhJTNFJTNDYnIlM0UKLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJTNDYnIlM0UKZ2l0aHViJTIwJUU5JUExJUI5JUU3JTlCJUFFJUU1JTlDJUIwJUU1JTlEJTgwJTIwU3RhciFTdGFyIVN0YXIhISElM0NiciUzRQolM0NhJTIwaHJlZiUzRCUyN2h0dHBzJTNBJTJGJTJGZ2l0aHViLmNvbSUyRmNtbGl1JTJGQ0YtV29ya2Vycy1TVUIlMjclM0VodHRwcyUzQSUyRiUyRmdpdGh1Yi5jb20lMkZjbWxpdSUyRkNGLVdvcmtlcnMtU1VCJTNDJTJGYSUzRSUzQ2JyJTNFCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSUzQ2JyJTNFCiUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMw=='))}
					<br><br>UA: <strong>${request.headers.get('User-Agent')}</strong>
					<script>
					function copyToClipboard(text, qrcode) {
						navigator.clipboard.writeText(text).then(() => {
							alert('已复制到剪贴板');
						}).catch(err => {
							console.error('复制失败:', err);
						});
						const qrcodeDiv = document.getElementById(qrcode);
						qrcodeDiv.innerHTML = '';
						new QRCode(qrcodeDiv, {
							text: text,
							width: 220, // 调整宽度
							height: 220, // 调整高度
							colorDark: "#000000", // 二维码颜色
							colorLight: "#ffffff", // 背景颜色
							correctLevel: QRCode.CorrectLevel.Q, // 设置纠错级别
							scale: 1 // 调整像素颗粒度
						});
					}
						
					if (document.querySelector('.editor')) {
						let timer;
						const textarea = document.getElementById('content');
						const originalContent = textarea.value;
		
						function goBack() {
							const currentUrl = window.location.href;
							const parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
							window.location.href = parentUrl;
						}
		
						function replaceFullwidthColon() {
							const text = textarea.value;
							textarea.value = text.replace(/：/g, ':');
						}
						
						function saveContent(button) {
							try {
								const updateButtonText = (step) => {
									button.textContent = \`保存中: \${step}\`;
								};
								// 检测是否为iOS设备
								const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
								
								// 仅在非iOS设备上执行replaceFullwidthColon
								if (!isIOS) {
									replaceFullwidthColon();
								}
								updateButtonText('开始保存');
								button.disabled = true;

								// 获取textarea内容和原始内容
								const textarea = document.getElementById('content');
								if (!textarea) {
									throw new Error('找不到文本编辑区域');
								}

								updateButtonText('获取内容');
								let newContent;
								let originalContent;
								try {
									newContent = textarea.value || '';
									originalContent = textarea.defaultValue || '';
								} catch (e) {
									console.error('获取内容错误:', e);
									throw new Error('无法获取编辑内容');
								}

								updateButtonText('准备状态更新函数');
								const updateStatus = (message, isError = false) => {
									const statusElem = document.getElementById('saveStatus');
									if (statusElem) {
										statusElem.textContent = message;
										statusElem.style.color = isError ? 'red' : '#666';
									}
								};

								updateButtonText('准备按钮重置函数');
								const resetButton = () => {
									button.textContent = '保存';
									button.disabled = false;
								};

								if (newContent !== originalContent) {
									updateButtonText('发送保存请求');
									fetch(window.location.href, {
										method: 'POST',
										body: newContent,
										headers: {
											'Content-Type': 'text/plain;charset=UTF-8'
										},
										cache: 'no-cache'
									})
									.then(response => {
										updateButtonText('检查响应状态');
										if (!response.ok) {
											throw new Error(\`HTTP error! status: \${response.status}\`);
										}
										updateButtonText('更新保存状态');
										const now = new Date().toLocaleString();
										document.title = \`编辑已保存 \${now}\`;
										updateStatus(\`已保存 \${now}\`);
									})
									.catch(error => {
										updateButtonText('处理错误');
										console.error('Save error:', error);
										updateStatus(\`保存失败: \${error.message}\`, true);
									})
									.finally(() => {
										resetButton();
									});
								} else {
									updateButtonText('检查内容变化');
									updateStatus('内容未变化');
									resetButton();
								}
							} catch (error) {
								console.error('保存过程出错:', error);
								button.textContent = '保存';
								button.disabled = false;
								const statusElem = document.getElementById('saveStatus');
								if (statusElem) {
									statusElem.textContent = \`错误: \${error.message}\`;
									statusElem.style.color = 'red';
								}
							}
						}
		
						textarea.addEventListener('blur', saveContent);
						textarea.addEventListener('input', () => {
							clearTimeout(timer);
							timer = setTimeout(saveContent, 5000);
						});
					}

					function toggleNotice() {
						const noticeContent = document.getElementById('noticeContent');
						const noticeToggle = document.getElementById('noticeToggle');
						if (noticeContent.style.display === 'none' || noticeContent.style.display === '') {
							noticeContent.style.display = 'block';
							noticeToggle.textContent = '隐藏访客订阅∧';
						} else {
							noticeContent.style.display = 'none';
							noticeToggle.textContent = '查看访客订阅∨';
						}
					}
			
					// 初始化 noticeContent 的 display 属性
					document.addEventListener('DOMContentLoaded', () => {
						document.getElementById('noticeContent').style.display = 'none';
					});
					</script>
				</body>
			</html>
		`;

		return new Response(html, {
			headers: { "Content-Type": "text/html;charset=utf-8" }
		});
	} catch (error) {
		console.error('处理请求时发生错误:', error);
		return new Response("服务器错误: " + error.message, {
			status: 500,
			headers: { "Content-Type": "text/plain;charset=utf-8" }
		});
	}

}






