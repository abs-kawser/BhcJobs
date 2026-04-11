import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { registerUser } from "../../api/auth/authApi";

const RegisterScreen = ({ navigation }) => {

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
    passport_number: "",
    dob: "",
    gender: "",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleRegister = async () => {
    const {
      name,
      phone,
      email,
      password,
      confirm_password,
      passport_number,
      dob,
      gender,
    } = form;

    if (
      !name || !phone || !email || !password ||
      !confirm_password || !passport_number || !dob || !gender
    ) {
      alert("All fields are required");
      return;
    }

    if (password !== confirm_password) {
      alert("Password does not match");
      return;
    }

    if (!checked) {
      alert("Accept terms & conditions");
      return;
    }

    try {
      setLoading(true);

      const res = await registerUser(form);

      console.log("REGISTER SUCCESS:", res);

      navigation.navigate("Verify", { phone });

    } catch (error) {
      alert(error.response?.data?.message || "Register failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>

        <Text style={styles.title}>Create an account</Text>

        <Text style={styles.label}>Full Name *</Text>
        <View style={styles.inputBox}>
          <Icon name="person-outline" size={18} color="#9AA0A6" />
          <TextInput
            placeholder="Enter your full name"
            placeholderTextColor="#9AA0A6"
            style={styles.input}
            onChangeText={(t) => handleChange("name", t)}
          />
        </View>

        <Text style={styles.label}>Mobile Number *</Text>
        <View style={styles.inputBox}>
          <Icon name="call-outline" size={18} color="#9AA0A6" />
          <TextInput
            placeholder="01XXXXXXXXX"
            placeholderTextColor="#9AA0A6"
            style={styles.input}
            keyboardType="phone-pad"
            onChangeText={(t) => handleChange("phone", t)}
          />
        </View>


        <Text style={styles.label}>Date of Birth *</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="YYYY-MM-DD"
            placeholderTextColor="#9AA0A6"
            style={styles.input}
            onChangeText={(t) => handleChange("dob", t)}
          />
        </View>


        <Text style={styles.label}>Passport No *</Text>
        <View style={styles.inputBox}>
          <Icon name="document-text-outline" size={18} color="#9AA0A6" />
          <TextInput
            placeholder="Enter passport number"
            placeholderTextColor="#9AA0A6"
            style={styles.input}
            onChangeText={(t) => handleChange("passport_number", t)}
          />
        </View>

        <Text style={styles.label}>Gender *</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="male / female"
            placeholderTextColor="#9AA0A6"
            style={styles.input}
            onChangeText={(t) => handleChange("gender", t)}
          />
        </View>

        <Text style={styles.label}>Email *</Text>
        <View style={styles.inputBox}>
          <Icon name="mail-outline" size={18} color="#9AA0A6" />
          <TextInput
            placeholder="Enter email"
            placeholderTextColor="#9AA0A6"
            style={styles.input}
            onChangeText={(t) => handleChange("email", t)}
          />
        </View>

        <Text style={styles.label}>Password *</Text>
        <View style={styles.inputBox}>
          <Icon name="lock-closed-outline" size={18} color="#9AA0A6" />
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#9AA0A6"
            secureTextEntry={!showPass}
            style={styles.input}
            onChangeText={(t) => handleChange("password", t)}
          />
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            <Icon name="eye-outline" size={18} color="#9AA0A6" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Confirm Password *</Text>
        <View style={styles.inputBox}>
          <Icon name="lock-closed-outline" size={18} color="#9AA0A6" />
          <TextInput
          placeholder="Enter Password"
            placeholderTextColor="#9AA0A6"
            secureTextEntry={!showConfirm}
            style={styles.input}
            onChangeText={(t) => handleChange("confirm_password", t)}
          />
          <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
            <Icon name="eye-outline" size={18} color="#9AA0A6" />
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxRow}>
          <TouchableOpacity onPress={() => setChecked(!checked)}>
            <View style={[styles.checkbox, checked && styles.checkedBox]}>
              {checked && <Icon name="checkmark" size={14} color="#fff" />}
            </View>
          </TouchableOpacity>

          <Text style={styles.checkboxText}>
            Agree to Terms & Privacy
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>SIGN UP</Text>
          )}
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F2F4F7",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
  },

  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#4A90E2",
    marginBottom: 15,
  },

  label: {
    fontSize: 13,
    marginBottom: 5,
    marginTop: 10,
    color: "#333",
  },

  req: {
    color: "red",
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
    color: "black"
  },

  placeholder: {
    color: "#0000",
    marginLeft: 8,
  },

  checkboxRow: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
  },

  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: "#4A90E2",
    borderRadius: 4,
    marginRight: 8,
  },

  checkedBox: {
    backgroundColor: "#4A90E2",
    justifyContent: "center",
    alignItems: "center",
  },

  checkboxText: {
    flex: 1,
    fontSize: 12,
    color: "#555",
  },

  link: {
    color: "#4A90E2",
  },

  button: {
    backgroundColor: "#4A90E2",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
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
    backgroundColor: "#ddd",
  },

  orText: {
    marginHorizontal: 10,
    color: "#999",
  },

  footer: {
    textAlign: "center",
    fontSize: 12,
  },
});

