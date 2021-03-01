const {Kafka}=require('kafkajs')

const kafka=new Kafka({
    clientId:'rams-producers-consumer',
    brokers:['localhost:9092','localhost:9093','localhost:9094']
})

const consumer=kafka.consumer({groupId:'RAMS_PRODUCERS_CONSUMERGROUP'})

const run=async()=>{
    await consumer.connect()
    await consumer.subscribe({topic:'natural',fromBeginning:true})
    await consumer.run({
        eachMessage:async({topic,partition,message})=>{
            console.log(
                {   topic,
                    partition,
                    offset:message.offset,
                    value:message.value.toString()
                }
            )
        }
})
}

run().catch(console.log)