// จงสร้าง checkbox ขึ้นมา 3 อัน ให้แต่ละอันมี name คือ phone Brand
// เมื่อผู้ใช้ tick หรือ untick checkbox ให้ console.log
// - ค่า name ของ checkbox
// - ค่า value ของ checkbox
// - checkbox นั้นถูก tick หรือ untick

function App() {
  const handleChange = (event) => {
    console.log('name', event.target.name);
    console.log('value', event.target.value);
    console.log('tik', event.target.checked);
  };

  return (
    <>
      <label>Phone</label>
      <input type='checkbox' name='phone' onChange={handleChange} />

      <label>Brand</label>
      <input type='checkbox' name='brand' onChange={handleChange} />
    </>
  );
}

export default App;
