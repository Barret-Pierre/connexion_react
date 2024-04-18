import { useEffect } from "react";

function AcountPage() {
  const user = localStorage.getItem("userEmail");
  useEffect(() => {
    console.log("Local", localStorage.getItem("userEmail"));
  }, []);
  return (
    <div>
      <p>Hello {user} !</p>
    </div>
  );
}
export default AcountPage;
