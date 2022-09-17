const btn = document.getElementById('btn')
var isShowing = true;

btn.onclick = function() {
    const ul = document.getElementById('hide')
    // hide.style.display = 'none' ;
    if (isShowing) {
        hide.style.display = 'none';
        isShowing = false;

    }
    else{
        hide.style.display = 'block';
        isShowing = true;
    }

}




var bg = document.getElementById('bgc');

bg.onclick = function() {
    var x = Math. floor(Math. random() * 256);
    var y = Math. floor(Math. random() * 256);
    var z = Math. floor(Math. random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
}


add = document.querySelector("#add")
add.onclick = function(){
    input1 = document.getElementById('input1').value
    input2 = document.getElementById('input2').value

    const ans= parseInt('input1') + parseInt('input2');

    var p = document.getElementById('ans');
    p = ans;
}

