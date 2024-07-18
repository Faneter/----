// 此文件下所有的随机数范围都是双闭的

function getRandomIntergers(from, to, num) {
    var array = new Array(num)
    for (i = 0; i < num ;i++) {
        array[i] = Math.floor(Math.random()*(to - from + 1)) + from
    }

    return array
}

function getRandomNonrepetitiveIntergers(from, to, num) {
    var array = new Array(num)
    F: for (i = 0; i < num ;i++) {
        var j = Math.floor(Math.random()*(to - from + 1)) + from
        for (k = 0; k < i; k++) {
            if (array[k] == j) {
                i--
                continue F
            }
        }
        array[i] = j
    }

    return array
}

function getRandomIntergersWithoutSelectedNum(from, to, num, selectedNum) {
    var array = new Array(num)
    for (i = 0; i < num ;i++) {
        var j = Math.floor(Math.random()*(to - from + 1)) + from
        if (j == selectedNum) {
            i--
            continue
        }
        array[i] = j
    }

    return array
}

function getRandomNonrepetitiveIntergersWithoutSelectedNum(from, to, num, selectedNum) {
    var array = new Array(num)
    F: for (i = 0; i < num ;i++) {
        var j = Math.floor(Math.random()*(to - from + 1)) + from
        if (j == selectedNum) {
            i--
            continue
        }
        for (k = 0; k < i; k++) {
            if (array[k] == j) {
                i--
                continue F
            }
        }
        array[i] = j
    }

    return array
}

function getRandomIntergersWithSelectedNum(from, to, num, selectedNum) {
    var array = new Array(num)
    var selectedNumIndex = getRandomIntergers(0, num - 1, 1)[0]
    array[selectedNumIndex] = selectedNum

    var nums = getRandomIntergersWithoutSelectedNum(from, to, num, selectedNum);

    for(i = 0; i < num; i++) {
        if (i != selectedNumIndex) {
            array[i] = nums[i]
        }
    }

    return array
}

function getRandomNonrepetitiveIntergersWithSelectedNum(from, to, num, selectedNum) {
    var array = new Array(num)
    var selectedNumIndex = getRandomIntergers(0, num - 1, 1)[0]
    array[selectedNumIndex] = selectedNum

    var nums = getRandomNonrepetitiveIntergersWithoutSelectedNum(from, to, num, selectedNum);

    for(i = 0; i < num; i++) {
        if (i != selectedNumIndex) {
            array[i] = nums[i]
        }
    }

    return array
}