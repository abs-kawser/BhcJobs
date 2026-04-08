import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator } from 'react-native';

//COMPONENTS
import AppHeader from '../../components/AppHeader/AppHeader';
import HomeHeroSection from "../../components/HomeHeroSection/HomeHeroSection";
import Footer from '../../components/Footer/Footer';

//APIS
import { getIndustries } from '../../api/industry/industryApi';
import { getJobs } from '../../api/jobApi/jobApi';

const { width } = Dimensions.get('window');




// ================= DATA =================\\


const JOBS = [
  {
    id: "1",
    title: "Service Crew",
    company: "McDonald's",
    salary: "SAR 900 (BDT 29,700 approx.)",
    allowance: "SAR 250 (BDT 8,250 approx.)",
    location: "SAUDI ARABIA",
    type: "OVERSEAS",
    deadline: "7 April, 2026",
  },
  {
    id: "2",
    title: "Waiter",
    company: "KFC",
    salary: "SAR 850",
    allowance: "SAR 200",
    location: "SAUDI ARABIA",
    type: "OVERSEAS",
    deadline: "10 April, 2026",
  },
  {
    id: "3",
    title: "Cleaner",
    company: "Al Baik",
    salary: "SAR 700",
    allowance: "SAR 150",
    location: "SAUDI ARABIA",
    type: "OVERSEAS",
    deadline: "12 April, 2026",
  },
  {
    id: "4",
    title: "Driver",
    company: "Uber",
    salary: "SAR 1200",
    allowance: "SAR 300",
    location: "SAUDI ARABIA",
    type: "OVERSEAS",
    deadline: "15 April, 2026",
  },
];

const COMPANIES = [
  { id: "1", name: "HACC", jobs: 3 },
  { id: "2", name: "IHIS Company", jobs: 2 },
  { id: "3", name: "McDonald's", jobs: 4 },
  { id: "4", name: "Jabco", jobs: 1 },
  { id: "5", name: "KFC", jobs: 5 },
  { id: "6", name: "Starbucks", jobs: 2 },
];


// ================= SCREEN ================= \\

const HomeScreen = () => {

  // const [showAllIndustries, setShowAllIndustries] = useState(false);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [showAllCompanies, setShowAllCompanies] = useState(false);
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  const [jobs, setJobs] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(false);

  const displayedIndustries = showAllIndustries
    ? industries
    : industries.slice(0, 4);


  const displayedJobs = showAllJobs
    ? jobs
    : jobs.slice(0, 4);
  const companies = showAllCompanies ? COMPANIES : COMPANIES.slice(0, 4);











  const fetchIndustries = async () => {
    try {
      const data = await getIndustries();
      console.log("Fetched Industries:", JSON.stringify(data, null, 2));

      setIndustries(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIndustries();
  }, []);



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







  const fetchJobs = async () => {
    try {
      const data = await getJobs();

      const jobList = data?.data?.data || data?.data || [];
      console.log("Fetched Jobs:", JSON.stringify(jobList, null, 2));

      setJobs(jobList);
    } catch (error) {
      console.log(error);
    } finally {
      setJobsLoading(false); // ✅ MUST
    }
  };


  useEffect(() => {
    fetchJobs();
  }, []);

  // -------- JOB CARD -------- \\
  // const JobCard = ({ item }) => (
  //   <View style={styles.jobCard}>
  //     <View style={styles.jobHeader}>
  //       <Text style={styles.jobTitle}>{item.title}</Text>
  //       <Text style={styles.star}>☆</Text>
  //     </View>

  //     <View style={styles.companyRow}>
  //       <View style={styles.logoCircle}>
  //         <Text>M</Text>
  //       </View>
  //       <Text style={styles.companyName}>{item.company}</Text>
  //     </View>

  //     <View style={styles.salaryBox}>
  //       <Text style={styles.salaryText}>Salary: {item.salary}</Text>
  //       <Text style={styles.salaryText}>Food Allowance: {item.allowance}</Text>
  //     </View>

  //     <View style={styles.tagRow}>
  //       <View style={styles.tag}>
  //         <Text style={styles.tagText}>{item.type}</Text>
  //       </View>
  //       <View style={styles.tag}>
  //         <Text style={styles.tagText}>{item.location}</Text>
  //       </View>
  //     </View>

  //     <Text style={styles.deadline}>
  //       ⏰ Application Deadline: {item.deadline}
  //     </Text>

  //     <View style={styles.buttonRow}>
  //       <View style={styles.viewBtn}>
  //         <Text style={styles.viewText}>View</Text>
  //       </View>
  //       <View style={styles.applyBtn}>
  //         <Text style={styles.applyText}>Apply Now</Text>
  //       </View>
  //     </View>
  //   </View>
  // ); 

  // ================= JOB CARD =================
  const JobCard = ({ item }) => {
    // const logoUrl = `https://api.bhcjobs.com/storage/company-image/${item.image}`; 
      const logoUrl = item.company?.image
    ? `https://api.bhcjobs.com/storage/company-image/${item.company.image}`
    : null;

    return (
      <View style={styles.jobCard}>

        <View style={styles.jobHeader}>
          <Text style={styles.jobTitle}>
            {item.job_title}
          </Text>
          <Text style={styles.star}>☆</Text>
        </View>

        <View style={styles.companyRow}>
          <Image
            source={
              item.company?.image
                ? { uri: logoUrl }
                : { uri: "https://via.placeholder.com/40" }
            }
            style={styles.logoCircle}
          />

          {/* <View style={styles.logoCircle}>
            {item.image ? (
              <Image
                source={{
                  uri: `https://api.bhcjobs.com/storage/company-image/${item.image}`,
                }}
                style={{ width: 35, height: 35, borderRadius: 20 }}
                resizeMode="cover"
              />
            ) : (
              <Text style={{ fontWeight: "bold" }}>
                {item.company?.charAt(0)}
              </Text>
            
            )}
          </View> */}
          
          <Text style={styles.companyName}>
            {item.company_name}
          </Text>
        </View>

        <View style={styles.salaryBox}>
          <Text style={styles.salaryText}>
            Salary: {item.currency} {item.min_salary}
          </Text>
          <Text style={styles.salaryText}>
            Food Allowance: {item.currency} {item.food_amount}
          </Text>
        </View>

        <View style={styles.tagRow}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>
              {item.type?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>
              {item.country?.name?.toUpperCase()}
            </Text>
          </View>
        </View>

        <Text style={styles.deadline}>
          ⏰ Application Deadline:{" "}
          {new Date(item.expiry).toDateString()}
        </Text>

        <View style={styles.buttonRow}>
          <View style={styles.viewBtn}>
            <Text style={styles.viewText}>View</Text>
          </View>
          <View style={styles.applyBtn}>
            <Text style={styles.applyText}>Apply Now</Text>
          </View>
        </View>

      </View>
    );
  };


  // -------- COMPANY CARD --------
  const renderCompany = ({ item }) => (
    <View style={styles.companyCard}>
      <View style={styles.companyLogo}>
        <Text>{item.name.charAt(0)}</Text>
      </View>
      <Text style={styles.companyTitle}>{item.name}</Text>
      <Text style={styles.companySub}>{item.jobs} Available Jobs</Text>
    </View>
  );


  return (

    <>
      <AppHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeroSection />
        <View style={styles.container}>

          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Popular Industries</Text>
          </View>

          {loading ? (
            <View style={styles.loaderWrapper}>
              <ActivityIndicator size="small" color="#4A90E2" />
            </View>
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
        {/* <View style={styles.section}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Recommended Jobs</Text>
          </View>

          <FlatList
            data={jobs}
            renderItem={({ item }) => <JobCard item={item} />}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />

          <Text style={styles.toggleBtn} onPress={() => setShowAllJobs(!showAllJobs)}>
            {showAllJobs ? "▲" : "▼"}
          </Text>
        </View> */}
        {/* JOBS */}




        <View style={styles.section}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Recommended Jobs</Text>
          </View>
          {jobsLoading ? (
            <ActivityIndicator size="small" color="#4A90E2" />
          ) : (
            <FlatList
              data={displayedJobs}
              renderItem={({ item }) => <JobCard item={item} />}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
            />
          )}
          <Text
            style={styles.toggleBtn}
            onPress={() => setShowAllJobs(!showAllJobs)}
          >
            {showAllJobs ? "▲" : "▼"}
          </Text>
        </View>

        {/* COMPANIES */}
        <View style={styles.section}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Popular Companies</Text>
          </View>

          <FlatList
            data={companies}
            numColumns={2}
            renderItem={renderCompany}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            scrollEnabled={false}
          />

          <Text style={styles.toggleBtn} onPress={() => setShowAllCompanies(!showAllCompanies)}>
            {showAllCompanies ? "▲" : "▼"}
          </Text>
        </View>


      </ScrollView>
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

  jobTitle: {
    // fontWeight: '700',
    // fontFamily: "Poppins-Bold", 
    fontWeight: '700',
    fontFamily: "Poppins-Bold",
    textAlign: 'center',
    flex: 1,
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
  },

  salaryBox: {
    backgroundColor: '#EAF2FF',
    padding: 10,
    borderRadius: 8,
    marginTop: 18,
  },

  salaryText: {
    fontSize: 12,
    fontFamily: "system-ui",
  },

  tagRow: {
    flexDirection: 'row',
    marginTop: 15,
  },

  tag: {
    backgroundColor: '#F0F3F7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
  },

  tagText: {
    fontSize: 11,
  },

  deadline: {
marginTop: 15,    fontSize: 12,
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

});



// https://dev.bhcjobs.com/api/job/get

// https://dev.bhcjobs.com/api/company/get

//job_title ,company_name ,food_amount