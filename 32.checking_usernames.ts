
let current_users: string[] = ['UmEr','DaNiyal','SalMan','Hamzah','John'];


let new_Users: string[] = ['Bilal','UmEr','Dawood','Jameel','Hamzah'];

new_Users.forEach(newUsername => {
   let lowerCase: string = newUsername.toLowerCase();

   if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
     console.log(`The username ${newUsername} is not available. please write a diffrent username`);
   }
   else {
        console.log(`The username ${newUsername} is available.`);
   }

 })






























