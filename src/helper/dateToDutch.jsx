const longOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
};

function dateToDutch(date) {
    return new Date(date).toLocaleDateString('nl-NL', longOptions);
}

export default dateToDutch;