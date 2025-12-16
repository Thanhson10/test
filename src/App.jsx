// src/App.jsx
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Dữ liệu giả mô phỏng tin tức (Thường sẽ lấy từ API/Database)
  // Khởi tạo danh sách tin tức rỗng
  const [newsList, setNewsList] = useState([]);

  // Gọi API từ Backend khi web vừa tải xong
  useEffect(() => {
    fetch('https://backend-news-3im2.onrender.com/api/news')
      .then(response => response.json())
      .then(data => {
        console.log("Dữ liệu tải về:", data);
        setNewsList(data); // Cập nhật dữ liệu vào giao diện
      })
      .catch(error => console.error("Lỗi tải dữ liệu:", error));
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">Hello</div>
          <nav className="nav">
            <a href="#">Thời sự</a>
            <a href="#">Công nghệ</a>
            <a href="#">Kinh doanh</a>
            <a href="#">Giải trí</a>
          </nav>
        </div>
      </header>

      <main className="container">
        {/* Tin nổi bật nhất (Featured) */}
        <section className="featured-section">
          <div className="featured-card">
            <img 
              src="https://scr.vn/wp-content/uploads/2020/07/H%C3%ACnh-%E1%BA%A3nh-phong-c%E1%BA%A3nh-y%C3%AAn-b%C3%ACnh.jpg" 
              alt="Featured" 
              className="featured-image" 
            />
            <div className="featured-content">
              <span className="tag">Nóng hổi</span>
              <h1>Thiên nhiên đẹp</h1>
              <p>Nhìn kỹ thì chắc không có thật</p>
              <br/>
              <a href="#" className="read-more">Đọc tiếp →</a>
            </div>
          </div>
        </section>

        {/* Danh sách tin tức (News Grid) */}
        <h2>Tin mới cập nhật</h2>
        <br/>
        <div className="news-grid">
          {newsList.map((news) => (
            <article key={news.id} className="news-card">
              <img src={news.image} alt={news.title} className="card-image" />
              <div className="card-content">
                <div className="card-date">{news.date}</div>
                <h3 className="card-title">{news.title}</h3>
                <p>{news.summary}</p>
                <br/>
                <a href="#" className="read-more">Xem chi tiết</a>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 NEWS 24h. Được xây dựng bằng React & Vite.</p>
        </div>
      </footer>
    </div>
  )
}

export default App