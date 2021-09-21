function ageInDays(){
    event.preventDefault();
    let birthYear = document.getElementById('year').value;
    let dt= new Date();
    let ans = (dt.getFullYear() - birthYear)*365;
    let h1= document.createElement('h1');
    let answer = document.createTextNode( 'You are '+ ans +' days old !!');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(answer);
    document.getElementById('here').appendChild(h1);

    
    

}

function reset(){
    document.getElementById('here').remove();
}