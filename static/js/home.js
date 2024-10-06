function changeId($event){
    let id=document.getElementById('c3');
    let newId=document.getElementById($event);
    let box=document.getElementById('max');
    if ( newId.textContent=='Push Day'){
        box.style.backgroundImage="url('static/images/pexels-pixabay-416754.jpg')";
        document.getElementById('PPL').innerHTML='<p id="Title" class="anton-regular fs-1 text-info">Push day</p><p id="content" class="playwrite-de-grund text-light">Push day focuses on strengthening the muscles in your chest, shoulders, and triceps. Exercises like bench presses, overhead presses, and triceps extensions are common on this day. By targeting these muscle groups, you can build upper body strength and definition.</p>'
    }
    else if(newId.textContent=='Pull Day'){
        box.style.backgroundImage="url('static/images/pexels-victorfreitas-2261482.jpg')";
        document.getElementById('PPL').innerHTML='<p id="Title" class="anton-regular fs-1 text-info">Pull day</p><p id="content" class="playwrite-de-grund text-light">Pull day works the muscles in your back, biceps, and forearms. Exercises like pull-ups, lat pulldowns, and rows are essential for developing a strong and broad back. These muscles are crucial for overall strength and posture.'
    }
    else{
        box.style.backgroundImage="url('static/images/pexels-scottwebb-136404.jpg')";
        document.getElementById('PPL').innerHTML='<p id="Title" class="anton-regular fs-1 text-info">Leg day</p><p id="content" class="playwrite-de-grund text-light">Leg day is dedicated to strengthening your lower body muscles, including your quadriceps, hamstrings, glutes, and calves. Squats, lunges, and deadlifts are foundational exercises for building powerful legs. Strong legs are essential for everyday activities and can improve athletic performance.</p>'
    }
    let content= id.textContent;
    id.textContent=newId.textContent;
    newId.textContent= content;
}