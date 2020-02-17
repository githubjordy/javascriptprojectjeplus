// de class die ik gebruik
document.getElementById("ShowRooster").addEventListener("click",
 ()=>{document.getElementById("ToonRooster").style.display="block";
    document.getElementById("ShowRooster").style.display="none";
});


class Person{
    constructor(aantalurengewerkt, vrijedagen,naam) {
        this.aantalurengewerkt = aantalurengewerkt;
        this.vrijedagen = vrijedagen;
        this.naam=naam;
      }
}



// maak personeel
let person1 = new Person(0,["Maandag","Dinsdag"],"Jordy");
let person2 = new Person(0,["Maandag","Vrijdag"],"Tom");
let person3 = new Person(0,["Woensdag","Donderdag"],"Anthon");
let person4 = new Person(0,["Vrijdag","Woensdag"],"Piet");
let person5 = new Person(0,["Maandag","Donderdag"],"Sjaak");




//maak een personeelarray
let personeelarray =new Array(person1,person2,person3,person4,person5);
//maak een array van alle werkdagen
let dagenarray = new Array("Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag");

//doe voor alle dagen

dagenarray.forEach(dagrooster);



// voor alle dagen functie
function dagrooster(dag, index){
    console.log(dag);
 

    //maak een rooster voor de dag
    let personenbeschikbaararray=new Array();  
   

    
   


    personeelarray.forEach(Checkbeschikbaarheid);



    //functie dagrooster
    function Checkbeschikbaarheid(person) {
        //debugger keyword is handig voor debugging
        let Ispersoonvrij=person.vrijedagen.includes(dag);
        
       
        //let personenbeschikbaararray=new Array();        
        
       // console.log(person.naam); 

        
        // als persoon niet vrij is, voeg toe aan beschikbaar personeel
        if(!Ispersoonvrij){
            
            personenbeschikbaararray.push(person);
        }

        //voor al het personeel dat beschikbaar is
       
    }



        console.log(personenbeschikbaararray);


       personenbeschikbaararray.sort(sortarray);  

       function sortarray(person,person2){
           let vergelijking=0;
           if(person.aantalurengewerkt< person2.aantalurengewerkt){
               vergelijking =-1;
           }
           else if(person.aantalurengewerkt>person2.aantalurengewerkt){
               vergelijking =1;
           }
           return vergelijking;
       }

       //console.log(personenbeschikbaararray[0].aantalurengewerkt);
       //console.log(personenbeschikbaararray[1].aantalurengewerkt);
       //console.log(personenbeschikbaararray[2].aantalurengewerkt);
       //console.log(personenbeschikbaararray[3].aantalurengewerkt);

       let selectstring =`.roostertable tr:nth-child(${index+1}) td:nth-child(2)`;

       if(personenbeschikbaararray.length<3){
           //te weinig beschikbaar personeel voor de dag
           document.querySelector(selectstring).innerHTML= `te weinig mensen beschikbaar: ${personenbeschikbaararray.length} beschikbaar, 3 nodig` ;
            
           return;

       }
       
       let mensendiemoetenwerken=personenbeschikbaararray.slice(0, 3);
       mensendiemoetenwerken.forEach((persoon)=>persoon.aantalurengewerkt=persoon.aantalurengewerkt+8);
      

       mensendiemoetenwerkenstring =`${mensendiemoetenwerken[0].naam},${mensendiemoetenwerken[1].naam},${mensendiemoetenwerken[2].naam}`;
       
      
      
       
       // document.getElementById("demo").innerHTML = mensendiemoetenwerken;


         

        document.querySelector(selectstring).innerHTML=mensendiemoetenwerkenstring;
        //console.log(element.innerHTML);
        //console.log(selectstring);
        
        
        
       

       

       
       


      }

      let resultaatstring="";
    
      personeelarray.forEach((person)=>{resultaatstring+= `naam: ${person.naam} - uren: ${person.aantalurengewerkt} </br>`});

      document.getElementById("result").innerHTML=resultaatstring;


