import React from "react";
import { View, Text, Button, Linking, Image, Dimensions } from "react-native";

const Details = ({ route, navigation }) => {
	const {
		medium,
		division,
		people,
		provenance,
		url,
		primaryimageurl,
		verificationlevel,
	} = route.params.record;

	return (
		<View style={{ margin: 30, marginTop: 32 }}>
			<View>
				{primaryimageurl ? (
					<Image
						source={{
							uri: primaryimageurl,
						}}
						style={{
							width: Dimensions.get("screen").width - 60,
							height: 200,
						}}
					/>
				) : (
					<View
						style={{
							backgroundColor: "#44a6ff",
							alignItems: "center",
							justifyContent: "center",
							width: Dimensions.get("screen").width - 60,
							height: 200,
						}}>
						<Text>NO IMAGE FOUND </Text>
					</View>
				)}
			</View>
			<View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						marginVertical: 10,
					}}>
					<Text
						style={{
							fontSize: 20,
						}}>
						ART INFO
					</Text>
					{verificationlevel ? (
						<Image
							source={require("../assets/ver.png")}
							height={40}
							width={40}
						/>
					) : (
						<Image
							source={require("../assets/verno.png")}
							height={40}
							width={40}
						/>
					)}
				</View>
				<Text>Medium : {medium} </Text>
				<Text>Division: {division} </Text>
				<Text>Artist: {people[0].displayname} </Text>
			</View>
			<View>
				<Text
					style={{
						fontSize: 20,
						textAlign: "center",
						marginVertical: 10,
					}}>
					{" "}
					PROVENANCE{" "}
				</Text>
				<Text>{provenance} </Text>
			</View>
			<Button
				title="Click For More Info"
				onPress={() => Linking.openURL(url)}
			/>
		</View>
	);
};

export default Details;
