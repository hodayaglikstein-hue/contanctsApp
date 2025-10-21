function table(storageKey){
const Arr= getAllContacts(storageKey);
  if (!ArrJSON) {
    return [];
  }
  const ArrContent = JSON.parse(ArrJSON);
  console.log(newArr)
  return newArr
}  
        
        
//         <table>
//   <tr>
//     <th>Name</th>
//     <th>Family Name</th>
//     <th>Email</th>
//     <th>Phone Number</th>
//   </tr>
//   <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
// </table>