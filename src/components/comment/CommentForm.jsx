import { useState } from 'react';

const API_URL = 'http://localhost:3001/comments';

const CommentForm = ({ movieId = 1, onCommentAdded }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        text: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate
        if (!formData.name.trim() || !formData.text.trim()) {
            alert('Vui lòng nhập tên và nội dung bình luận!');
            return;
        }

        setIsSubmitting(true);

        const newComment = {
            movieId: movieId,
            user: formData.name,
            text: formData.text,
            date: new Date().toISOString()
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newComment)
            });
            
            if (!response.ok) {
                throw new Error('Không thể thêm bình luận');
            }

            const savedComment = await response.json();
            
            // Gọi callback để cập nhật UI
            if (onCommentAdded) {
                onCommentAdded(savedComment);
            }

            // Reset form
            setFormData({ name: '', email: '', text: '' });
            alert('Bình luận đã được thêm thành công!');
        } catch (err) {
            console.error('Error adding comment:', err);
            alert('Lỗi: ' + err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form 
            className="w-full border border-amber-50 p-4 text-white rounded-2xl"
            onSubmit={handleSubmit}
        >
            <h3 className="font-bold mb-3">Thêm bình luận</h3>
            <textarea 
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                placeholder="Để lại bình luận của bạn" 
                rows={6} 
                className="w-full p-3 border border-amber-50 rounded-[10px]"
                disabled={isSubmitting}
            />
            <div className="w-full flex justify-between items-center gap-4">
                <div className="w-[45%]">
                    <p className="mb-2 mt-3">Tên của bạn</p>
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tên của bạn" 
                        className="w-full px-3 py-2 border border-amber-50"
                        disabled={isSubmitting}
                    />
                </div>
                <div className="w-[45%]">
                    <p className="mb-2 mt-3">Email</p>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email của bạn (Không bắt buộc)" 
                        className="w-full px-3 py-2 border border-amber-50"
                        disabled={isSubmitting}
                    />
                </div>
            </div>
            <button 
                type="submit" 
                className="mt-4 px-3 py-2 capitalize border-none rounded-2xl font-bold bg-green-400 hover:bg-green-500 cursor-pointer mx-auto block disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Đang gửi...' : 'Gửi Bình luận'}
            </button>
        </form>
    )
}

export default CommentForm;