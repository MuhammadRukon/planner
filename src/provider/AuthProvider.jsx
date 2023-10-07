import { createContext } from "react";
import PropTypes from "prop-types";

const AuthProvider = ({ children }) => {
  const AuthContext = createContext(null);

  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
