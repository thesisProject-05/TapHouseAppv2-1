import * as React from "react";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableHighlight,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput as RNPTextInput } from "react-native-paper";

const WelcomeLoginHouseOwner = () => {
  const [rectangleTextInput, setRectangleTextInput] = useState("password");
  const navigation = useNavigation();

  return (
    <View style={styles.welcomeLoginHouseOwner}>
      <Text style={styles.welcomeBackText1}>
        <Text style={styles.welcomeBackText}>Welcome back</Text>
        <Text style={styles.text}>{` `}</Text>
      </Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../../../assets/homeOwner/Login/ellipse112.png")}
      />
      <Image
        style={styles.undrawSelectHouseReS1j91Icon}
        resizeMode="cover"
        source={require("../../../assets/homeOwner/Login/undrawSelect.png")}
      />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../../../assets/homeOwner/Login/vector2.png")}
      />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../../../assets/homeOwner/Login/vector2.png")}
      />
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../../assets/homeOwner/Login/vector2.png")}
        />
      </Pressable>
      <Text style={styles.forgetPasswordText}>Forget Password?</Text>
      <RNPTextInput
        style={styles.rectangleRNPTextInput}
        placeholder="Enter Your Password"
        mode="outlined"
        value={rectangleTextInput}
        onChangeText={setRectangleTextInput}
        theme={{ colors: { background: "#d9d9d9" } }}
      />
      <Image
        style={styles.eyePasswordIcon}
        resizeMode="cover"
        source={require("../../../assets/homeOwner/Login/eyePassword.png")}
      />
      <RNPTextInput
        style={styles.rectangleRNPTextInput1}
        placeholder="Enter Your Email"
        mode="outlined"
        theme={{ colors: { background: "#d9d9d9" } }}
      />
      <TouchableHighlight
        style={styles.rectangleTouchableHighlight}
        underlayColor="#fff"
        onPress={() => navigation.navigate("HomePageStudent")}
      >
        <View />
      </TouchableHighlight>
      <Text style={styles.buttonLoginText}>Login</Text>
      <View style={styles.groupView}>
        <Pressable
          style={styles.signupPressable}
          onPress={() => navigation.navigate("HouseOwnerRegister")}
        >
          <Text style={styles.signupText}>Signup</Text>
        </Pressable>
        <Text
          style={styles.dontHaveAnAccount}
        >{`Don’t have an account? `}</Text>
      </View>
      <View style={styles.lineView} />
      <View style={styles.lineView1} />
      <Text style={styles.orText}>Or</Text>
      <Pressable style={styles.rectanglePressable} onPress={() => {}} />
      <Text style={styles.loginWithFacebook}>Login with Facebook</Text>
      <Image
        style={styles.facebookLogoIcon}
        resizeMode="cover"
        source={require("../../../assets/homeOwner/Login/facebookLogo.png")}
      />
      <Pressable style={styles.rectanglePressable1} />
      <Text style={styles.loginWithGoogle}>Login with Google</Text>
      <Image
        style={styles.googleLogoIcon}
        resizeMode="cover"
        source={require("../../../assets/homeOwner/Login/googleLogo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeBackText: {
    fontSize: 24,
  },
  text: {
    fontSize: 20,
  },
  welcomeBackText1: {
    position: "absolute",
    top: 256,
    left: 115,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#696969",
    textAlign: "left",
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 119,
    height: 119,
    opacity: 0.3,
  },
  undrawSelectHouseReS1j91Icon: {
    position: "absolute",
    top: 69,
    left: 75,
    width: 227,
    height: 142,
    overflow: "hidden",
  },
  vectorIcon: {
    position: "absolute",
    height: "3.29%",
    width: "4.58%",
    top: "3.64%",
    right: "90.84%",
    bottom: "93.08%",
    left: "4.58%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon1: {
    position: "absolute",
    height: "3.29%",
    width: "4.58%",
    top: "3.64%",
    right: "90.84%",
    bottom: "93.08%",
    left: "4.58%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "4.58%",
    top: "3.64%",
    right: "90.84%",
    bottom: "93.08%",
    width: "4.58%",
    height: "3.29%",
  },
  forgetPasswordText: {
    position: "absolute",
    top: 443,
    left: 242,
    fontSize: 14,
    fontFamily: "Lato",
    color: "#0092bf",
    textAlign: "left",
  },
  rectangleRNPTextInput: {
    position: "absolute",
    top: 383,
    left: 39,
    borderRadius: 13,
    borderStyle: "solid",
    width: 312,
    height: 48,
  },
  eyePasswordIcon: {
    position: "absolute",
    top: 395,
    left: 310,
    width: 24,
    height: 24,
  },
  rectangleRNPTextInput1: {
    position: "absolute",
    top: 302.5,
    left: 39.5,
    borderRadius: 13,
    borderStyle: "solid",
    width: 313,
    height: 49,
  },
  rectangleTouchableHighlight: {
    position: "absolute",
    top: 491,
    left: 40,
    borderRadius: 5,
    backgroundColor: "#3f424a",
    width: 312,
    height: 48,
  },
  buttonLoginText: {
    position: "absolute",
    top: 506,
    left: 170,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "left",
  },
  signupText: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#2f89fc",
    textAlign: "left",
  },
  signupPressable: {
    position: "absolute",
    left: 179,
    top: 0,
  },
  dontHaveAnAccount: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 555,
    left: 75,
    width: 229,
    height: 21,
  },
  lineView: {
    position: "absolute",
    top: 589.5,
    left: 36.5,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderTopWidth: 1,
    width: 140,
    height: 1,
  },
  lineView1: {
    position: "absolute",
    top: 589.5,
    left: 208.5,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderTopWidth: 1,
    width: 140,
    height: 1,
  },
  orText: {
    position: "absolute",
    top: 579,
    left: 185,
    fontSize: 14,
    fontFamily: "Poppins",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  rectanglePressable: {
    position: "absolute",
    top: 612,
    left: 41,
    borderRadius: 10,
    backgroundColor: "#1877f2",
    width: 312,
    height: 48,
  },
  loginWithFacebook: {
    position: "absolute",
    top: 625,
    left: 131,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "left",
  },
  facebookLogoIcon: {
    position: "absolute",
    top: 620,
    left: 48,
    width: 26,
    height: 26,
  },
  rectanglePressable1: {
    position: "absolute",
    top: 672,
    left: 41,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.4)",
    borderWidth: 1,
    width: 312,
    height: 48,
  },
  loginWithGoogle: {
    position: "absolute",
    top: 685,
    left: 135,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "rgba(0, 0, 0, 0.6)",
    textAlign: "left",
  },
  googleLogoIcon: {
    position: "absolute",
    top: 684,
    left: 49,
    width: 26,
    height: 26,
  },
  welcomeLoginHouseOwner: {
    position: "relative",
    backgroundColor: "#dfe8ea",
    flex: 1,
    width: "100%",
    height: 852,
  },
});

export default WelcomeLoginHouseOwner;
