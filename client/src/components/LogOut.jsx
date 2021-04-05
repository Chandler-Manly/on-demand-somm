import { useEffect } from "react";
import { logOut } from "../services/auth";
import { useHistory } from "react-router-dom";

const LogOut = (props) => {
  const { clearUser, currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    logOut(currentUser)
      .then(() => clearUser())
      .finally(() => history.push("/"));
  }, [history, clearUser, currentUser]);

  return "";
};

export default LogOut;
