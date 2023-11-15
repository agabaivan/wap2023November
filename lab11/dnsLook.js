const dns = require('dns');

const domainName = 'www.miu.edu';

dns.resolve4(domainName, (error, addresses) => {
    if (error) {
        console.error(`Error resolving ${domainName}: ${err.message}`);
    } else {
        console.log(`IP address for ${domainName}: ${addresses}`);
    }
});
