function getMaxElem(){
    let arr = [
        this.el1.value,
        this.el2.value,
        this.el3.value,
        this.el4.value,
        this.el5.value
    ];
    
    let maxElem = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maxElem){
            maxElem = arr[i];
        }
    }

    console.log(maxElem);
}

function getMinElem(){
    let arr = [
        this.el1.value,
        this.el2.value,
        this.el3.value,
        this.el4.value,
        this.el5.value
    ];
    
    let minElem = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < minElem){
            minElem = arr[i];
        }
    }

    console.log(minElem);
}