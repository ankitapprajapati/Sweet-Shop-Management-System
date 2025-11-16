import { useState } from "react";
import axios from "axios";
import { ShoppingCart, Package, Tag } from "lucide-react";

export default function SweetCard({ sweet, onChange }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handlePurchase = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BASEURL}/api/sweets/${sweet._id}/purchase`,
        { quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      onChange();
    } catch (error) {
      console.error("Purchase failed:", error);
    }
  };

  const isOutOfStock = sweet.quantity === 0;

  return (
    <article
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "1rem",
        background: "linear-gradient(145deg, hsl(0 0% 100%) 0%, hsl(35 100% 99%) 100%)",
        border: "1px solid hsl(35 20% 88%)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "280px",
        opacity: isOutOfStock ? 0.6 : 1,
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: isHovered 
          ? "0 8px 30px -6px hsl(25 95% 53% / 0.25)" 
          : "0 4px 20px -4px hsl(25 95% 53% / 0.15)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Accent Bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(135deg, hsl(25 95% 53%) 0%, hsl(35 100% 65%) 100%)",
        }}
      />

      {/* Out of Stock Badge */}
      {isOutOfStock && (
        <div style={{ position: "absolute", top: "1rem", right: "1rem", zIndex: 10 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.25rem",
              padding: "0.25rem 0.75rem",
              borderRadius: "9999px",
              background: "hsl(0 84.2% 60.2%)",
              color: "hsl(0 0% 100%)",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            <Package style={{ width: "0.75rem", height: "0.75rem" }} />
            Out of Stock
          </span>
        </div>
      )}

      {/* Card Content */}
      <div style={{ flex: 1, padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <h3
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
              fontWeight: 700,
              color: isHovered ? "hsl(25 95% 53%)" : "hsl(25 30% 15%)",
              lineHeight: 1.2,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              transition: "color 0.3s",
            }}
          >
            {sweet.name}
          </h3>

          {/* Category Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.375rem 0.75rem",
              borderRadius: "0.5rem",
              background: "hsl(35 20% 96% / 0.8)",
              border: "1px solid hsl(35 20% 88%)",
              width: "fit-content",
            }}
          >
            <Tag style={{ width: "0.875rem", height: "0.875rem", color: "hsl(25 15% 45%)" }} />
            <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "hsl(25 30% 15%)", textTransform: "capitalize" }}>
              {sweet.category}
            </span>
          </div>
        </div>

        {/* Details Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem", paddingTop: "0.5rem" }}>
          {/* Price */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              background: "hsl(35 15% 94% / 0.5)",
              border: "1px solid hsl(35 20% 88% / 0.5)",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                color: "hsl(25 15% 45%)",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Price
            </span>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem" }}>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, hsl(25 95% 53%) 0%, hsl(35 100% 65%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ₹{sweet.price}
              </span>
            </div>
          </div>

          {/* Quantity */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              background: "hsl(35 15% 94% / 0.5)",
              border: "1px solid hsl(35 20% 88% / 0.5)",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                color: "hsl(25 15% 45%)",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Available
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Package style={{ width: "1rem", height: "1rem", color: "hsl(25 15% 45%)" }} />
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: isOutOfStock ? "hsl(0 84.2% 60.2%)" : "hsl(25 30% 15%)",
                }}
              >
                {sweet.quantity}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div style={{ padding: "0 1.5rem 1.5rem" }}>
        <button
          disabled={isOutOfStock}
          onClick={handlePurchase}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          style={{
            width: "100%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            padding: "0.75rem 2rem",
            borderRadius: "0.375rem",
            fontSize: "0.875rem",
            fontWeight: 600,
            background: "linear-gradient(135deg, hsl(25 95% 53%) 0%, hsl(35 100% 65%) 100%)",
            color: "white",
            border: "none",
            cursor: isOutOfStock ? "not-allowed" : "pointer",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isButtonHovered && !isOutOfStock ? "scale(1.02)" : "scale(1)",
            boxShadow: isButtonHovered && !isOutOfStock
              ? "0 8px 30px -6px hsl(25 95% 53% / 0.25)"
              : "0 4px 20px -4px hsl(25 95% 53% / 0.15)",
            opacity: isOutOfStock ? 0.6 : 1,
          }}
        >
          <ShoppingCart style={{ width: "1.25rem", height: "1.25rem" }} />
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>

      {/* Hover Effect Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background: "linear-gradient(to bottom right, hsl(25 95% 53% / 0.05), transparent, hsl(35 90% 55% / 0.05))",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s",
          pointerEvents: "none",
        }}
      />
    </article>
  );
}
