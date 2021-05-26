import React,{useState,useEffect} from 'react'


export default function FunHome() {

   const [state, setState] = useState();
   const [image, setImage] = useState([]);


//    const countTo = () =>{
//         setState(state+1);
//    }
   
//    const Apicall =() =>{
//     fetch(
//         "https://api.unsplash.com/photos?page=1&per_page=10&order_by=latest&client_id=8e31e45f4a0e8959d456ba2914723451b8262337f75bcea2e04ae535491df16d"
//       ).then((resq) => {
//         resq.json().then((result) => {
//           console.log(result);
//           setImage(result);
//         });
//       })
//    }
 
   useEffect(()=>{
  

        fetch('https://hn.algolia.com/api/v1/search?query=redux').
        then((resqq)=>{
            resqq.json().then((ress)=>{
                // console.log(ress.hits)
                // setImage(ress)
                setState(ress.hits);
            })
        })
    // Apicall();

    // navigator.geolocation.getCurrentPosition(function(position) {
    //     console.log(position)
    //   });
   })
console.log(state);
    return (

        <>
            {/* <h1>{state}</h1> */}

            {/* <button onClick={countTo} className="btn">Add Count</button> */}
        </>
    )
}
