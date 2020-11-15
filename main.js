let abc_to_morse = {
    ' ':'||',
    'a':'._',
    'b':'_...',
    'c':'_._.',
    'd':'_..',
    'e':'.',
    'f':'..-.',
    'g':'__.',
    'h':'....',
    'i':'..',
    'j':'.___',
    'k':'_._',
    'l':'._..',
    'm':'__',
    'n':'_.',
    'o':'___',
    'p':'.__.',
    'q':'__._',
    'r':'._.',
    's':'...',
    't':'_',
    'u':'.._',
    'v':'..._',
    'w':'.__',
    'x':'_.._',
    'y':'_.__',
    'z':'__..'
};

let path_to_wordlist = "wordlists/all.txt";

function getText(){
    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', 'https://github.com/sintakticniSladkorcek/sintakticniSladkorcek.github.io/blob/main/wordlists/all.txt', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
}

let file_content = getText();
let all_words = file_content.split('\n');
for(var line = 0; line < 10; line++){
    console.log(all_words[line]);
}


function generiraj_besede() {
    console.log('Dela')
    let place_for_words = document.getElementById("zgenerirane_besede");
    place_for_words.innerHTML = "Your HTML here";
    if (place_for_words.style.display === "none") {
        place_for_words.style.display = "block";
    // } else {
    //     place_for_words.style.display = "none";
    }
    return "p1 * p2";
}

// let button = document.getElementById('generiraj_besede');
// button.addEventListener("click", generiraj_besede);