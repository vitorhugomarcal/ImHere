import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { 
    width: '100%',
    backgroundColor: '#1f1e25',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    marginLeft: 16,
    color: '#fff',
    fontSize: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttoText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
})