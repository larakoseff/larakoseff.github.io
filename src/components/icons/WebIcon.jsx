export default function WebIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.406 78.406" className="icon">
        <g transform="translate(-4 -4)">
          {[5.5, 5.5, 43.203, 55.771, 68.338, 18.068, 18.068, 55.771, 55.771, 55.771, 80.906, 80.906, 55.771, 43.203, 30.635, 18.068, 30.635, 30.635].map((x, i) => {
            const y = [18.068, 5.5, 5.5, 5.5, 5.5, 18.068, 30.635, 18.068, 30.635, 68.338, 68.338, 55.771, 43.203, 68.338, 68.339, 68.338, 55.771, 18.068][i];
            const rotate = i >= 9 ? " rotate(90)" : "";
            return (
              <rect
                key={i}
                width="12.568"
                height="12.568"
                transform={`translate(${x} ${y})${rotate}`}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            );
          })}
        </g>
      </svg>
    );
  }
  