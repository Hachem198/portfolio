import React from "react";

const FloatingBubbles = () => {
  return (
    <div className="relative w-96 h-96 mb-2">
      <div className="absolute w-96 h-96 rounded-full shadow-2xl top-10 overflow-hidden group ">
        <div
          className="relative w-full h-full transition-all duration-1200 transform group-hover:[transform:rotateX(180deg)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* front side */}
          <div
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-400  to-purple-600 "
            style={{ backfaceVisibility: "hidden" }}
          />

          {/* back side */}
          <div
            className="absolute inset-0 w-full h-full [transform:rotateX(180deg)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://images.unsplash.com/photo-1740031770947-f0e53f07b3e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Floating Bubble"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingBubbles;
