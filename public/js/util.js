






function substract(array1, array2){
    return array1.filter(n => !array2.includes(n))
}


// credit: https://stackoverflow.com/a/9229821/7069108
function uniqBy(a, key) {
    let seen = {};

    return a.filter(function(item) {
        let k = key(item);

        if (seen.hasOwnProperty(k))
            return false;

        seen[k] = true;
        return true;
    })
}