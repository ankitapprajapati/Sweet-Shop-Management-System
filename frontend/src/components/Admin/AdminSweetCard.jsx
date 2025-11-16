import { useState } from "react";
import axios from "axios";
import { Package, Tag, IndianRupee, Trash2, Zap } from "lucide-react";

// NOTE: Since the reference component used inline styles extensively,
// this component will also use inline styles for consistency with the requested style.

export default function AdminSweetCard({ sweet, onChange }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // State for button hovers (optional, but consistent with the reference design)
  const [isDeleteHovered, setIsDeleteHovered] = useState(false);
  const [isRestockHovered, setIsRestockHovered] = useState(false);

  // --- API Handlers with Error Handling ---

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BASEURL}/api/sweets/${sweet._id}`, // Adjusted URL to match common practice, removed double /api/
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      onChange(); // Refresh list after successful deletion
    } catch (error) {
      console.error("Deletion failed:", error);
    }
  };

  const handleRestock = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BASEURL}/api/sweets/${sweet._id}/restock`,
        { quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      onChange(); // Refresh list after successful restock
    } catch (error) {
      console.error("Restock failed:", error);
    }
  };

  const isOutOfStock = sweet.quantity === 0;

  // --- Style Variables for Consistency and Readability ---

  const PRIMARY_COLOR = "hsl(220 70% 50%)"; // A deep admin-friendly blue
  const PRIMARY_GRADIENT = "linear-gradient(135deg, hsl(220 80% 60%) 0%, hsl(200 90% 70%) 100%)";
  const DANGER_COLOR = "hsl(0 80% 60%)"; // Red for delete action

  return (
    <article
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "1rem",
        background: "linear-gradient(145deg, hsl(0 0% 100%) 0%, hsl(210 20% 98%) 100%)",
        border: "1px solid hsl(210 20% 88%)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "280px",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: isHovered 
          ? `0 8px 30px -6px ${PRIMARY_COLOR}25` // Blue shadow on hover
          : `0 4px 20px -4px ${PRIMARY_COLOR}15`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Accent Bar (Admin Blue) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: PRIMARY_GRADIENT,
        }}
      />

      {/* Card Content */}
      <div style={{ flex: 1, padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        
        {/* Header (Sweet Name) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <h3
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
              fontWeight: 700,
              color: isHovered ? PRIMARY_COLOR : "hsl(210 30% 15%)",
              lineHeight: 1.2,
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
              background: "hsl(210 20% 96% / 0.8)",
              border: "1px solid hsl(210 20% 88%)",
              width: "fit-content",
            }}
          >
            <Tag style={{ width: "0.875rem", height: "0.875rem", color: "hsl(210 15% 45%)" }} />
            <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "hsl(210 30% 15%)", textTransform: "capitalize" }}>
              {sweet.category}
            </span>
          </div>
        </div>

        {/* Details Grid (Price & Quantity) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem", paddingTop: "0.5rem" }}>
          
          {/* Price */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              background: "hsl(210 15% 94% / 0.5)",
              border: "1px solid hsl(210 20% 88% / 0.5)",
            }}
          >
            <span style={{ fontSize: "0.75rem", color: "hsl(210 15% 45%)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Price
            </span>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem" }}>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  background: PRIMARY_GRADIENT,
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
              background: isOutOfStock ? "hsl(0 80% 96% / 0.5)" : "hsl(120 15% 94% / 0.5)",
              border: isOutOfStock ? "1px solid hsl(0 80% 88% / 0.5)" : "1px solid hsl(120 20% 88% / 0.5)",
            }}
          >
            <span style={{ fontSize: "0.75rem", color: "hsl(210 15% 45%)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              In Stock
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Package style={{ width: "1rem", height: "1rem", color: isOutOfStock ? DANGER_COLOR : "hsl(120 30% 40%)" }} />
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: isOutOfStock ? DANGER_COLOR : "hsl(210 30% 15%)",
                }}
              >
                {sweet.quantity}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Action Buttons (Side-by-Side) */}
      <div style={{ padding: "0 1.5rem 1.5rem", display: "flex", gap: "0.75rem" }}>
        
        {/* Delete Button (Red/Danger) */}
        <button
          onClick={handleDelete}
          onMouseEnter={() => setIsDeleteHovered(true)}
          onMouseLeave={() => setIsDeleteHovered(false)}
          style={{
            flex: 1,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            padding: "0.75rem 1rem",
            borderRadius: "0.375rem",
            fontSize: "0.875rem",
            fontWeight: 600,
            background: DANGER_COLOR,
            color: "white",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isDeleteHovered ? "scale(1.02)" : "scale(1)",
            boxShadow: isDeleteHovered 
              ? `0 8px 30px -6px ${DANGER_COLOR}25` 
              : `0 4px 20px -4px ${DANGER_COLOR}15`,
          }}
        >
          <Trash2 style={{ width: "1.1rem", height: "1.1rem" }} />
          Delete
        </button>

        {/* Restock Button (Primary/Action) */}
        <button
          onClick={handleRestock}
          onMouseEnter={() => setIsRestockHovered(true)}
          onMouseLeave={() => setIsRestockHovered(false)}
          style={{
            flex: 1,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            padding: "0.75rem 1rem",
            borderRadius: "0.375rem",
            fontSize: "0.875rem",
            fontWeight: 600,
            background: PRIMARY_GRADIENT,
            color: "white",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: isRestockHovered ? "scale(1.02)" : "scale(1)",
            boxShadow: isRestockHovered 
              ? `0 8px 30px -6px ${PRIMARY_COLOR}25` 
              : `0 4px 20px -4px ${PRIMARY_COLOR}15`,
          }}
        >
          <Zap style={{ width: "1.1rem", height: "1.1rem" }} />
          Restock (1)
        </button>
      </div>

      {/* Hover Effect Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background: `linear-gradient(to bottom right, ${PRIMARY_COLOR}05, transparent, ${PRIMARY_COLOR}05)`,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s",
          pointerEvents: "none",
        }}
      />
    </article>
  );
}