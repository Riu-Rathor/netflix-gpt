import NETFLIX_LOGO from "../../src/assets/Netflix_Logo_PMS.png";
import USER_ICON from "../assets/user-icon.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { toggleGptSearchView } from "../utils/slices/gptSlice";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();

  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img src={NETFLIX_LOGO} alt="logo" className="w-44" />

      <div className="flex items-center gap-2">
        <img src={user?.photoURL || USER_ICON} className="w-8 h-8" />
        <button className="py-2 px-4 bg-red-700 text-white rounded hover:bg-red-800" onClick={handleGptSearchClick}>GPT Search</button>
        
        <button
          className="bg-red-700 rounded py-2 px-4 text-white pl-2 pr-2 hover:bg-red-800"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
