//fetch data and posting data in fake API

async function loadData()// async keyword is required for await
{
    try {

    var res = await fetch("https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            body:JSON.stringify({
                name:"raghul",
                age:20,
                email:"raghul@gmail.com"
            }),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
    });// it uses promises, so we used await
    var data = await res.json();
    console.log(data)
    } catch (error) {
        console.log("failed")
    }
}
loadData()




