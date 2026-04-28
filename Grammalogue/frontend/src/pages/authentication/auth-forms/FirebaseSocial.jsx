import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { saveOrRetrieveUser } from "../../../services/userLogin";

// assets
import Google from "../../../assets/icons/google.svg";

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

export default function FirebaseSocial() {
  const navigate = useNavigate();

  // FirebaseSocial.jsx -> googleHandler function

  const googleHandler = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) {
        const { displayName, email, uid } = result.user;
        console.log(">>> [FRONTEND] Google Login Success:", email);

        const userPayload = {
          username: displayName,
          email: email,
          token: uid,
        };

        const user = await saveOrRetrieveUser(userPayload);
      
        if (user) {
          console.log(">>> [FRONTEND] User saved/retrieved from DB:", user);
          localStorage.setItem("token", user.token);
          // LOG 4: Check if the key 'currUser' is what your App expects
          localStorage.setItem("currUser", JSON.stringify(userPayload));
          console.log(">>> [FRONTEND] LocalStorage updated. Navigating to dashboard...");
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.error(">>> [FRONTEND] Google Sign-In Error:", error);
    }
  };

  return (
    <Stack
      direction="row"
      spacing={{ xs: 1, sm: 2 }}
      justifyContent="center"
      sx={{
        width: "100%",
      }}
    >
      <Button
        variant="outlined"
        startIcon={<img src={Google} alt="Google" />}
        onClick={googleHandler}
        sx={{
          width: "100%", // Make the button span the full width
          height: "56px", // Set a larger height for the button
          fontSize: "16px", // Larger font size
          textTransform: "none", // Prevent uppercase transformation
          backgroundColor: "#ffffff", // White background
          color: "#757575", // Grey text and icon color
          border: "1px solid #cccccc", // Light grey border
          "&:hover": {
            backgroundColor: "#f7f7f7", // Slightly darker white on hover
          },
        }}
      >
        Sign in with Google
      </Button>
    </Stack>
  );
}
