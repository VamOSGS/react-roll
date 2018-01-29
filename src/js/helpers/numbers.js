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

export default function() {
    let arr = createArr();
    let res = [];
    arr.map((item, i) => {
        if (i !== 0) {
            if (res.length <= 13) {
                if (i == 4) {
                    res = [...res, arr[0]]
                }
                res = [...res, arr[i], arr[arr.length - i]];
            }
        }
    });
    return res;
}
