import { useContext } from "react";
import { authContext } from "../../router";

export function useAuth() {
    return useContext(authContext);
}

