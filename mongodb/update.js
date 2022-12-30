const dbConnect = require('./mongodb')

const update = async () => {
    const data = await dbConnect()
    const result = await data.updateOne(
        {name:"note 5"},
        {$set:{brand:"realme"}}
    )

    if(result.acknowledged){
        console.log()
        console.log("DATA UPDATED")
    }
}

update()