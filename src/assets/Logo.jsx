export const Logo = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 400 250" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className} 
    >
   
      <text 
        x="50%" 
        y="45%" 
        dominantBaseline="middle" 
        textAnchor="middle" 
        fontFamily="sans-serif" 
        fontWeight="900" 
        fontStyle="italic" 
        fontSize="85" 
        fill="#B6FF00" 
        letterSpacing="-2"
      >
        DEMO
      </text>
      

      <text 
        x="50%" 
        y="85%" 
        dominantBaseline="middle" 
        textAnchor="middle" 
        fontFamily="sans-serif" 
        fontWeight="900" 
        fontStyle="italic" 
        fontSize="75" 
        fill="white" 
        letterSpacing="2"
      >
        GYM
      </text>
    </svg>
  );
};