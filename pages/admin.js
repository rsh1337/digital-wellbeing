import { Container } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import Login from '../components/Login'
export default function Signin(){
    const { data: session, status } = useSession();

    if (status === "unauthenticated") {
    return(
            <Login />
    )
    }
    if (status === "authentificated"){
        
    }
}