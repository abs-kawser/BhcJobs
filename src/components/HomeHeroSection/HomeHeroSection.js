// import React, { useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   Dimensions,
// } from "react-native";
// import Svg, { Path } from "react-native-svg";
// import Animated, {
//   useSharedValue,
//   withRepeat,
//   withTiming,
//   useAnimatedProps,
// } from "react-native-reanimated";
// import Icon from "react-native-vector-icons/Ionicons";

// const { width } = Dimensions.get("window");
// const AnimatedPath = Animated.createAnimatedComponent(Path);

// const HomeHeroSection = () => {
//   const progress = useSharedValue(0);

//   useEffect(() => {
//     progress.value = withRepeat(
//       withTiming(1, { duration: 2500 }),
//       -1,
//       true
//     );
//   }, []);

//   const animatedProps = useAnimatedProps(() => {
//     const offset = progress.value * 25;

//     return {
//       d: `
//         M0 0
//         L0 200
//         Q ${width * 0.25 + offset} 150, ${width * 0.5 + offset} 200
//         T ${width} 200
//         L ${width} 0
//         Z
//       `,
//     };
//   });

//   return (
//     <View style={styles.container}>
      
//       {/* Wave Background */}
//       <Svg width={width} height={220} style={styles.wave}>
//         <AnimatedPath animatedProps={animatedProps} fill="#4A90E2" />
//       </Svg>

//       {/* Content */}
//       <View style={styles.content}>
        
//         <Text style={styles.title}>
//           #1 Platform for Saudi Jobs
//         </Text>

//         <Text style={styles.subtitle}>
//           Apply for jobs in Saudi Arabia with verified employers.
//           We connect Bangladeshi workforce with high-demand Saudi Jobs.
//         </Text>

//         <View style={styles.searchContainer}>
//           <TextInput
//             placeholder="Search Job"
//             placeholderTextColor="#999"
//             style={styles.input}
//           />

//           <View style={styles.iconBox}>
//             <Icon name="search" size={18} color="#fff" />
//           </View>
//         </View>

//       </View>
//     </View>
//   );
// };

// export default HomeHeroSection; 

// const styles = StyleSheet.create({
//   container: {
//     // backgroundColor: "#c2cedb",
//     paddingTop: 80,
//     paddingBottom: 60, // 👈 search পর্যন্ত cover করবে
//     alignItems: "center",
//     // overflow: "hidden", // 👈 extra wave hide
//   },

//   wave: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//   },

//   content: {
//     width: "100%",
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },

//   title: {
//     color: "#fff",
//     fontSize: 22,
//     fontWeight: "700",
//     textAlign: "center",
//   },

//   subtitle: {
//     color: "#E6E6E6",
//     fontSize: 13,
//     textAlign: "center",
//     marginTop: 10,
//     lineHeight: 18,
//   },

//   searchContainer: {
//     marginTop: 20,
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     borderRadius: 30,
//     alignItems: "center",
//     paddingHorizontal: 15,
//     height: 48,
//     width: "92%",
//   },

//   input: {
//     flex: 1,
//     fontSize: 14,
//   },

//   iconBox: {
//     backgroundColor: "#4A90E2",
//     padding: 8,
//     borderRadius: 20,
//   },
// }); 

// //========================================\\ 

import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
  useAnimatedProps,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");
const AnimatedPath = Animated.createAnimatedComponent(Path);

const HomeHeroSection = () => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 2500 }),
      -1,
      true
    );
  }, []);

  const animatedProps = useAnimatedProps(() => {
    const offset = progress.value * 25;

    return {
      d: `
        M0 0
        L0 280
        Q ${width * 0.25 + offset} 150, ${width * 0.5 + offset} 200
        T ${width} 200
        L ${width} 280
        L ${width} 0
        Z
      `,
    };
  });

  return (
    <View style={styles.container}>

      {/* Wave Background */}
      <Svg width={width} height={380} style={styles.wave}>
        <AnimatedPath animatedProps={animatedProps} fill="#4A90E2" />
      </Svg>

      {/* Content */}
      <View style={styles.content}>


          <View>
 <Text style={styles.title}>
          #1 Platform for Saudi Jobs
        </Text>

        <Text style={styles.subtitle}>
          Apply for jobs in Saudi Arabia with verified employers.
          We connect Bangladeshi workforce with high-demand Saudi Jobs.
        </Text>
          </View>
 
       

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search Job"
            placeholderTextColor="#999"
            style={styles.input}
          />

          <View style={styles.iconBox}>
            <Icon name="search" size={18} color="#fff" />
          </View>
        </View>

      </View>
    </View>
  );
};

export default HomeHeroSection;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 80,
    alignItems: "center",
    overflow: "hidden",
    minHeight: 280,
  },

  wave: {
    position: "absolute",
    top: 0,
    left: 0,
  },

  content: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    color: "#E6E6E6",
    fontSize: 13,
    textAlign: "center",
    marginTop: 10,
    lineHeight: 18,
  },

  searchContainer: {
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 15,
    height: 48,
    width: "92%",
  },

  input: {
    flex: 1,
    fontSize: 14,
  },

  iconBox: {
    backgroundColor: "#4A90E2",
    padding: 8,
    borderRadius: 20,
  },
});