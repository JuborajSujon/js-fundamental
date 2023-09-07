function something(greet, name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        } else {
            return ''
        }
    }
    
    let mgs = greet + ' ' + getFirstName()
    console.log(mgs)
}

something('Good morning','Md Sujon' )