function isValidLink(url) {
    const domain = new RegExp("amazon")
    return domain.test(url)
}