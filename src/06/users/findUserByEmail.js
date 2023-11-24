export const findUserByEmail = phrase => user => {
    if (!phrase) return true;

    return user.email.toLowerCase().includes(phrase.toLowerCase());
}

// To samo ze slowkiem function
function _findUserByEmail(phrase) {

    return function (user) {
        if (!phrase) return true;

        return user.email.toLowerCase().includes(phrase.toLowerCase());
    }
}