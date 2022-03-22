document.querySelector('#signup-form .actions ul li:last-child a').onclick = function (){


    let arrInput = document.querySelectorAll('  #signup-form input, #signup-form select');
   
    let nguoiDung = {}; 
    for(let input of arrInput){
        let {id,value} = input;
        nguoiDung = {...nguoiDung,[id]:value}
    }
    
    let htmlNguoiDung ='';
    for(let key in nguoiDung){
        
        htmlNguoiDung +=`
            <tr>
                <th>${key}</th>
                <th>${nguoiDung[key]}</th>
            </tr>
                
        `
    }
    document.querySelector('tbody').innerHTML = htmlNguoiDung;
}