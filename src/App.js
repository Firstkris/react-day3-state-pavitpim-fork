// จงสร้าง tag <input>
// เมื่อผู้ใช้พิมพ์ค่าลงใน <input> ให้ console.log(ค่าที่ผู้ใช้พิมพ์)

function App() {
  // handle fn
  const handleChange = (event) => console.log(event.target.value);

  // Render UI
  return <input onChange={handleChange} />;
}

export default App;
