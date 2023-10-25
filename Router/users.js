const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');


let users = [
    {
        firstName:"sunny",
        lastName:"pandey",
        age:21
    },
    {
        firstName:"shivam",
        lastName:"seth",
        age:22
    }
]


router.get('/',(req,res)=>{
res.send(users)
});


// now let's add the functionalities of add user from the frontend
// router.post();

router.post('/',(req,res)=>{
    const newUserData = req.body;
    users.push( {...newUserData , id:uuidv4()});
    res.send(`user with the name ${newUserData.firstName} is added`)
});



//search user by id 

router.get('/:id',(req,res)=>{
const { id } = req.params;
console.log(id);
// lets find out the user with the same id 
const username = users.find((user)=>{ 
    return user.id === id;
 });

res.send(username);

});


// now lets delete the user by his id 

router.delete('/:id',(req,res)=>{
    const {id} = req.params;

    users = users.filter((user)=>{
        return user.id != id;
    });
    res.send(users);
});


// now last route is we have  to change the user Detail using the patch route 

router.patch('/:id',(req,res)=>{
    const { id } = req.params;

    let user = users.find((newUser) => {
        return newUser.id === id;
    });

    // now send the data from post request which you want to update 
    // let's say's some data is sent from any user to update the data 
    const {firstName,lastName,age} = req.body;

    if(firstName){
        user.firstName=firstName;
    }
    if(lastName){
        user.lastName=lastName;
    }
    if(age){
        user.age=age;
    }

})

module.exports=router;
