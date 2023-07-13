import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CarDetails } from "../screens/CarDetails";
import { Home } from "../screens/Home";
import { MyCars } from "../screens/MyCars";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingComplete } from "../screens/SchedulingComplete";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { Splash } from "../screens/Splash";

export type RoutesStackProps = {
  Home: undefined;
  CarDetails: undefined;
  Scheduling: undefined;
  SchedulingDetails: undefined;
  SchedulingComplete: undefined;
}

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false
        }}>
        <Screen name="Splash" component={Splash} />
        <Screen name="Home" component={Home} options={{
          gestureEnabled: false
        }} />
        <Screen name="CarDetails" component={CarDetails} />
        <Screen name="Scheduling" component={Scheduling} />
        <Screen name="SchedulingDetails" component={SchedulingDetails} />
        <Screen name="SchedulingComplete" component={SchedulingComplete} />
        <Screen name="MyCars" component={MyCars} />
      </Navigator>
    </NavigationContainer>
  )
}