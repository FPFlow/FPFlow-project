# FPFlow

This repo contains the data mentioned in paper.


## Statistic Data

| file                 | content                                                  |
| -------------------- | -------------------------------------------------------- |
| data/taints.txt      | The taint source marked by FPFlow and it's usage.        |
| data/targets.txt     | The tracking services and it's usage, represent in fqdn. |
| data/targets_sld.txt | The tracking services and it's usage, represent in sld.  |
| data/beacons.txt     | Websites sending fingerprint beacon.                     |

## Script Snapshot

| file                     | source                                                       | description                                  |
| ------------------------ | ------------------------------------------------------------ | -------------------------------------------- |
| scripts/1.(formatted).js | https://www.zalando.de/akam/11/2a40e12f                      | An encrypted script used by 88 sites         |
| scripts/2.(formatted).js | https://j1.58cdn.com.cn/git/xxzl/teemo/teemo_core.js?v=10012 | A script using fingerprintjs                 |
| script/3.(formatted).js  | https://www.podbean.com/cdn-cgi/bm/cv/669835187/api.js       | A script using Picasso canvas fingerprinting |
| script/4.(formatted).js  | https://wl.jd.com/wl.js                                      | A script use md5 to digest fingerprints      |