import { useNavigate } from "react-router-dom";

export const Navigation = (url) => {
  const navigate = useNavigate();

  return navigate(url);
};
