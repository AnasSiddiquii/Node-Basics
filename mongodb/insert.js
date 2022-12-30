const dbConnect = require('./mongodb')

const insert = async () =>{
    const data = await dbConnect()
    const result = await data.insert([
        {name:"note 6",brand:"mi",price:"320",type:"mobile"},
        {name:"note 7",brand:"mi",price:"350",type:"mobile"},
        {name:"note 8",brand:"mi",price:"380",type:"mobile"}
    ])

    if(result.acknowledged){
        console.log()
        console.log("DATA INSERTED")
    }
}

insert()