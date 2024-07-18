function getRandomIntergers(from, to, num) {
    var array = new Array(num)
    for (i = 0; i < num ;i++) {
        array[i] = Math.floor(Math.random()*(to - from)) + from
    }

    return array
}

function getRandomNonrepetitiveIntergers(from, to, num) {
    var array = new Array(num)
    for (i = 0; i < num ;i++) {
        var j = Math.floor(Math.random()*(to - from)) + from
    }

    return array
}

function getRandomIntergers(from, to, num) {
    var array = new Array(num)
    for (i = 0; i < num ;i++) {
        array[i] = Math.floor(Math.random()*(to - from)) + from
    }

    return array
}

function getRandomIntergersWithoutSelectedNum(from, to, num, selectedNum) {
    var array = new Array(num)
    for (i = 0; i < num ;) {
        var n = Math.floor(Math.random()*(to - from)) + from
        if (n != selectedNum) {
            array[i] = n
            i++
        }
    }

    return array
}

function getRandomIntergersWithSelectedNum(from, to, num, selectedNum) {
    var array = new Array(num)
    var selectedNumIndex = getRandomIntergers(0, num - 1, 1)
    array[selectedNumIndex] = selectedNum

    var nums = getRandomIntergersWithoutSelectedNum(from, to, num, selectedNum);

    for(i = 0; i < num; i++) {
        if (i != selectedNumIndex) {
            array[i] = nums[i]
        }
    }

    return array
}