git add .
git commit -m"L"
git push

    <div style={{ position: "relative", width: "250px" }}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        style={{ width: "100%", paddingRight: "30px", height: "35px" }}
      />
      
      {/* Eye Icon */}
      <span
        onClick={() => setShowPassword(!showPassword)}
        style={{
          position: "absolute",
          right: "5px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer"
        }}
      >
        {showPassword ? (
          // Eye Open SVG
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            
            
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-eye"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-eye"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        ) : (
          // Eye Closed SVG
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-eye-off"
          >
            <path d="M17.94 17.94A10.97 10.97 0 0 1 12 20c-7 0-11-8-11-8a21.12 21.12 0 0 1 5.06-5.94" />
            <path d="M1 1l22 22" />
            <path d="M9.88 9.88a3 3 0 0 0 4.24 4.24" />
          </svg>
        )}
      </span>
    </div>