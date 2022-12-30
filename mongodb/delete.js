const dbConnect = require('./mongodb')

const Delete = async () => {
    const data = await dbConnect()
    const result = await data.deleteMany({name:"note 5"})

    // console.log(result)

    if(result.acknowledged){
        if(!result.deletedCount){
            console.log()
            console.log("No DATA Found")
        }
        else{
            console.log()
            console.log("DATA DELETED")
        }
    }
}

Delete()