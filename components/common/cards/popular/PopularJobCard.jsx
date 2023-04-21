import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./popularjobcard.style";
import { checkImgURL } from "../../../../utils";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  console.log(item);
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() =>
        handleCardPress(item)
          ? item.employer_logo
          : "https://api.dicebear.com/5.x/adventurer/svg?size=48&hair=short16&seed=Aneka"
      }
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImgURL(item.employer_logo)
              ? item.employer_logo
              : "https://api.dicebear.com/5.x/adventurer/svg?size=48&hair=short16&seed=Aneka",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
