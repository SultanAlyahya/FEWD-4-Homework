var imgs=["beagle.jpg","bunny.jpg","cat.jpg","iguana.jpg","pony.jpg"]

const displayImgs =()=>{
imgs.forEach((img)=>{
    var imgs = document.createElement('img')
    imgs.src =  
'./img/'+img

    var body=document.getElementById('body')
    body.appendChild(imgs)
   
})
}

var button=document.getElementById('button')
button.addEventListener('click',()=>displayImgs())
