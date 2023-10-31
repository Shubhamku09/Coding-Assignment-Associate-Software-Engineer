function reverseWords(sentence) {
    const words = sentence.split(/\s+/);
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });
    return reversedWords.join(' ');
}
const input = "This is a sunny day";
const reversedSentence = reverseWords(input);
console.log("Reversed Sentence:", reversedSentence);
