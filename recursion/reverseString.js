// Using recursion to reverse a string

const revStr = (str) => {
    if (str === '') return '';
    return revStr(str.slice(1)) + str.charAt(0);
}

revStr('cba');