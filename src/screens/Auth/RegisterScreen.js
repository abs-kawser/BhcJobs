import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const RegisterScreen = () => {

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [checked, setChecked] = useState(true);

  return (
    
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.card}>

        {/* TITLE */}
        <Text style={styles.title}>Create an account</Text>

        {/* FULL NAME */}
        <Text style={styles.label}>Full Name <Text style={styles.req}>*</Text></Text>
        <View style={styles.inputBox}>
          <Icon name="person-outline" size={18} color="#9AA0A6" />
          <TextInput placeholder="Enter your full name" style={styles.input} />
        </View>

        {/* MOBILE */}
        <Text style={styles.label}>Mobile Number <Text style={styles.req}>*</Text></Text>
        <View style={styles.inputBox}>
          <Icon name="call-outline" size={18} color="#9AA0A6" />
          <TextInput placeholder="01XXXXXXXXX" style={styles.input} />
        </View>

        {/* DOB */}
        <Text style={styles.label}>Date of Birth <Text style={styles.req}>*</Text></Text>
        <View style={styles.inputBox}>
          <Text style={styles.placeholder}>Select Date</Text>
        </View>

        {/* PASSPORT */}
        <Text style={styles.label}>Passport No <Text style={styles.req}>*</Text></Text>
        <View style={styles.inputBox}>
          <Icon name="document-text-outline" size={18} color="#9AA0A6" />
          <TextInput placeholder="Enter your passport number" style={styles.input} />
        </View>

        {/* GENDER */}
        <Text style={styles.label}>Gender <Text style={styles.req}>*</Text></Text>
        <View style={styles.inputBox}>
          <Icon name="person-outline" size={18} color="#9AA0A6" />
          <Text style={styles.placeholder}>Select gender</Text>
        </View>

        {/* EMAIL */}
        <Text style={styles.label}>Email Address <Text style={styles.req}>*</Text></Text>
        <View style={styles.inputBox}>
          <Icon name="mail-outline" size={18} color="#9AA0A6" />
          <TextInput placeholder="Enter your email address" style={styles.input} />
        </View>

        {/* PASSWORD */}
        <Text style={styles.label}>Password <Text style={styles.req}>*</Text></Text>
        <View style={styles.inputBox}>
          <Icon name="lock-closed-outline" size={18} color="#9AA0A6" />
          <TextInput
            placeholder="Enter your new password"
            secureTextEntry={!showPass}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            <Icon name="eye-outline" size={18} color="#9AA0A6" />
          </TouchableOpacity>
        </View>

        {/* CONFIRM PASSWORD */}
        <Text style={styles.label}>Confirm Password <Text style={styles.req}>*</Text></Text>
        <View style={styles.inputBox}>
          <Icon name="lock-closed-outline" size={18} color="#9AA0A6" />
          <TextInput
            placeholder="Enter your new password"
            secureTextEntry={!showConfirm}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
            <Icon name="eye-outline" size={18} color="#9AA0A6" />
          </TouchableOpacity>
        </View>

        {/* CHECKBOX */}
        <View style={styles.checkboxRow}>
          <TouchableOpacity onPress={() => setChecked(!checked)}>
            <View style={[styles.checkbox, checked && styles.checkedBox]}>
              {checked && <Icon name="checkmark" size={14} color="#fff" />}
            </View>
          </TouchableOpacity>

          <Text style={styles.checkboxText}>
            By continuing, you agree to our{" "}
            <Text style={styles.link}>Terms of Service</Text> and{" "}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>

        {/* BUTTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

        {/* OR */}
        <View style={styles.orRow}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* LOGIN */}
        <Text style={styles.footer}>
          Already have an account?{" "}
          <Text style={styles.link}>Sign In</Text>
        </Text>

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
  },

  placeholder: {
    color: "#9AA0A6",
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