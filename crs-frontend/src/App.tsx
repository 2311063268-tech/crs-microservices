import { useEffect, useState } from 'react';
import { getCourses } from './api/courseApi';
import type { Course } from './types/course';

function App() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log("🚀 Bắt đầu gọi API...");
        console.log("Base URL:", import.meta.env.VITE_API_BASE_URL);

        getCourses()
            .then((res) => {
                console.log("✅ API thành công! Dữ liệu nhận được:", res.data);
                setCourses(res.data.content);
            })
            .catch((err) => {
                console.error("❌ Lỗi khi gọi API:", err);
                setError('Không kết nối được tới hệ thống. Kiểm tra lại api-gateway đã chạy chưa.');
            });
    }, []);

    return (
        <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
            <h1>Kiểm tra kết nối CRS qua Gateway</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <h3>Dữ liệu nhận được (Mảng rỗng [] nghĩa là chưa có môn học nào trong DB):</h3>
            <pre>{JSON.stringify(courses, null, 2)}</pre>
        </div>
    );
}

export default App;