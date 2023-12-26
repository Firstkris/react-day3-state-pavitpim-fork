// จงสร้างลิงค์ <a> มีข้อความว่า “Google”
// เมื่อผู้ใช้ click link ให้ขึ้นคำถามว่า “Leave for https://google.com?”
// ถ้าผู้ใช้กด OK ให้ redirect ไปที่ https://google.com
// ถ้าผู้ใช้กด Cancel ให้ยกเลิก redirect ไปที่ https://google.com

function App() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log('Clicked');
    let userAnswer = window.confirm(`Leave for https://google.com?`);
    console.log(userAnswer);
    if (userAnswer === true) {
      window.location.replace('https://google.com');
    }
  };

  return (
    <a href='#' onClick={handleClick}>
      Google
    </a>
  );
}

export default App;
