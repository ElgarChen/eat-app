import { useState } from 'react';

function App() {
  const foodList = [
    '雞 🐔',
    '牛肉麵 🍜',
    '魚 🐟',
    '鐵板燒 🍖',
    '鍋 🍲',
    '義大利麵 🍝',
    '肉 🥩',
    '牡丹樓 🍔',
    '拉麵 🍥',
    '早餐 🥪',
    '嘗試新店家 ⁉️',
    '便利商店 🏪',
  ];

  const [todayFood, setTodayFood] = useState('');

  const decideFood = () => {
    const randomIndex = Math.floor(Math.random() * foodList.length);
    setTodayFood(foodList[randomIndex]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem', fontFamily: 'sans-serif' }}>
      <h1>🤔 今天到吃什麼？</h1>
      <button
        onClick={decideFood}
        style={{
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          borderRadius: '10px',
          backgroundColor: '#ff6b81',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          marginTop: '1rem',
        }}
      >
        幫我決定！！
      </button>
      {todayFood && (
        <h2 style={{ marginTop: '2rem', color: '#2f3542' }}>
          今天吃：<span style={{ fontWeight: 'bold' }}>{todayFood}</span>
        </h2>
      )}
    </div>
  );
}

export default App;
