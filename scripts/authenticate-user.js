import { enterHomeScreen } from "./index-ui.js";

const signInButton = document.getElementById("sign-in-button");

signInButton.addEventListener('click', handleSignIn);

function handleSignIn() {
    // TODO: Add sign in

    enterHomeScreen();
}