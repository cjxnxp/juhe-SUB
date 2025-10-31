
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
## Create VPN  台湾
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F114.34.202.224-10004#TW%2BChunghwa%20Telecom%20CoLtd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F210.61.97.241-81#TW%2BChunghwa%20Telecom%20CoLtd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F149.104.120.254-443#TW%2BKaopu%20Cloud%20HK%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F213.210.5.61-8443#TW%2BByteVirt%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F45.207.158.29-2083#TW%2BAkile%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F122.117.174.80-443#TW%2BChunghwa%20Telecom%20CoLtd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F45.207.158.29-2053#TW%2BAkile%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F213.210.4.49-443#TW%2BByteVirt%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F45.207.158.29-8443#TW%2BAkile%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F188.253.117.154-443#TW%2BAkari%20Networks%20Taipei
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F123.253.111.136-443#TW%2BTokyo
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F60.249.114.181-16022#TW%2BChunghwa%20Telecom%20CoLtd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F60.249.114.181-12281#TW%2BChunghwa%20Telecom%20CoLtd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F60.249.114.181-21574#TW%2BChunghwa%20Telecom%20CoLtd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F60.249.114.181-32003#TW%2BChunghwa%20Telecom%20CoLtd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F60.249.114.181-11285#TW%2BChunghwa%20Telecom%20CoLtd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F60.249.114.181-26398#TW%2BChunghwa%20Telecom%20CoLtd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F60.249.114.181-10244#TW%2BChunghwa%20Telecom%20CoLtd

## Create VPN  香港
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F18.162.156.23-12355#HK%2BAmazon%20Data%20Services%20Hong%20Kong
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F103.112.185.138-587#HK%2BRainbow%20Network%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F43.154.196.20-65121#HK%2B6%20COLLYER%20QUAY
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F8.210.96.197-12902#HK%2BAliyun%20Computing%20CoLTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F38.207.133.204-10002#HK%2BNearoute%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F45.39.198.40-8080#HK%2BInternet%20Utilities%20NA%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F124.244.92.109-25203#HK%2BHong%20Kong%20Broadband%20Network%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F45.39.198.43-8080#HK%2BInternet%20Utilities%20NA%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F8.218.36.133-9010#HK%2BAlibaba%20Cloud%20Singapore%20Private%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F141.11.148.60-8080#HK%2BAKILE%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F46.232.122.240-8000#HK%2BDom%20Tehniki%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F141.11.77.248-8080#HK%2BAKILE%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F141.11.149.195-12082#HK%2BAKILE%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F192.142.4.76-2053#HK%2BUltahost%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F141.11.78.77-8080#HK%2BAKILE%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F8.218.245.116-42805#HK%2BAlibaba%20Cloud%20Singapore%20Private%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F8.218.245.116-49701#HK%2BAlibaba%20Cloud%20Singapore%20Private%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F47.76.218.163-443#HK%2BAlibaba%20Cloud%20%20HK
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F192.252.182.52-7602#HK%2BIntegen%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F141.11.91.67-8080#HK%2BTusker%20Technologies%20Pty%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F8.218.245.116-41528#HK%2BAlibaba%20Cloud%20Singapore%20Private%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F210.6.207.42-18622#HK%2BHong%20Kong%20Broadband%20Network%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F62.192.175.43-12009#HK%2BPrivate%20Customer
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F154.16.10.34-8080#HK%2BDigital%20Energy%20Technologies%20Limited

## Create VPN  日本
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F109.123.231.212-2053#JP%2BContabo%20GmbH
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F118.27.12.40-38443#JP%2BGMO%20Internet%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F108.160.139.154-8443#JP%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F103.106.228.126-2053#JP%2Boneprovidercom%20%20Tokyo%20Infrastructure
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F132.145.116.185-443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F18.183.158.211-443#JP%2BAmazon%20Data%20Services%20Japan
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F45.11.1.118-44004#JP%2BCEGRGODigitalVM%20LLC%20%20Tokyo
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F45.76.192.129-24434#JP%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F8.216.121.234-51922#JP%2BAlibaba%20Cloud%20Singapore%20Private%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F8.209.220.50-21273#JP%2BShiodome%20Sumitomo%20Blog%20192%20TOKYO
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F193.246.161.65-54310#JP%2BAKILE%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F103.75.118.144-2053#JP%2BOneprovidercom%20%20Japan%20Infrastructure
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F121.85.55.59-19842#JP%2BOPTAGE%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F185.18.222.208-2053#JP%2BJurgita%20Jurgaitiene%20trading%20as%20LOCOTORPI
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F113.37.149.36-12553#JP%2BARTERIA%20Networks%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F138.2.18.82-8880#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F84.247.152.46-10045#JP%2BContabo%20GmbH
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F140.238.62.82-1443#JP%2BOracle%20Public%20Cloud
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F138.2.10.149-45638#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F147.45.49.11-8443#JP%2BGLOBAL%20CONNECTIVITY%20SOLUTIONS%20LLP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F47.79.90.37-49153#JP%2BAlibaba%20Cloud%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F138.3.217.167-587#JP%2BOracle%20Network%20Information%20Services
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F138.3.222.33-443#JP%2BOracle%20Network%20Information%20Services
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F141.147.185.63-443#JP%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F13.230.34.30-443#JP%2BAmazon%20Data%20Services%20Japan

## Create VPN  韩国
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F1.249.45.86-12112#KR%2BSK%20Broadband%20Co%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F1.232.86.168-50001#KR%2BSK%20Broadband%20Co%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F1.238.209.247-50001#KR%2BSK%20Broadband%20Co%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F183.100.116.217-50001#KR%2BKorea%20Telecom
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F182.218.116.173-50001#KR%2BLG%20POWERCOMM
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F182.31.70.92-12336#KR%2BSeokyung%20Cable%20Television%20Co%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F180.71.243.211-50001#KR%2BSK%20Broadband%20Co%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F182.208.209.54-50001#KR%2BLG%20POWERCOMM
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F182.208.209.54-50000#KR%2BLG%20POWERCOMM
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F183.101.243.99-12576#KR%2BKorea%20Telecom
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F182.31.70.92-12147#KR%2BSeokyung%20Cable%20Television%20Co%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F183.103.251.116-50001#KR%2BKorea%20Telecom
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F183.104.0.181-16923#KR%2BKorea%20Telecom
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F103.86.44.120-65432#KR%2BMOACK%20DC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F183.106.76.116-10007#KR%2BKorea%20Telecom
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F183.106.76.116-20332#KR%2BKorea%20Telecom
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F183.100.113.37-21297#KR%2BKorea%20Telecom
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F183.96.245.165-50001#KR%2BKorea%20Telecom
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F183.106.76.116-10001#KR%2BKorea%20Telecom
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F183.106.76.116-12112#KR%2BKorea%20Telecom
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F183.106.76.116-10030#KR%2BKorea%20Telecom
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F183.106.76.116-29429#KR%2BKorea%20Telecom
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F183.106.76.116-34599#KR%2BKorea%20Telecom
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F183.106.76.116-34599#KR%2BKorea%20Telecom
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F106.241.78.205-12107#KR%2BLG%20DACOM%20Corporation

## Create VPN  新加坡
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F43.128.95.110-40029#SG%2B6%20COLLYER%20QUAY
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F8.219.59.132-48964#SG%2BAlibaba%20Cloud%20Singapore%20Private%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F8.219.59.132-48130#SG%2BAlibaba%20Cloud%20Singapore%20Private%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F13.250.131.37-443#SG%2BAmazon%20Data%20Services%20Singapore
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F43.156.107.236-12131#SG%2B6%20COLLYER%20QUAY
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F138.2.95.33-17465#SG%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F83.142.30.4-2096#SG%2BZappie%20Host%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F138.2.69.236-23334#SG%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F129.150.35.29-587#SG%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F158.178.236.14-61731#SG%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F8.219.126.137-491#SG%2BAlibaba%20Cloud%20Singapore%20Private%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F143.198.196.196-2053#SG%2BDigitalOcean%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F167.99.73.22-443#SG%2BDigitalOcean%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F51.79.158.58-2053#SG%2BOVH%20Singapore%20PTE%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F158.178.243.152-61731#SG%2BOracle%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F51.79.158.58-8443#SG%2BOVH%20Singapore%20PTE%20LTD
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F8.219.155.21-443#SG%2BAlibaba%20Cloud%20Singapore%20Private%20Limited
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F47.74.254.191-8900#SG%2BAlibaba%20Cloud%20%20SG
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F45.76.179.81-443#SG%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F143.198.92.220-443#SG%2BDigitalOcean%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F91.192.81.154-2053#SG%2BMelbikomas%20UAB
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F47.130.35.116-8888#SG%2BAmazon%20Data%20Services%20Singapore
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F64.49.14.41-8443#SG%2BInternet%20Utilities%20NA%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F143.198.196.196-8443#SG%2BDigitalOcean%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F64.49.14.41-2053#SG%2BInternet%20Utilities%20NA%20LLC

## Create VPN  美国
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F66.98.127.46-2053#US%2BCluster%20Logic%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F72.18.83.132-16232#US%2BCloudCone%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F66.85.139.204-443#US%2BSECURED%20SERVERS%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F66.42.68.129-10089#US%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F44.227.209.152-443#US%2BAmazoncom%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F34.83.245.149-443#US%2BGoogle%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F72.18.132.149-2053#US%2BExabytes%20Network%20Singapore%20Pte%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F72.18.132.149-8443#US%2BExabytes%20Network%20Singapore%20Pte%20Ltd
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F103.124.105.222-443#US%2BHosteonscom
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F72.167.140.7-8443#US%2BGoDaddycom%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F72.167.140.7-2053#US%2BGoDaddycom%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F103.113.70.70-2053#US%2BWorkTitans%20BV
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F35.175.188.144-9000#US%2BAmazon%20Technologies%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F34.225.195.136-443#US%2BAmazon%20Technologies%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F104.234.50.138-2053#US%2BPrivate%20Customer
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F66.23.198.74-10443#US%2BRedoubt%20Networks
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F35.185.54.229-27251#US%2BGoogle%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F69.30.212.4-6643#US%2BWholeSale%20Internet%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F104.234.50.12-2053#US%2BPrivate%20Customer
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F35.185.54.229-27271#US%2BGoogle%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F35.185.54.229-27205#US%2BGoogle%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F104.207.138.254-443#US%2BVultr%20Holdings%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F37.123.193.154-666#US%2BKirino%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F104.160.47.72-18888#US%2BIT7%20Networks%20Inc
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F104.194.86.189-443#US%2BIT7%20Networks%20Inc

## Create VPN  德国
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F31.172.73.104-2053#DE%2Bwwwfornexcom%20Fornex%20Hosting%20SL
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F176.96.138.171-8000#DE%2Bdataforest%20GmbH
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F31.172.72.21-8443#DE%2Bwwwfornexcom%20Fornex%20Hosting%20SL
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F167.17.183.244-443#DE%2BRCS%20Technologies%20FZE%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F176.96.138.171-14000#DE%2Bdataforest%20GmbH
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F31.172.73.59-443#DE%2Bwwwfornexcom%20Fornex%20Hosting%20SL
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F66.151.40.245-4443#DE%2Bnull
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F66.151.40.55-8443#DE%2Bnull
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F31.172.72.21-2053#DE%2Bwwwfornexcom%20Fornex%20Hosting%20SL
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F178.128.198.120-2053#DE%2BDigitalOcean%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F178.128.198.120-8443#DE%2BDigitalOcean%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F31.172.71.72-443#DE%2Bwwwfornexcom%20Fornex%20Hosting%20SL
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F66.151.43.150-2053#DE%2Bnull
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F66.151.40.55-2053#DE%2Bnull
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F66.151.43.150-8443#DE%2Bnull
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F206.81.29.239-443#DE%2BDigitalOcean%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F195.58.38.9-443#DE%2Bnuxtcloud%20hosting%20provider
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F77.105.132.157-2053#DE%2BNew%20Hosting%20Technologies%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F178.22.31.39-8443#DE%2BGLOBAL%20CONNECTIVITY%20SOLUTIONS%20LLP
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F18.153.254.136-8443#DE%2BA100%20ROW%20GmbH
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F37.1.195.124-443#DE%2BIROKO%20Networks%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F178.250.187.3-8443#DE%2BStandart%20AG%20LLC
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F37.1.194.153-2053#DE%2BIROKO%20Networks%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F18.153.254.136-2053#DE%2BA100%20ROW%20GmbH
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F37.1.193.82-2053#DE%2BIROKO%20Networks%20Corporation
vless://eeeeeee3-eeee-4eee-aeee-eeeeeeeeeee5@javsubindo.dpdns.org:443?encryption=none&security=tls&sni=javsubindo.dpdns.org&type=ws&host=javsubindo.dpdns.org&path=%2F37.1.194.153-8443#DE%2BIROKO%20Networks%20Corporation


`;

let urls = [];
let subConverter = "subapi.xn-yydswdqn.ip-ddns.com"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subConfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_Full.ini"; //订阅配置文件
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














