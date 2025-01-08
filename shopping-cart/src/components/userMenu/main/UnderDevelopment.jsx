export const UnderDevelopment = () => {
  return (
    <div className="under-development-container">
      <h1 className="under-development-title">🚧 Under Development 🚧</h1>
      <p className="under-development-message">
        The functionality you're looking for is currently being developed by our team. Stay tuned!
      </p>
      <div className="under-development-loader">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};
