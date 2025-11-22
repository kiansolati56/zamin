function toPersianDigits(str) {
    return str.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹' [d])
}

export default {
    mounted(el) {
        if (typeof window !== 'undefined') {
            el.innerHTML = toPersianDigits(el.innerHTML)
        }
    },
    updated(el) {
        if (typeof window !== 'undefined') {
            el.innerHTML = toPersianDigits(el.innerHTML)
        }
    }
}