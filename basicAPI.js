// const student = {
//     name: 'Sopna',
//     age: 21
// }
// console.log(student);


// const dataStringify = JSON.stringify(student)
// console.log(dataStringify);
// // console.log(2, '2');
// console.log(JSON.parse(dataStringify));












































fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(datas => {
        console.log(datas)
        for ( const data of datas){
            console.log('Person name',data.name);
            console.log('Company name',data.company.name);

        }
    
    
    })