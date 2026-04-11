
import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  StatusBar
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import AppHeader from '../../components/AppHeader/AppHeader';
import HomeHeroSection from "../../components/HomeHeroSection/HomeHeroSection";
import Footer from '../../components/Footer/Footer';


//APIS
import { getIndustries } from '../../api/industry/industryApi';
import { getJobs } from '../../api/jobApi/jobApi';
import { getCompanies } from '../../api/company/companyApi';
import Fontisto from "react-native-vector-icons/Fontisto";

import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Ionicons from "react-native-vector-icons/Ionicons";
import { KeyboardAvoidingView, Platform } from 'react-native';



const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
const insets = useSafeAreaInsets();

  const [industries, setIndustries] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState([]);

  const [loading, setLoading] = useState(true);

  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [showAllCompanies, setShowAllCompanies] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const SAR_TO_BDT = 33;

  const convertToBDT = (amount) => {
    if (!amount) return null;
    return (amount * SAR_TO_BDT).toLocaleString();
  };




  //  SINGLE API CALL (OPTIMIZED)
  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [industryRes, jobRes, companyRes] = await Promise.all([
        getIndustries(),
        getJobs(),
        getCompanies(),
      ]);

      setIndustries(industryRes);

      const jobList = jobRes?.data?.data || jobRes?.data || [];
      setJobs(jobList);

      setCompanies(companyRes);

    } catch (error) {
      console.log("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  //  DISPLAY CONTROL
  const displayedIndustries = showAllIndustries ? industries : industries.slice(0, 4);
  const displayedJobs = showAllJobs ? jobs : jobs.slice(0, 4);
  const displayedCompanies = showAllCompanies ? companies : companies.slice(0, 4);


  const renderIndustry = ({ item }) => {
    const imageUrl = `https://api.bhcjobs.com/storage/industry-image/${item.image}`;

    return (

      <View style={styles.card}>

        <Image
          source={{ uri: imageUrl }}
          style={{ width: 40, height: 40 }}
          resizeMode="contain"
        />

        <Text
          style={styles.cardTitle}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.name}
        </Text>

        <Text style={styles.cardSub}>
          {item.jobs_count} Available Jobs
        </Text>
      </View>
    );
  };








  //  JOB CARD
  const JobCard = ({ item }) => {
    const logoUrl = item.company?.image
      ? `https://api.bhcjobs.com/storage/company-image/${item.company.image}`
      : null;

    return (
      <View style={styles.jobCard}>

        {/* <View style={styles.jobHeader}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.jobTitle}>{item.job_title}</Text>
          </View>
          <Text style={styles.star}>☆</Text>
        </View> */}

        <View style={styles.jobHeader}>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text
              style={styles.jobTitle}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {item.job_title}
            </Text>
          </View>

          <Text style={styles.star}>☆</Text>

        </View>

        <View style={styles.companyRow}>
          {logoUrl ? (
            <Image source={{ uri: logoUrl }} style={styles.logoCircle} />
          ) : (
            <View style={styles.logoCircle}>
              <Text>{item.company_name?.charAt(0)}</Text>
            </View>
          )}
          <Text style={styles.companyName}>{item.company_name}</Text>
        </View>

        <View style={styles.salaryBox}>
          <Text style={styles.salaryText}>
            Salary: {item.currency} {item.min_salary}
            {item.min_salary && (
              ` (BDT ${convertToBDT(item.min_salary)} approx.)`
            )}
          </Text>

          {item.food_amount ? (
            <Text style={styles.salaryText}>
              Food Allowance: {item.currency} {item.food_amount}
              {` (BDT ${convertToBDT(item.food_amount)} approx.)`}
            </Text>
          ) : null}
        </View>

        {/* <View style={styles.tagRow}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{item.type?.toUpperCase()}</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>
              {item.country?.name?.toUpperCase()}
            </Text>
          </View>
        </View> */}

        <View style={styles.tagRow}>

          <View style={styles.tag}>
            <FontAwesome6 name="briefcase" size={12} color="#4A90E2" />
            <Text style={styles.tagText}>
              {" "}{item.type?.toUpperCase()}
            </Text>
          </View>

          <View style={styles.tag}>
            <Ionicons name="location-sharp" size={12} color="#4A90E2" />
            <Text style={styles.tagText}>
              {" "}{item.country?.name?.toUpperCase()}
            </Text>
          </View>

        </View>


        <View style={styles.deadlineRow}>
          <Fontisto name="clock" size={14} color="red" />

          <Text style={styles.deadlineText}>
            {" "}Application Deadline:{" "}
            {new Date(item.expiry).toDateString()}
          </Text>
        </View>

        <View style={styles.buttonRow}>

          <TouchableOpacity style={styles.viewBtn}>
            <Text style={styles.viewText}>View</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.applyBtn}
            onPress={() => setShowLoginModal(true)}
          >
            <Text style={styles.applyText}

            >Apply Now</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  };

  //  COMPANY CARD
  const renderCompany = ({ item }) => {
    const logoUrl = `https://api.bhcjobs.com/storage/company-image/${item.image}`;

    return (
      <View style={styles.companyCard}>
        <Image source={{ uri: logoUrl }} style={styles.companyLogo} />
        <Text style={styles.companyTitle} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.companySub}>
          {item.jobs_count} Available Jobs
        </Text>
      </View>
    );
  };

  return (
    <>
     <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <AppHeader />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={20}
      >
        <ScrollView showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            // paddingBottom: 20, 
          }}
          keyboardShouldPersistTaps="handled"
        >
          <HomeHeroSection />

          {/* INDUSTRIES */}
          <View style={styles.section}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Popular Industries</Text>
            </View>

            {loading ? (
              <ActivityIndicator color="#4A90E2" />
            ) : (
              <FlatList
                data={displayedIndustries}
                numColumns={2}
                renderItem={renderIndustry}
                keyExtractor={(item) => item.id.toString()}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                scrollEnabled={false}
              />
            )}

            <Text style={styles.toggleBtn} onPress={() => setShowAllIndustries(!showAllIndustries)}>
              {showAllIndustries ? "▲" : "▼"}
            </Text>
          </View>

          {/* JOBS */}
          <View style={styles.section}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Recommended Jobs</Text>
            </View>

            {loading ? (
              <ActivityIndicator color="#4A90E2" />
            ) : (
              <FlatList
                data={displayedJobs}
                renderItem={({ item }) => <JobCard item={item} />}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={false}
              />
            )}

            <Text style={styles.toggleBtn} onPress={() => setShowAllJobs(!showAllJobs)}>
              {showAllJobs ? "▲" : "▼"}
            </Text>
          </View>

          {/* COMPANIES */}
          <View style={styles.section}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Popular Companies</Text>
            </View>

            {loading ? (
              <ActivityIndicator color="#4A90E2" />
            ) : (
              <FlatList
                data={displayedCompanies}
                numColumns={2}
                renderItem={renderCompany}
                keyExtractor={(item) => item.id.toString()}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                scrollEnabled={false}
              />
            )}

            <Text style={styles.toggleBtn} onPress={() => setShowAllCompanies(!showAllCompanies)}>
              {showAllCompanies ? "▲" : "▼"}
            </Text>
          </View>
          <View style={{ height: 20 }} />
          <Footer />
        </ScrollView>
      </KeyboardAvoidingView>


      <Modal
        visible={showLoginModal}
        transparent
        animationType="fade"
      >
        <View style={styles.modalOverlay}>

          <View style={styles.modalContainer}>

            {/* Close Button */}
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setShowLoginModal(false)}
            >
              <Ionicons name="close" size={18} color="#4A90E2" />
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.modalTitle}>
              Please log in First
            </Text>

            {/* Subtitle */}
            <Text style={styles.modalSub}>
              You must be logged in to apply for this job.
            </Text>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginBtn}
              onPress={() => {
                setShowLoginModal(false);
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.loginText}>Go to Login</Text>
            </TouchableOpacity>

            {/* Cancel Button */}
            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={() => setShowLoginModal(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

          </View>

        </View>
      </Modal>
    </>
  );
};

export default HomeScreen;

// ============= STYLES ================= \\
const styles = StyleSheet.create({

  container: {
    paddingHorizontal: 16,
    marginTop: 20,
  },

  section: {
    paddingHorizontal: 16,
    marginTop: 30,
  },

  titleWrapper: {
    alignSelf: 'center',
    backgroundColor: '#E9EEF5',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 15,
  },

  title: {
    fontSize: 14,
    fontWeight: '600',
  },

  loaderWrapper: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // INDUSTRY
  card: {
    width: (width - 48) / 2,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
  },

  cardTitle: {
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'center',
  },

  cardSub: {
    fontSize: 12,
    color: '#888',
  },

  // JOB
  jobCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: '#4A90E2',
    marginBottom: 15,
  },

  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // jobTitle: {
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   fontFamily: "Poppins-Bold",
  //   textAlign: 'center',
  //   flex: 1,
  // },

  jobTitle: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: "Poppins-Bold",
    textAlign: 'center',
    paddingHorizontal: 10,
    lineHeight: 20,
  },

  star: {
    color: '#4A90E2',
    fontSize: 25,
  },

  companyRow: {
    flexDirection: 'row',
    // marginTop: 10,
    alignItems: 'center',
  },



  logoCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    elevation: 3,
  },

  companyName: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "bold",
  },

  salaryBox: {
    backgroundColor: '#EAF2FF',
    padding: 15,
    borderRadius: 8,
    marginTop: 18,
  },

  salaryText: {
    fontSize: 12,
    fontFamily: "system-ui",
    fontWeight: "bold"
  },

  tagRow: {
    flexDirection: 'row',
    marginTop: 15,
  },

  // tag: {
  //   backgroundColor: '#F0F3F7',
  //   paddingHorizontal: 10,
  //   paddingVertical: 4,
  //   borderRadius: 6,
  //   marginRight: 8,
  // }, 

  tag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#F0F3F7',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    marginRight: 8,
  },

  tagText: {
    fontSize: 11,
    fontFamily: "system-ui",
    fontWeight: "bold"
  },

  // deadline: {
  //   marginTop: 15,
  //   fontSize: 12,
  // }, 

  deadlineRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  deadlineText: {
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 5,
    color: "#333",
  },

  buttonRow: {
    flexDirection: 'row',
    marginTop: 15,
  },

  viewBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#4A90E2',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginRight: 8,
  },

  applyBtn: {
    flex: 1,
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },

  viewText: {
    color: '#4A90E2',
  },

  applyText: {
    color: '#fff',
  },

  // COMPANY
  companyCard: {
    width: (width - 48) / 2,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
  },

  companyLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },

  companyTitle: {
    marginTop: 10,
    fontWeight: '600',
  },

  companySub: {
    fontSize: 12,
    color: '#888',
  },

  // TOGGLE
  toggleBtn: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#4A90E2',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 10,
    color: '#4A90E2',
    marginTop: 10,
  },
  //modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },

  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#EAF2FF',
    padding: 6,
    borderRadius: 20,
  },

  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
  },

  modalSub: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },

  loginBtn: {
    backgroundColor: '#4A90E2',
    width: '100%',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  loginText: {
    color: '#fff',
    fontWeight: '600',
  },

  cancelBtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  cancelText: {
    color: '#333',
  },
});

