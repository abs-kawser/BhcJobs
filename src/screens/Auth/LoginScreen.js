import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { loginUser } from "../../api/auth/authApi";
import AppHeader from "../../components/AppHeader/AppHeader";

const LoginScreen = ({ navigation, route }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [phone, setPhone] = useState(route?.params?.phone || "");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!phone || !password) {
      alert("Enter phone & password");
      return;
    }

    try {
      setLoading(true);

      const res = await loginUser({
        phone,
        password,
      });

      console.log("LOGIN SUCCESS:", res);

      navigation.navigate("Main");

    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <AppHeader title="Sign Up" navigateTo="Register" />

      <View style={styles.container}>
        <View style={styles.card}>

          {/* HEADER */}
          <View style={styles.header}>
            <View style={styles.iconCircle}>
              <Icon name="people-outline" size={22} color="#4A90E2" />
            </View>
            <Text style={styles.title}>Job Seeker Login</Text>
          </View>

          {/* MOBILE */}
          <Text style={styles.label}>Mobile Number</Text>
          <View style={styles.inputBox}>
            <Icon name="call-outline" size={18} color="#8A8A8A" />
            <TextInput
              placeholder="01XXXXXXXXX"
              placeholderTextColor="#B0B0B0"
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
          </View>

          {/* PASSWORD */}
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputBox}>
            <Icon name="lock-closed-outline" size={18} color="#8A8A8A" />
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#B0B0B0"
              secureTextEntry={!showPassword}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={18}
                color="#8A8A8A"
              />
            </TouchableOpacity>
          </View>

          {/* FORGOT */}
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Your Password?</Text>
          </TouchableOpacity>

          {/* BUTTON */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>LOG IN</Text>
            )}
          </TouchableOpacity>

          {/* OR */}
          <View style={styles.orRow}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>

          {/* FOOTER */}
          <Text style={styles.footerText}>
            New to BhcJobs.com?{" "}
            <Text
              style={styles.create}
              onPress={() => navigation.navigate("Register")}
            >
              Create an account
            </Text>
          </Text>

        </View>
      </View>
    </>
  );
};

export default LoginScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F7",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EAF2FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4A90E2",
  },

  label: {
    fontSize: 13,
    color: "#555",
    marginBottom: 6,
    marginTop: 10,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
    backgroundColor: "#FAFAFA",
  },

  input: {
    flex: 1,
    marginLeft: 8,
    color: "#000",
  },

  forgot: {
    textAlign: "right",
    color: "#4A90E2",
    fontSize: 12,
    marginTop: 6,
  },

  button: {
    backgroundColor: "#4A90E2",
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },

  orRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },

  orText: {
    marginHorizontal: 10,
    fontSize: 12,
    color: "#999",
  },

  footerText: {
    textAlign: "center",
    fontSize: 12,
    color: "#555",
  },

  create: {
    color: "#4A90E2",
    fontWeight: "600",
  },
});


