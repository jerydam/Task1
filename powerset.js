function powerSet(arr) {
    const result = [[]];
    for (let i = 0; i < arr.length; i++) {
        const len = result.length;
        for (let j = 0; j < len; j++) {
            result.push([...result[j], arr[i]]);
        }
    }
    return result;
    console.log(result)
}