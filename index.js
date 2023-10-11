const fetchUserData = async () =>{
    try{
        const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await usersData.json();
        const result = data.map( user => {
            const {name, username, email, phone, website} = user;
            const address = user.address.street
            const company = user.company.name;
            return {name,username, email, address, phone, website, company};
        })
        console.table(result);

        const filterData = data.filter( user => {
            const filteredEmail = user.email.includes('.biz');
            return filteredEmail;
        });
        console.table(filterData);

        const sortedUser = data.map( user => user.name).sort();
        console.table(sortedUser);

    }catch (err){
        console.error(err);
    }
}

fetchUserData();