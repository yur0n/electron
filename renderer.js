function one() {
    window.open('https://developer.mozilla.org/en-US/docs/Web/API/Window/open', "_self", "HOHO")
    if (!document.getElementById("hoho").innerHTML) {
        document.getElementById("hoho").innerHTML = +(0)
        console.log('wtf')
    } else { 
        console.log(document.getElementById("hoho").innerHTML) 
    }
    document.getElementById("hoho").innerHTML += 1
}

document.getElementById("demo").addEventListener('click', one)