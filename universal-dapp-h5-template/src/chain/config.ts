let dev = 'TEST'; // DEV TEST PROD
var mode = import.meta.env.VITE_APP_MODE
console.log(mode);
if (mode == 'test') {
    dev = 'TEST'
} else if (mode == 'dev') {
    dev = 'DEV'

} else if (mode == 'prod') {
    dev = 'PROD'
}

let contractAddress = {
    usdt: '',
   
};

if (dev == "DEV") {
    contractAddress = {
        usdt: 'B7uY3FsRuMkyzp319nWY1TzLwrDYvbNh78',
    }
} else if (dev == 'TEST') {
    contractAddress = {
        usdt: 'B7uY3FsRuMkyzp319nWY1TzLwrDYvbNh78',
    }

} else if (dev == 'PROD') {
    contractAddress = {
        usdt: 'B5B6XMXe34nXcwT4YRDrxgMhFJQxT6sPwK',
    }

}

const refineMap = new Map();


export {
    contractAddress
}