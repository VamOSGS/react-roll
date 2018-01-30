function createArr() {
    let result = [];
    for (let i = 0; i <= 14; i++) {
        if (i === 0) {
            result = [...result, { num: i, color: 'green' }];
        } else {
            i <= 7
                ? (result = [...result, { num: i, color: 'red' }])
                : (result = [...result, { num: i, color: 'black' }]);
        }
    }
    return result;
}
function getPos() {
    let arr = [-4900];
    for (let i = 0; i < 14; i++) {
        arr = [...arr, arr[arr.length - 1] - 90];
    }
    return arr;
}
export default function () {
    const arr = createArr();
    const positons = getPos();
    let res = [];
    arr.map((item, i) => {
        if (i !== 0) {
            if (res.length <= 13) {
                if (i === 4) {
                    res = [...res, arr[0]];
                }
                res = [...res, arr[i], arr[arr.length - i]];
            }
        }
        return 0;
    });
    res.map((item, key) => {
        item.pos = positons[key];
    });
    return res;
}
