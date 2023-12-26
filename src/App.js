// Lab2
// จงสร้าง tag <select> ซึ่งมีข้อมูลชื่อประเทศในรายการให้เลือก (ให้ลองใส่มา 5 ประเทศ)
// เมื่อผู้ใช้เลือกประเทศ ให้ console.log ค่าประเทศที่ถูกเลือก

function App() {
  // write your code
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option disabled>select country</option>
      <option value='TH'>thailand</option>
      <option value='SG'>singapore</option>
      <option value='LAO'>laos</option>
      <option value='MM'>myanmar</option>
      <option value='CN'>china</option>
    </select>
  );
}

export default App;
