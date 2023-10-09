const fetchUserData = async () =>{
    try{
        const arrOfRes = [];
        const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await usersData.json();
        const result = await data.map( user => {
            const {name, username, email, phone, website} = user;
            const address = user.address.street
            const company = user.company.name;
            arrOfRes.push(name,username, email, address, phone, website, company);
        })
        console.table(arrOfRes);

        const arrOfBizEmail = [];
        const filterData = data.filter( user => {
            const filteredEmail = user.email.split('.');
            filteredEmail.includes('biz') ? arrOfBizEmail.push(user.email) : null;
        })
        console.table(arrOfBizEmail);

        const arrOfsortedUser = [];
        const sortedUser = data.map( user => arrOfsortedUser.push(user.name));

        console.log(arrOfsortedUser.sort())

    }catch (err){
        console.error(err);
    }
}

fetchUserData();