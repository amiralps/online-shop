import { useEffect } from "react";
import { changeTitle } from "../helper/helper";

function NotFound() {
  useEffect(() => {
    changeTitle("یافت نشد");
  }, []);
  return (
	<div>
		<h1>404</h1>
		<h3>Page NotFound</h3>
	</div>
  )
}
export default NotFound