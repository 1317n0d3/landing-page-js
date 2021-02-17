function getMaxElem(){
    let arr = [
        this.el1.value,
        this.el2.value,
        this.el3.value,
        this.el4.value,
        this.el5.value
    ];

    console.log(Math.max.apply(null, arr));
}

function getMinElem(){
    let arr = [
        this.el1.value,
        this.el2.value,
        this.el3.value,
        this.el4.value,
        this.el5.value
    ];

    console.log(Math.min.apply(null, arr));
}