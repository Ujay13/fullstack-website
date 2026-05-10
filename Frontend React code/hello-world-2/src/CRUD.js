import { useState } from "react";

function CRUD() {
    var [items, setitem] = useState (
        [
        { id : 1, name : "John" },
        { id : 2, name : "David" },
        { id : 3, name :"William" }
        ]
    );

    var [inputitem, setputitem] = useState('');

    function inputchanger(event) {
        setputitem(event.target.value);
    };

    function recreate(event) {
        event.preventDefault();
        var d = items.length+1;
        var newid = {
            id: d,
            name:inputitem
        }
        setitem([...items,newid]);
        setputitem("");
    }

    function itemdelete(id) {
        const deleteitem = items.filter((item) => item.id!== id);
        setitem(deleteitem);
    }

    

return (

    <div><br></br>
<center>
        <form onSubmit={recreate}>

            <label>Enter a Name </label> {""}
            <input type="text"value={inputitem} onChange={inputchanger} ></input> {""} {""}
            <button className="btn btn-success"  type="submit" >Add</button>

        </form>    

</center> <br></br>
    <div className="container">

        <table className="table table-bordered table-dark">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Action</th>
            </tr>


            {items.map(item =>(
            
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><button className="btn btn-primary" >Edit</button> {""}
                <button className="btn btn-danger" onClick = {() => itemdelete(item.id)} >Delete</button></td>
            </tr>
        ))}

        </table>   

        
    </div>
    </div>
); 
}

export default CRUD;