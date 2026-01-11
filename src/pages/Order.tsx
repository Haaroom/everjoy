import { useState, useMemo } from "react";

export default function Order() {
  const prices: Record<string, number[]> = {
    dark: [59, 109, 179, 419, 787],
    white: [66, 114, 214, 492, 919],
    darkwhite: [59, 109, 204, 466, 819],
    fruitnut: [72, 123, 239, 559, 1049],
  };

  const quantities = ["50", "100", "200", "500", "1000"];

  const chocolateNames: Record<string, string> = {
    dark: "Dark Chocolate",
    white: "White Chocolate",
    darkwhite: "Dark & White Chocolate",
    fruitnut: "Fruit & Nut Chocolate",
  };

  const [chocolate, setChocolate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const price = useMemo(() => {
    if (!chocolate || !quantity) return null;
    const index = quantities.indexOf(quantity);
    return prices[chocolate][index];
  }, [chocolate, quantity]);

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!price) return;
    setConfirmed(true);
    setTimeout(() => {
      setChocolate("");
      setQuantity("");
      setConfirmed(false);
    }, 3000);
  };

  return (
    <>
      <main className="order-page">
        <div className="order-container">
          <div className="order-header">
            <h1>
              Order <span>EVERJOY</span>
            </h1>
            <p>Premium handcrafted chocolate delivery</p>
          </div>

          <form className="order-form" onSubmit={handlePurchase}>
            {/* Chocolate Type */}
            <div className="form-group">
              <label>Chocolate Type *</label>
              <select
                value={chocolate}
                onChange={(e) => {
                  setChocolate(e.target.value);
                  setConfirmed(false);
                }}
                required
              >
                <option value="">-- Select a chocolate type --</option>
                <option value="dark">Dark Chocolate</option>
                <option value="white">White Chocolate</option>
                <option value="darkwhite">Dark & White Chocolate</option>
                <option value="fruitnut">Fruit & Nut Chocolate</option>
              </select>
            </div>

            {/* Quantity */}
            <div className="form-group">
              <label>Quantity *</label>
              <select
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                  setConfirmed(false);
                }}
                required
              >
                <option value="">-- Select quantity --</option>
                {quantities.map((q) => (
                  <option key={q} value={q}>
                    {q === "1000" ? "1 kg" : `${q}g`}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Display */}
            <div className={`price-display ${price ? "active" : ""}`}>
              <div className="price-label">Total Price</div>
              <div className="price-amount">
                {price ? `₹${price}` : "--"}
              </div>
            </div>

            <button
              className="purchase-btn"
              disabled={!price}
              type="submit"
            >
              Purchase
            </button>

            {confirmed && price && (
              <div className="confirmation show">
                <div className="confirmation-header">Order Confirmed!</div>
                <div>
                  You purchased{" "}
                  <strong>{chocolateNames[chocolate]}</strong> of{" "}
                  <strong>
                    {quantity === "1000" ? "1 kg" : `${quantity}g`}
                  </strong>{" "}
                  for <strong>₹{price}</strong>.
                </div>
              </div>
            )}
          </form>

          <div className="tagline">
            Handcrafted goodness for every age
          </div>
        </div>
      </main>

      {/* PAGE-SCOPED STYLES */}
      <style>{`
        .order-page {
          min-height: 100vh;
          background: linear-gradient(135deg,#5D4037,#3E2723);
          display:flex;
          justify-content:center;
          align-items:center;
          padding:2rem;
        }

        .order-container {
          background:#FFF8E1;
          padding:3rem;
          border-radius:2rem;
          max-width:600px;
          width:100%;
          box-shadow:0 20px 60px rgba(0,0,0,.3);
        }

        .order-header h1 span {
          color:#D4AF37;
        }

        .order-form {
          display:flex;
          flex-direction:column;
          gap:1.5rem;
        }

        select {
          padding:.75rem;
          border-radius:.75rem;
          border:2px solid #D4AF37;
          font-size:1rem;
        }

        .price-display {
          opacity:0;
          transition:.3s;
          background:linear-gradient(135deg,#D4AF37,#C5A572);
          padding:1.5rem;
          border-radius:1rem;
          text-align:center;
        }

        .price-display.active {
          opacity:1;
        }

        .price-amount {
          font-size:2.5rem;
          font-weight:bold;
        }

        .purchase-btn {
          padding:1rem;
          border:none;
          border-radius:.75rem;
          font-weight:600;
          background:#D4AF37;
          cursor:pointer;
        }

        .purchase-btn:disabled {
          background:#ccc;
          cursor:not-allowed;
        }

        .confirmation {
          margin-top:1rem;
          background:#E8F5E9;
          border-left:4px solid #4CAF50;
          padding:1rem;
          border-radius:.75rem;
        }

        .tagline {
          text-align:center;
          margin-top:2rem;
          color:#5D4037;
          font-style:italic;
        }
      `}</style>
    </>
  );
}
