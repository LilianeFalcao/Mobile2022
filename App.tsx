import "react-native-gesture-handler";
import Navigation from "./src/navigation";
import {AuthProvider} from "./src/Hook/auth";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />;
    </AuthProvider>
  );
}