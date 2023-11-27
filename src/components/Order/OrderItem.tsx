import React, { useCallback, useState } from "react";
import { View, StyleSheet } from "react-native";
import moment from "moment";

import OrdersList from "./OrdersList";
import MyText from "../MyText";
import MyButton from "../MyButton";

const getFormattedOrderDate = (date) => moment(date).format("MMMM Do , hh:mm");

export default function OrderItem({ order }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleOnDetails = useCallback(() => setShowDetails((s) => !s), []);

  return (
    <View style={styles.con}>
      <MyText
        boldy
        style={{
          textTransform: "uppercase",
          fontSize: 17,
          color: "red",
          marginBottom: 5,
        }}
      >
        Datails :
      </MyText>
      <View style={{ height: 1, width: "100%", backgroundColor: "red" }} />
      <View style={styles.summary}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <MyText>TotalPrice </MyText>
            <MyText>Date</MyText>
          </View>
          <View
            style={{
              flexDirection: "column",
              left: "220%",
            }}
          >
            <MyText style={styles.totalAmount}>
              {Math.abs(order.totalAmount).toFixed(2)} $
            </MyText>
            <MyText style={styles.date}>
              {getFormattedOrderDate(order.date)}
            </MyText>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
    padding: 15,
    marginLeft: 20,
  },
  summary: {
    alignSelf: "stretch",
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  totalAmount: {
    color: "red",
    alignSelf: "flex-end",
  },
  date: {
    color: "red",
    alignSelf: "flex-end",
  },
  details: {
    alignSelf: "stretch",
  },
});
