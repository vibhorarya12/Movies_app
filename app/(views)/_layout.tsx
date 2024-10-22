import { Stack } from "expo-router";

const ViewLayout = () =>{


        return(
            <Stack screenOptions={{headerShown:false}}>
                <Stack.Screen name="search-view" options={{ gestureEnabled: false }} />
                <Stack.Screen name="movie-view" options={{ gestureEnabled: false }} />
            </Stack>
        )

}

export default ViewLayout;