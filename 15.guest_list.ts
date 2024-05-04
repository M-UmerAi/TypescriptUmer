

let Guest_list :string[] = ['Imran khan','Nawaz Sharif','Altaf hussain'];

for(let i=0; i<Guest_list.length; i++){
   console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in your party.\n\nThank you!\n\n')
}


let absent_Guest :string = 'imran khan' ;
let new_Guest :string = 'kamran tessori';

Guest_list[0] = new_Guest ;
for(let i=0; i<Guest_list.length; i++){
   console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in your party.\n\nThank you!\n\n')
}
console.log(` Mr.${absent_Guest} is not coming to the party.`);



