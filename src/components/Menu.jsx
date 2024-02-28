import React from 'react';
import { MenuList } from '../menulist/List';
import style from '../styles/menu.module.css';

function Menu({handle}) {  

  return (
    <div id= {style.menu}>
      <section>
        {MenuList.map((x)=>{
          return(
            <div key={x.id} className={style.list}>
              <section>
                <img src={x.image} alt={x.name} />
              </section>
              <article>
                <h1 style={{fontSize:"20px"}} id={style.heading}>{x.name}</h1>
                <p>₹{x.price}</p>
                <button onClick={()=>{handle(x)}}>Add to cart</button>
              </article>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Menu

// import React from 'react';
// import { MenuList } from '../menulist/List';
// import style from '../styles/menu.module.css';

// function Menu({handle}) {  

//   return (
//     <div>
//         {MenuList.map((x)=>{
//           return(
//             <div key={x.id} id={style.menu}>
//               <aside>
//                   <section>
//                     <img src={x.image} alt={x.name} />
//                   </section>
//                   <article>
//                     <h1 style={{fontSize:"20px"}}>{x.name}</h1>
//                     <p>₹{x.price}</p>
//                     <button onClick={()=>{handle(x)}}>Add to cart</button>
//                   </article>
//               </aside>
//             </div>
//           )
//         })}
//     </div>
//   )
// }

// export default Menu
