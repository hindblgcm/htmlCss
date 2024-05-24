function endpage() {
    document.querySelector('#board').classList.add('animrideau')
    setTimeout(()=>{
        document.querySelector('#board').classList.remove('animrideau')
    },5000)
}