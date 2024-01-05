/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component: any) => {
  function Wrapper(props: any) {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    return <Component navigate={navigate} location={location} params={id} {...props} />;
  }
  return Wrapper;
};

export default withRouter;
