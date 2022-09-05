    fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then( data => {
        // console.log(data);

        // let author = data.results;
        // console.log(author)

        let output = "<h2><center>Get User Data</center></h2>";

        data.results.forEach(function (lists) {
            output += `
                <div class="container col-lg-3 col-md-6 col-sm-12" >
                    <div class="card mt-4 bg-light" >
                        <li class="list-group-item "><img src="${lists.picture.medium}</li>
                        <ul class="list-group" >
                        <li class="list-group-item "><h2>Name: ${lists.name.first }</h2></li>
                        <li class="list-group-item ">Phone Number: ${lists.cell }</li>
                        <li class="list-group-item ">DOB: ${lists.dob.date }</li>
                        <li class="list-group-item ">Age: ${lists.dob.age }</li>
                        <li class="list-group-item ">Email: ${lists.email }</li>
                        <li class="list-group-item ">Gender: ${lists.gender }</li>
                        <li class="list-group-item ">City: ${lists.location.city }</li>
                        <li class="list-group-item ">Country: ${lists.location.country }</li>
                        <li class="list-group-item ">PostCode: ${lists.location.postcode }</li>
                        </ul>
                    </div>
                    
                </div> `;
        })
        document.getElementById('output').innerHTML = output;
    })
