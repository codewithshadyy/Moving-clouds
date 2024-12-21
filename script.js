const elements = document.getElementsByClassName("cloud")

const element = elements[0];
element.style.top = '80px';
element.style.left = '120px';
//this is the code that set random positionto the cloud

element.style.top = (Math.random() * 100) + '%'
element.style.left = (Math.random() * 100) + '%'

element.style.transform = "scale(.3)"

element.style.transform = (Math.random() * .7) + .3;

element.style.left = '200px'
element.style.top = '200px'
element.style.transform = "scale(0.5)"
element.style.transition = 'all linear 3s'

let x = 0;
setInterval(() => {
    if(x % 2 === 0) {
        element.style.left = "100%"
    } else{
    element.style.left = "-50%"
    }
    x += 1
    element.style.transition = '6s'

}, 3000)

setTimeout(() => {
    if(x % 2 === 0) {
        element.style.left = '100%'
    }else{
        element.style.left = '-50%'
    }

}, 100)



const container = document.getElementById('container')

function createCloud() {
    const cloud = document.createElement('div')
    cloud.classList.add('cloud')

    const cloudBubble1 = document.createElement('div')
    cloudBubble1.classList.add('cloudBubble1')


    const cloudBubble2 = document.createElement('div')
    cloudBubble2.classList.add('cloudBubble2')


    cloud.appendChild(cloudBubble1);
    cloud.appendChild(cloudBubble2);


//set random position
    cloud.style.top =(Math.random() * 80) + '%'
    cloud.style.left = (Math.random() * 80) + '%'
    cloud.style.transform = `scale(${(Math.random() * 0.7)  + 0.3})`
    //add initial transition
    cloud.style.transition = 'all linear 6s'


    container.appendChild(cloud)

    //move the cloud back and forth

    let m = 0;
    setInterval(() =>{
        if(m % 2 === 0){
            cloud.style.left = "100%"

        }else{
            cloud.style.left = '-50%'
        }

    }, 3000)


}
for(let i = 0; i < 44; i++){
    createCloud()
}