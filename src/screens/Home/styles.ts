import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 24,
  },
  textContainer: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 48,
  },
  
  eventDate: {
    color: '#7e7e7e',
    fontSize: 14,
    marginTop: 8,
  },

  listEmptyText: {
    color: '#7e7e7e',
    fontSize: 14,
    textAlign: "center",
  },
  
  input: {
    flex: 1,
    color: '#eee',
    backgroundColor: '#1f1e21',
    borderRadius: 8,
    height: 56,
    padding: 16,
    marginRight: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttoText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16,
  },
});
