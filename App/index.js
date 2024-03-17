import { View, Text, Image } from "react-native";
import { COLORS, SIZES, images, pdfs } from "../constants";
import { SafeAreaView } from "react-native-web";


const Home = () => {
    return (
        <SafeAreaView  style={{backgroundColor : COLORS.white, flex : 1}} >
            <View>
                <Image source={images.sample_image}></Image>
            </View>
        </SafeAreaView>
    )
}

export default Home;