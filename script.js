let greenProgressBar = document.getElementById("greenProgressBar");
        let counter = document.getElementById("counter");
        let btn = document.getElementById("start");
        let input = document.getElementById("delays");
        const form = document.getElementById('form');        
        
        form.addEventListener('submit', (e) => e.preventDefault());

        let width = 0;

        btn.addEventListener ("click", function getInterval() {

            let delaysArr = input.value.split(",");

            let delaysArrFiltered = delaysArr.filter((value, index)=>{
                return delaysArr.indexOf(value) === index;
            });

            let time = 0;
            for (let delay of delaysArrFiltered){

                time += delay*1000;
                let id = setTimeout(moveProgressBar, time); 

                function moveProgressBar() {
                    if (width >= 100) {
                     clearTimeout(id);
                  } else {   
                     width += 100/delaysArrFiltered.length;
                     greenProgressBar.style.width = width + '%'
                     counter.innerHTML = width.toFixed(2) * 1  + '%';
                 }
                } 
            }
        }
        )