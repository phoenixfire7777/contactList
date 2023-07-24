export default function selectedContactId({ setSelectedContactId, contact }){
    return (
        <div>
            <h1>Contact Information</h1>
            <p>Name{contact.name}</p>
            <p>phone{contact.phone}</p>
            <p>email{contact.email}</p>
            <p>address{contact.address}</p>
            <p>company{contact.company}</p>
            <p>username{contact.username}</p>
            <p>website{contact.website}</p>
        </div>
    )
}