
import React from 'react';

function FruitList() {
  const fruits = [
    { name: "Apple", image: "/images/apple.jpg" },
    { name: "Banana", image: "/images/banana.jpg" },
    { name: "Mango", image: "/images/mango.jpg" },
    { name: "Orange", image: "/images/orange.jpg" },
    { name: "Water Melon", image: "/images/Water Melon.jpg" }
  ];

  return (
    <div style={{
      background: "linear-gradient(135deg, #e0c3fc, #f9d5e5, #d4eaf7)",
      padding: "40px",
      minHeight: "100vh",
      width: "100%",
      color: "#443653"
    }}>

      <h2 style={{ marginBottom: "25px" }}>
        🍓 My Fruit List
      </h2>

      <div style={{
        backgroundColor: "rgba(255,255,255,0.65)",
        padding: "25px",
        borderRadius: "15px",
        width: "350px"
      }}>

        {fruits.map((fruit, index) => (
          <div key={index} style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "15px"
          }}>

            <img
              src={fruit.image}
              alt={fruit.name}
              style={{
                width: "65px",
                height: "65px",
                objectFit: "cover",
                borderRadius: "12px"
              }}
            />

            <span style={{
              fontSize: "18px",
              fontWeight: "bold"
            }}>
              {fruit.name}
            </span>

          </div>
        ))}

      </div>
    </div>
  );
}

function App() {
  return <FruitList />;
}

export default App;
