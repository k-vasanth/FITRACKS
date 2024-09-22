const coll=document.getElementById('checkbox');
coll.addEventListener('change', function(){
    if(this.checked){
        // console.log('hello');
        document.getElementById("Sidebar").id='sidebar';
        setTimeout(function(){
            document.getElementById("nav1").innerText="Home";
            document.getElementById("nav2").innerText="Exercises";
            document.getElementById("nav3").innerText="Workout Routines";
        }, 620);
    }
    else{
        // console.log('bye');
        document.getElementById("sidebar").id='Sidebar';
        document.getElementById("nav1").innerHTML="";
        document.getElementById("nav2").innerHTML="";
        document.getElementById("nav3").innerHTML="";
    }
})