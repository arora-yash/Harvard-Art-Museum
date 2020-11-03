import Axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { apiUrl } from "../config/config";

const HomeScreen = ({ navigation }) => {
	const [result, setResult] = useState(null);

	useEffect(() => {
		Axios.get(apiUrl).then((res) => {
			setResult(res.data.records);
		});
	}, []);

	return (
		<ScrollView>
			<View
				style={{
					marginTop: 32,
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-around",
				}}>
				{result &&
					result.map((record) => (
						<TouchableOpacity
							key={record.id}
							onPress={() =>
								navigation.navigate("Details", {
									record,
								})
							}>
							<View
								style={{
									backgroundColor: "#44a6ff",
									padding: 5,
									alignItems: "center",
									marginVertical: 20,
									width: 180,
								}}>
								<Text
									style={{
										textAlign: "center",
										marginVertical: 20,
									}}>
									{record.title}
								</Text>
								{record.primaryimageurl ? (
									<Image
										style={{
											width: 150,
											height: 150,
										}}
										source={{ uri: record.primaryimageurl }}
									/>
								) : (
									<View
										style={{
											alignItems: "center",
											justifyContent: "center",
											width: 150,
											height: 150,
										}}>
										<Text>NO IMAGE FOUND </Text>
									</View>
								)}
								<Text
									style={{
										textAlign: "center",
										marginVertical: 5,
									}}>
									{record.people[0].displayname}
								</Text>
								<Text
									style={{
										textAlign: "center",
										marginVertical: 5,
									}}>
									({record.people[0].culture})
								</Text>
							</View>
						</TouchableOpacity>
					))}
			</View>
		</ScrollView>
	);
};

export default HomeScreen;
