table.innerHTML += `<tr>
<td>${data[i].id}</td>
<td>${data[i].name}</td>
<td>${data[i].username}</td>
<td>${data[i].email}</td>
<td>${data[i].address.suite}
${data[i].address.street}
${data[i].address.city}</td>
<td>${data[i].phone}</td>
<td>${data[i].website}</td>
<td>${data[i].company.name}
${data[i].company.bs}
${data[i].company.catchPhrase}</td> 
</tr>`

