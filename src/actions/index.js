export const  showData = (item) =>{
       return {
           type: "SHOW_DATA",
           payload : {
               id:new Date().getTime().toString(),
               item:item
           }
       }
}