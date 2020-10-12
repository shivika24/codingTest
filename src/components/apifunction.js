import error from './messages';
const setElementById=(id,val)=>{
  document.getElementById(id).innerHTML=val;
}
const getById=id=>{
  return document.getElementById(id);
}

//to add solutions to db
export const apifetch=solution=>
{
    fetch("http://localhost:8080/api/solutions/addSolution", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(solution)
        })
      .then(res=> res.json())
        .then(res => {
          if(res.code===0)
          {
            getById("alert").style.display="block";
            window.scrollTo(0, 0);
          }
          else if(res.code===2)
          {       
            getById("alert").style.display="none";
            getById("b1").style.display="none";   
            getById("submitHead").style.display="block";
            window.scrollTo(0, 0);
          } 
          else if(res.code===2)
          {
            getById("alert").style.display="none";
            getById("submitHead").style.display="none";
            setElementById("modal-body",error.ERROR_OCCURED);
          }          
        })
}

//to get questions from db
export const getQuestions=()=>
{
  let arr = [];
    fetch("http://localhost:8080/api/solutions/getQuestions", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
        })
      .then(res=> res.json())
        .then(res => {
          arr.push(res.questions) 
          return arr;      
        })      
}
