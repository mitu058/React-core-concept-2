
export default function User({user}){
    const {name, email} = user
    return(
        <div style={{border: '2px solid red', margin:'20px'}}>
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
        </div>
    )
}