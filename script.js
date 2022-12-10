

const removeWords = [ "a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your", "ain't", "aren't", "can't", "could've", "couldn't", "didn't", "doesn't", "don't", "hasn't", "he'd", "he'll", "he's", "how'd", "how'll", "how's", "i'd", "i'll", "i'm", "i've", "isn't", "it's", "might've", "mightn't", "must've", "mustn't", "shan't", "she'd", "she'll", "she's", "should've", "shouldn't", "that'll", "that's", "there's", "they'd", "they'll", "they're", "they've", "wasn't", "we'd", "we'll", "we're", "weren't", "what'd", "what's", "when'd", "when'll", "when's", "where'd", "where'll", "where's", "who'd", "who'll", "who's", "why'd", "why'll", "why's", "won't", "would've", "wouldn't", "you'd", "you'll", "you're", "you've" ];

let books = document.getElementsByClassName('book');
for (let i = 0; i < books.length; i++) {
    books[i].addEventListener('click', function() {
        let booktitle = '<h1>' + books[i].innerText  +'</h1>';
        // alert(booktitle);
        document.getElementsByClassName('texttop').innerHTML = booktitle;
        let bookname = books[i].id + '.txt';
        fetch(bookname, {mode: 'no-cors'})
        .then(response => response.text())
        .then((data) => {
            let bookcontent = document.getElementsByClassName('bookcontent')[0];
            bookcontent.innerText = data;
            checkContent(data);
            findMaxFreq();
            findMinFreq();
            docStatus();
        })
        .catch(error => console.error(error));
    })
}



function checkContent(data) {
    const countOccurrences = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
    let arr = data.split(" ");
    // countOccurrences()
    const getFrequency = (array) => {
        const map = {};
        array.forEach(item => {
            if (!removeWords.includes(item)) {
                if(map[item]){
                    map[item]++;
                 }else{
                    map[item] = 1;
                 }
            }
           
        });
        return map;
     };
    // let freq = getFrequency(arr);
    // let map1 = new Map([...freq.entries()].sort((a, b) => b[0] - a[0]));
    // let map2 = new Map([...freq.entries()].sort());

    // console.log(map1);
    // console.log(map2);
}

function findMaxFreq() {
    let maxbox = document.getElementsByClassName('maxcontent')[0];

}

function findMinFreq() {
    
}

function docStatus() {

    let bookcontent = document.getElementsByClassName('bookcontent')[0];
    let doclength = bookcontent.innerText.length;
    let wordlength = bookcontent.innerText.split(" ").length;
    let doccontent = document.getElementsByClassName('doccontent')[0];
    doccontent.innerHTML = "";
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    div1.innerText = "Document Length : "+ doclength;
    div2.innerText = "Word Length : " + wordlength;
    doccontent.appendChild(div1);
    doccontent.appendChild(div2);
}
