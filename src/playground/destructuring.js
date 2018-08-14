const challenge = {

    title: "Ego is the enemy",
    äuthor : "Ryan Holiday",
    publisher: {
        name : "Penguin",
    }
}

const {name:publisherName = "Self-published"} = challenge.publisher

console.log(publisherName)

const address = ["1299 South Juniper Street","Philadelphia","Pennsylvania","19147"]

const [street,city,state,zip] = address;


const item = ["coffee(hot)","2.00","2.50","3"]

const [coffee, ,medium] = item

console.log(`A medium ${coffee} costs ${medium}`)