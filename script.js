const p = document.querySelector("p")
const content = p.textContent
console.log(content);
p.textContent = ''

let count = 0
let interval = null

function typingText() {
    //   p.textContent = p.textContent + content.charAt(count)  
    p.textContent += content.charAt(count)  
    count++
    if (count === content.length) {
        clearInterval(interval)
        setTimeout(() => {
            p.textContent = ''
            count = 0            
            setIn()
        }, 3000);
    }
    console.log(count);  
} 
function setIn() {
    interval = setInterval(typingText, 30)    
}
setIn()
// typingText()
