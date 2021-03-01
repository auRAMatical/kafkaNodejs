const {Kafka} = require('kafkajs')
const Chance=require('chance')

const chance=new Chance()
const kafka=new Kafka({
    clientId:'rams-producer',
    brokers:['localhost:9092','localhost:9093','localhost:9094']   
})

const producer=kafka.producer()
console.log('Hi')

const createMsg=async()=>{
    console.log('Hi2')
    try{
    await producer.send({
        topic:'natural',
        messages:[{value:chance.address()}]
    })
}
catch(err){
    console.log(err)
}}

const run=async()=>{
    console.log('Hi3')
    await producer.connect()
    setInterval(createMsg,1000)
}

run().catch(console.log)
