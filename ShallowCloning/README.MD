<table>
    <tr>
        <th>Shallow cloning</th>
        <th>Deep cloning</th>
   </tr>

   <tr>
       <td>Copies the first level of the object.</td>
       <td>Copies all levels of the object.</td>
   </tr>

   <tr>
       <td>Nested objects are still references to the original object.</td>
       <td>Nested objects are also copied.</td>
   </tr>

   <tr>
       <td>We can use the spread operator to do shallow cloning.</td>
       <td>We can use the JSON.stringify() method to do deep cloning.</td>
   </tr>

   <tr>
       <td>for example: const Obj2 = { ...Obj1 };</td>
       <td>for example: const Obj2 = JSON.parse(JSON.stringify(Obj1));</td>
   </tr>

</table>