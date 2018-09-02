var imgs = {
    "bg" : loadImage('bg.png'),
    "bird" : loadImage('bird.png')
};



function getImageRes(key){
    return imgs[key];
}

function loadImage(path){
    var img = new Image();
    img.src = path;
    return img;
}
