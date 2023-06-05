// TASK1
function mySetTimeout(delay){
    const res = new Promise ((resolve, reject)=>{
        if(Math.random()> 0.1){
            resolve('TRUE')
        }else{
            reject('FALSE')
        }
    })
}