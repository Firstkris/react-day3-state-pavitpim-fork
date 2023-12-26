/*********************************
 ************* EX-1 ***************
 *********************************/

// Function Component => render UI
// function App() {
//   // ### Handler FN => ฟังก์ชันที่ใช้จัดการ event ต่างๆ

//   // const handleClick = () => alert('ว่าไง User');
//   const handleClick = function () {
//     alert('ว่าไง User');
//     return true;
//   };

//   // Binding Fn เข้ากับ UI
//   // return <button onClick={handleClick()}>Click Me</button>; ❌
//   return <button onClick={handleClick}>Click Me</button>; //✅
// }

/*********************************
 ************* EX-2 ***************
 *********************************/

// function App() {
//   // ### Handler FN => ฟังก์ชันที่ใช้จัดการ event ต่างๆ
//   const handleChange = (event) => {
//     // console.log('User typing...');
//     // console.log(event, typeof event);
//     // console.log(event.target); // จุดเกิดเหตุ (event นี้เกิดขึ้นที่ tag ไหน)
//     console.log(event.target.name,event.target.value);
//   };
//   const handleFocus = () => {
//     console.log('User focusing on input tag');
//   };

//   const handleBlur = () => {
//     console.log('User focusing on another tag');
//   };
//   // Binding Fn เข้ากับ UI
//   return (
//     <>
//       <input
//       type='email'
//       name="email"
//       placeholder='example@gmail.com'
//       onChange={handleChange}
//       onFocus={handleFocus}
//       onBlur={handleBlur}
//       />
//         <input
//       type="password"
//       name="password"
//       placeholder='your password'
//       onChange={handleChange}
//       onFocus={handleFocus}
//       onBlur={handleBlur}
//       />

//     </>
//   );
// }

/*********************************
 ************* EX-3 ***************
 *********************************/

// function App() {
//   // handler fn
//   const handleCheck = (event) => {
//     console.log('User Select', event.target.name, event.target.checked);
//   };
//   return (
//     <>
//       <label htmlFor='is-admin'>
//         Admin
//       </label>
//       <input
//         type='checkbox'
//         id='is-admin'
//         name='admin'
//         onChange={handleCheck}
//       />
//       <label htmlFor='is-user'>User</label>
//       <input
//         type='checkbox'
//         id='is-user'
//         name="user"
//         onChange={handleCheck}
//       />
//     </>
//   );
// }
/*********************************
 ******** EX-4 : Radio *********
 *********************************/
// function App() {
//   // handler fn
//   const handleCheck = (event) => {
//     console.log('User Select', event.target.name, event.target.checked);
//   };
//   return (
//     <>
//       <label htmlFor='is-admin'>Admin</label>
//       <input type='radio' id='is-admin' name='role' onChange={handleCheck} />
//       <label htmlFor='is-user'>User</label>
//       <input type='radio' id='is-user' name='role' onChange={handleCheck} />
//     </>
//   );
// }

/*********************************
 ******** EX-5 : Select *********
 *********************************/
function App() {
  // Handler FN
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const handleHover = () => {
    console.log('Hover');
  };
  return (
    <>
      <select onChange={handleChange}>
        <option disabled>กรุณาเลือก</option>
        <option value='thailand'>THAILAND</option>
        <option value='usa'>USA</option>
        <option value='uk'>UK</option>
      </select>
      <input type='range' onChange={handleChange} min={1000} max={2000} />
      <input type='date' onChange={handleChange} onMouseEnter={handleHover} />
    </>
  );
}

export default App;

/*
#### 1 Element , Component (สร้าง UI)

# Element 
const el = React.createElement("h1",null,"Hi")
const el = <h1>Hi</h1>

# Component
function MyComponent() {
  return <h1>Hi</h1>
}

fn ทั่วไป : Component()
fn component : <Component/>

#### 2 Props : ส่ง input ให้ component (สร้าง Reusable UI)

fn ทั่วไป : Component({name:"John"})
fn component : <Component name="John" />

#### 3 Event Handler (สร้าง Interactive UI)

*/
