import React, { useCallback, useState } from "react"
import { Button, Pressable, StyleSheet, View, Text, TextInput } from "react-native"
const NO_USERNAME = "Error, no username!"
const WRONG_PASSWORD = "Error, wrong password!"
const PASSWORD_DONTMATCH = "Error, passwords don't match!"

export default function LoginApp() {
    let [loggedIn, setLoggedIn] = useState(false)
    let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")
    let [username, setUsername] = useState("")
    let [signingUp, setSigningUp] = useState(false)
    let [error, setError] = useState(undefined)
    let doLogin = useCallback(() => {
        if (username === ""){
            setError(NO_USERNAME)
        } else {
        if (password === "Ch@rge!") {
            setLoggedIn(true)
        } else {
            setError(WRONG_PASSWORD)
        }
        }
    })
    return !loggedIn ?
        <>
            <Text style={styles.welcome}>{!signingUp ? "Please log in" : "Register below"}</Text>
            <TextInput autoFocus={true} value={username} onChangeText={text => setUsername(text)} placeholder="Username" style={styles.textinput}></TextInput>
            <TextInput value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} placeholder="Password" style={styles.textinput}></TextInput>
            {signingUp ? <TextInput autoFocus={true} value={confirmPassword}
             onChangeText={text => setConfirmPassword(text)}
             secureTextEntry={true} placeholder="Confirm Password" 
             style={styles.textinput}></TextInput> : undefined}
            <Text style={styles.error}>{error !== undefined ? error : ""}</Text>
            <View style={styles.buttons}>
            {!signingUp ? <>
                <Pressable style={styles.button} onPress={() => doLogin()}>
                <Text style={styles.text}>Login</Text>
            </Pressable><Pressable style={styles.button} onPress={() => setSigningUp(true)}>
                <Text style={styles.text}>Sign Up!</Text>
                </Pressable>
                </>
                 : <Pressable style={styles.button} onPress={() => { 
                     if (password === confirmPassword) {
                        setError(undefined)
                     setSigningUp(false)
                    } else {
                        setError(PASSWORD_DONTMATCH)
                    }
                }
                }>
                <Text style={styles.text}>Register</Text>
            </Pressable>}
            </View>         
        </>
        : <Text style={styles.welcome}>Welcome, {username}! </Text>
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    error: {
        color: "red",
        paddingVertical: 8
    },
    welcome: {
        fontSize: 24,
        paddingVertical: 12,
        lineHeight: 21,
        letterSpacing: 0.25,
    },
    buttons: {
        flex: 1,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    textinput: {
        fontSize: 20,
        width: 200,
        borderBottomColor: '#737373',
        borderBottomwidth: StyleSheet.hairlineWidth,
        padding: 5,
        margin: 5,
    },
});
