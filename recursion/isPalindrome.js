// Using recursion to determine whether our value is a palindrome

const pal = (str) => {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return pal(str.slice(1, -1));
}

pal('eve')